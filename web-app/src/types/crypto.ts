export type CoinCapAsset = {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
  vwap24Hr: string;
};

export type CoinCapResponse = {
  data: CoinCapAsset[];
};

export type CryptoCoin = {
  id: string;
  name: string;
  symbol: string;
  price: string;
};
