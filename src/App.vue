<script setup lang="ts">
import ExchangesContainer from './components/Exchanges/ExchangesContainer.vue'
</script>

<template>
    <div
        class="flex flex-col bg-neutral-800 text-neutral-50 gap-4 p-4 w-full min-h-screen max-w-screen overflow-hidden"
    >
        <h1 class="font-bold text-2xl tracking-widest">
            Sim Companies Journal
        </h1>
        <span>Between now and yesterday</span>
        <ExchangesContainer />
    </div>
</template>
