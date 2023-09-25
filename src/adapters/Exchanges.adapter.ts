import { Exchange, ExchangeFromApi } from "../interfeces";

export const adaptExchangeFromApi = (exchange: ExchangeFromApi): Exchange => {
  const adaptedExchange: Exchange = {
    kind: exchange.kind,
    image: exchange.image,
    price: exchange.price,
    is_up: exchange.is_up,
    realmId: exchange.realmId,
  };
  return adaptedExchange;
};

export const adaptExchangesFromApi = (
  exchanges: ExchangeFromApi[]
): Exchange[] => {
  let adaptedExchanges: Exchange[] = [];

  for (let i = 0; i < exchanges.length; i++) {
    const exchange = exchanges[i];

    const adaptedExchange = adaptExchangeFromApi(exchange);

    adaptedExchanges.push(adaptedExchange);
  }

  return adaptedExchanges;
};
