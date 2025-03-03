---
title: Project Setup
sidebar_position: 1
---

# API Integration

The app fetches cryptocurrency prices from the CoinCap API:

1. API Overview:

- **Base URL:** `https://api.coincap.io/v2/`
- **Endpoint:** `/assets?limit=5&order=market_cap` - meaning first 5 coints with the most market cap
- **Example Response:**
  ```json
  {
    "data": [
      {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "priceUsd": "45000.00"
      }
    ]
  }
  ```

2. Fetching Data in the App

   The app uses Axios to make API requests and React Query to manage state, caching, and automatic update. This is done using the Axios instance inside `utils/axios.ts`, the Axios instance ensures all requests go through a pre-configured base URL `https://api.coincap.io/v2/`. Inside `hooks/useCrypto.ts`, data is fetched using `axiosInstance` and formatted inside a JS object with respect to the the type declared in `types/crypto.ts`.

   ```js
    export default function useCrypto() {
        return useQuery<CryptoCoin[]>({
            queryKey: ["cryptoPrices"],
            queryFn: fetchCryptoPrices,
            refetchInterval: 60000,
            retry: 1,
        });
    }
   ```
