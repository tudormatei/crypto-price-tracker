# Crypto Price Tracker

This project is a simple cryptocurrency price tracker built using Next.js. It fetches live prices of five cryptocurrencies from the CoinCap API and allows users to search for specific currencies. The project also includes a documentation site created with Docusaurus.

## Features

- Displays live cryptocurrency prices
- Fetches data from the CoinCap API
- Search functionality to filter displayed currencies
- Manual refresh button to update prices
- State management using React Query
- Styled with Emotion for a modern UI
- Documentation using Docusaurus

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/tudormatei/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. Install dependencies for the web app:

   ```sh
   cd web-app
   npm install
   ```

3. Install dependencies for the documentation:
   ```sh
   cd ../docs
   npm install
   ```

## Running the Project

### Start the Web App

```sh
cd web-app
npm run dev
```

The app will be available at `http://localhost:3000`.

### Start the Documentation

```sh
cd docs
npm run start
```

The documentation will be available at `http://localhost:3001`.

## Project Structure

```
crypto-price-tracker/
│── web-app/            # Next.js application
│   ├── public/        # Default assets
│   ├── src/
│   │   ├── app/            # Main app directory
│   │   ├── components/     # UI components (Button, InputField, Table, Providers)
│   │   ├── constants/      # UI constants (colors, padding, gap, border radius)
│   │   ├── hooks/         # Custom react hook useCrypto
│   │   ├── types/         # TypeScript type definitions
│   │   ├── utils/         # Utility functions (axios instance for API calls)
│   └── package.json   # Dependencies and scripts
│
│── docs/              # Docusaurus documentation
│   ├── docs/         # Documentation markdown files
│   ├── src/          # Default styles and components
│   ├── docusaurus.config.js # Docusaurus configuration
│   └── package.json   # Dependencies and scripts
│
└── README.md          # Project overview (this file)
```

## API Integration

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

3. Data display
   The fetched data is displayed using a custom React reusable table component `/components/Table/Table.jsx`, which accepts a list of strings as table headers, and a list of `CryptoCoin` to display the actual data inside the table cells.

## State Management

I chose to use React Query as it simplified data fetching (by not having to use useStates and useEffects)while also caching and updating data.

I used React Query as such:

- Fetching and caching API data
- Automatic refetching every 60 seconds
- Retry mechanism for failed requests
- Minimizing rerendering of the price list, as most of the time prices were already cached

## Challenges & Solutions

### API Rate Limits

- Solution: Implemented manual refresh button to reduce frequent API calls.

### Handling Loading & Errors

- Solution: Used React Query's `isLoading` and `error` states to display states accordingly.
