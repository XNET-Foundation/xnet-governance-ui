## Getting Started

First, run the development server:

```bash

yarn dev
npm run dev
yarn install

```

## Changing Realm

Locate realm ID located in the URL after creation and add to env variable so the UI automtically redirects to the desired realm.

```bash

REALM=ABo5rH8pzBeWvPULQ8Nv11Jw4AV2Lc9Z7raRVuo64Nh3

```
### Using custom Swap API endpoints

You can set custom URLs via the configuration for any self-hosted Jupiter APIs, like the [V6 Swap API](https://station.jup.ag/docs/apis/self-hosted) or [Paid Hosted APIs](https://station.jup.ag/docs/apis/self-hosted#paid-hosted-apis) Here is an example:

```
NEXT_PUBLIC_JUPTER_SWAP_API_ENDPOINT=https://quote-api.jup.ag/v6
```
