<script setup lang="ts">
import { Exchange } from '../../interfeces'

interface Props {
    exchange: Exchange
}
const { exchange } = defineProps<Props>()

const imgUrl = import.meta.env.VITE_API_IMAGES_URL
</script>

<template>
    <div class="bg-neutral-600 p-2 flex flex-col rounded-md shadow-md w-full">
        <h2 class="text-xl font-bold tracking-wider">{{ exchange.name }}</h2>

        <div class="flex flex-col sm:flex-row">
            <div
                class="flex gap-2 text-xl justify-center items-center border-b"
            >
                <p class="flex gap-2 sm:border-b items-center">
                    Actual Price:
                    <span> ${{ exchange.price }} </span>
                </p>

                <v-icon
                    scale="2.5"
                    name="md-showchart-sharp"
                    :fill="exchange.is_up ? 'green' : 'red'"
                    :flip="exchange.is_up ? '' : 'vertical'"
                />
            </div>
            <img
                class="w-16 h-16 aspect-square self-center mt-2"
                :src="`${imgUrl}/${exchange.image}`"
            />
        </div>
    </div>
</template>

<style scoped></style>
