<script setup lang="ts">
import { Ref, computed, onMounted, reactive, ref } from 'vue'
import ExchangesApi from '../../services/api-exchanges.service'
import Card from './Card.vue'
const service = ExchangesApi.getInstance()
const exchanges = service.getExchanges()

const sortConfig = reactive({
    is_up: 'UP_TO_DOWN',
    price: 'MINOR_TO_MAJOR',
})

const renderedExchanges = computed(() => {
    if (sortConfig.price === 'MAJOR_TO_MINOR') {
        let sortedExchanges = exchanges.value.sort((a, b) => {
            return b.price - a.price
        })
        return sortedExchanges
    }
    if (sortConfig.price === 'MINOR_TO_MAJOR') {
        let sortedExchanges = exchanges.value.sort((a, b) => {
            return a.price - b.price
        })
        return sortedExchanges
    }
})

const view: Ref<'UP' | 'DOWN'> = ref('UP')

computed(() => {})
onMounted(async () => {
    await service.fetchExchanges()
})
</script>

<template>
    <div>
        <input type="checkbox" v-model="view" />
    </div>
    <div
        class="flex flex-col sm:flex-row text-neutral-50 gap-4 p-2 sm:p4 w-full [&_div]:w-full"
    >
        <div class="flex flex-col gap-4">
            <template v-for="exchange in renderedExchanges">
                <Card v-if="exchange.is_up" :exchange="exchange" />
            </template>
        </div>
        <div class="flex flex-col gap-4">
            <template v-for="exchange in renderedExchanges">
                <Card v-if="!exchange.is_up" :exchange="exchange" />
            </template>
        </div>
    </div>
</template>

<style scoped></style>
