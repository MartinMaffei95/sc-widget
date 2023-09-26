<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
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

onMounted(async () => {
    await service.fetchExchanges()
})
</script>

<template>
    <div class="flex text-neutral-50 gap-4 p-4 w-full [&_div]:w-full">
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
