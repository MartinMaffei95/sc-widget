<script setup lang="ts">
import { onMounted } from 'vue'
// import ExchangesApi from '../../services/api-exchanges.service'
// const service = ExchangesApi.getInstance()

// const exchanges = service.getExchanges()

const f = async () => {
    const res = await fetch(
        'https://www.simcompanies.com/api/v2/market-ticker/0/2023-09-23T22:51:02.342Z/',
        {
            headers: {
                accept: 'application/json, text/plain, */*',
                'accept-language':
                    'es-AR,es;q=0.9,ru-RU;q=0.8,ru;q=0.7,es-419;q=0.6,la;q=0.5',
                'sec-ch-ua':
                    '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'x-csrftoken':
                    'CXuj3MRrKfKvJXzIMcC1DSbWboREX1dADhDWmGv7qz1Dy3zjkwTysDWKSBOWfR9O',
                'x-prot': 'ff49948bf48e43c9b34191dd7d703c4b',
                'x-ts': '1695595862442',
                'x-tz-offset': '180',
            },
            referrer: 'https://www.simcompanies.com/',
            referrerPolicy: 'same-origin',
            body: null,
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        }
    )
    console.log(await res)
}

onMounted(async () => {
    // await service.fetchExchanges()
    f()
})
</script>

<template>
    <div>
        <!-- <div v-for="exchange in exchanges">
            <h2>{{ exchange.kind }}</h2>
        </div> -->
    </div>
</template>

<style scoped></style>
