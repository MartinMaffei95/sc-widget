import { Ref, ref } from 'vue'
import { Exchange } from '../interfeces'
import { adaptExchangesFromApi } from '../adapters'

/**
 * This is a singleton service.
 * Use the `getInstance()` method to get the instance of a class.
 */

class ExchangesApi {
    private static instance: ExchangesApi
    private exchanges: Ref<Exchange[]>

    constructor() {
        this.exchanges = ref([])
    }

    public static getInstance(): ExchangesApi {
        if (!ExchangesApi.instance) {
            ExchangesApi.instance = new ExchangesApi()
        }

        return ExchangesApi.instance
    }

    getExchanges(): Ref<Exchange[]> {
        return this.exchanges
    }
    async fetchExchanges() {
        try {
            const actualTick = new Date()

            const formattedTick = actualTick.toISOString()

            const res = await fetch(`${import.meta.env.VITE_API_URL}/exchanges`)

            const data = await res.json()
            this.exchanges.value = await adaptExchangesFromApi(data)
        } catch (error) {
            // alert('Ocurrio un error')
            console.log('ERROR', error)
        }
    }
}

export default ExchangesApi
