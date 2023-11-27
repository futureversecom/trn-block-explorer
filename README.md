<p align="center">
    <img src="./.github/logo.png" height="96">
    <h3 align="center">The Root Network Block Explorer</h3>
</p>

## Development

- Run the development server

```
yarn && yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### UAT Environments

All commits merged to `main` branch will trigger deployments on Vercel for the following environments:

- UAT/Porcini: https://trn-block-explorer-porcini.vercel.app
- UAT/Mainnet: https://trn-block-explorer-mainnet.vercel.app

### PROD Environment

A commit that starts with `Release v` message will trigger production deployment on Vercel when merge to `main`

- PROD/Porcini: https://explorer.rootnet.cloud
- PROD/Mainnet: https://explorer.rootnet.live

## 📥 Provide Feedback

- [Start a Discussion](https://github.com/futureversecom/trn-block-explorer/discussions) with a question, piece of feedback, or idea you want to share with the team.
- [Open an Issue](https://github.com/futureversecom/trn-block-explorer/issues) if you believe you've encountered a bug that you want to flag for the team.
