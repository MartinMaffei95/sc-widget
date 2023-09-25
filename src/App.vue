<script setup lang="ts">
import ExchangesContainer from './components/Exchanges/ExchangesContainer.vue'
</script>

<template>
    <div class="flex flex-col bg-neutral-800 text-neutral-50 gap-4 p-4 w-full">
        <h1 class="font-bold text-2xl tracking-widest">Sim Companies Market</h1>
        <span>Between now and yesterday</span>
        <ExchangesContainer />
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
