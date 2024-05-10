# AgentFi Developer Docs

Developer documentation for AgentFi.

Hosted at https://dev-docs.agentfi.io

## Requirements

Node.js >= 16.14

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Contract Docgen

Assuming this repo is at `./agentfi-dev-docs` and the agentfi-contracts repo is at `./agentfi-contracts`

```console
mkdir ./agentfi-contracts/templates/
cp ./agentfi-dev-docs/contract.hbs ./agentfi-contracts/templates/
cd ./agentfi-contracts
npm i
rm -rf docs
mv ./contracts/mocks ./mocks
npx solidity-docgen --solc-module solc-0.8 -t ./templates
mv ./mocks ./contracts/mocks
rm -rf ../agentfi-dev-docs/docs/dev-docs/Contracts/
cp -r ./docs/. ../agentfi-dev-docs/docs/05-dev-docs/Contracts/
cd ../agentfi-dev-docs
python3 scripts/contract_fixes.py
cp ./scripts/contracts_category.json ./docs/05-dev-docs/01-contracts/_category_.json
cp ./scripts/contracts_index.md ./docs/05-dev-docs/01-contracts/index.md
yarn build
yarn start
```

## Upload to AWS

```console
yarn build
aws s3 rm s3://dev-docs.agentfi.io --include "*" --recursive
aws s3 cp --recursive --cache-control="max-age=86400" build/ s3://dev-docs.agentfi.io/
aws cloudfront create-invalidation --distribution-id E2RQ88U8DFCO66 --paths "/*"
# wait a minute for invalidation to process
```
