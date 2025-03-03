import axiosInstance from "@/utils/axios";
import { CoinCapResponse, CryptoCoin } from "@/types/crypto";
import { useQuery } from "@tanstack/react-query";

const fetchCryptoPrices = async (): Promise<CryptoCoin[]> => {
  const response = await axiosInstance.get<CoinCapResponse>("assets", {
    params: {
      limit: 5,
      order: "market_cap",
    },
  });

  return response.data.data.map((coin) => ({
    id: String(coin.id),
    name: String(coin.name),
    symbol: String(coin.symbol),
    price: parseFloat(coin.priceUsd).toFixed(2),
  }));
};

export default function useCrypto() {
  return useQuery<CryptoCoin[]>({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    refetchInterval: 60000,
    retry: 1,
  });
}
