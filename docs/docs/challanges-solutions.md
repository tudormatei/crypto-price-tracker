---
title: Challanges Faced and Solutions
sidebar_position: 5
---

# Challenges & Solutions

1. One of the challanges was that I had to dig a little through the CoinCap API to find out what the correct returned JSON format is, as it wasn't really clear from the start. After finding this out it was a straight shot to creating the correct typescript type that the request would be expecting. Alternatively, I could have used Postman to examine the API in a more detailed approach.

2. Another challange I've encountered was while setting up the Query Client boiler plate from `react-query`. Initially, I tried doing everything inside `layout.tsx`, however I quickly realized that it's much better to separate functionality and create a separte `Provider.tsx` component which handles exactly that.
