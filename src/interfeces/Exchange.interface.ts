/**
 * ## Types for adapter.
 * Example:
 * Have a ExchangeFromApi with the adapter convert to  Exchange
 */
export type ExchangeFromApi = {
  kind: number;
  image: string;
  price: number;
  is_up: boolean;
  realmId: number;
};

export type Exchange = {
  kind: number;
  image: string;
  price: number;
  is_up: boolean;
  realmId: number;
};
