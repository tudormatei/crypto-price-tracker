---
title: State Management
sidebar_position: 4
---

# State Management

I chose to use React Query as it simplified data fetching (by not having to use useStates and useEffects)while also caching and updating data.

I used React Query as such:

- Fetching and caching API data
- Automatic refetching every 60 seconds
- Retry mechanism for failed requests
- Minimizing rerendering of the price list, as most of the time prices were already cached
