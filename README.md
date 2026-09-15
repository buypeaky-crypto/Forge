# Forge

Public Hugging Face workshop. Browse the Hub, route a prompt through Conduit, open the fitting pipeline.

Live: [agentsworkshop.grok.me](https://agentsworkshop.grok.me/)

Source: [github.com/buypeaky-crypto/Forge](https://github.com/buypeaky-crypto/Forge)

## What it is

- **Models** — search and filter public Hugging Face models by task.
- **Conduit** — a local keyword router. The prompt never leaves the browser until Forge fetches Hub metadata.
- **Donate** — a small send on BTC, ETH, or SOL keeps the workshop independent.

Forge does **not** call xAI. There is no `XAI_API_KEY` in this app. Hub traffic goes to `huggingface.co/api`. Routing is a static rule table in `src/lib/conduit.ts`.

## Donate

Any amount. Copy from `/donate` or here:

- **BTC** `G2dYPPTMorSSoUb68fKYbX55pARzrT1FcoRfjgYQFy9V`
- **ETH** `0x438E7Be244e46D414f097B211cC4fa7549fB3C3b`
- **SOL** `G2dYPPTMorSSoUb68fKYbX55pARzrT1FcoRfjgYQFy9V`

## Run locally

```bash
npm ci
npm run dev
```

`npm run typecheck` is the type gate.

## License

MIT.
