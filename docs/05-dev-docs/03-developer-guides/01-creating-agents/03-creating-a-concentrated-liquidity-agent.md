---
sidebar_position: 3
---

# Creating a Concentrated Liquidity Agent

### Strategy Info

This strategy LPs into a concentrated liquidity dex. This strategy allows for active liquidity management, allowing the AgentFi Rebalancing AI to rebalance CL positions when they get out of range.

This is a limited custodial strategy. It gives access to the Rebalancing AI to rebalance the CL position, but does not give it access to remove the funds.

Rewards stack:
- Swap Fees
- Blast Points
- Blast Gold
- Blast Native Yield

### Create Functions

Create an agent using one of these functions on the [**ConcentratedLiquidityAgentFactory**](./../../contracts/factory/ConcentratedLiquidityAgentFactory).

```solidity
createConcentratedLiquidityAgentForRoot()
createConcentratedLiquidityAgentAndExplorer()
createConcentratedLiquidityAgentForRootAndRefundExcess()
createConcentratedLiquidityAgentAndExplorerAndRefundExcess()
createConcentratedLiquidityAgentForRootAndMigrate()
createConcentratedLiquidityAgentAndExplorerAndMigrate()
createConcentratedLiquidityAgentForRootAndMigrateWithPermit()
createConcentratedLiquidityAgentAndExplorerAndMigrateWithPermit()
```

If you have an existing V2 LP token, you can migrate it using one of the `AndMigrate` functions.

The rest of the create functions take two `deposit` inputs. The factory accepts ERC20s as well as ETH by passing in address zero.

It also takes `mintParams` or `mintBalanceParams` for the initial setup of the position.

The agent will attempt to deposit all of the token0 and token1 it has. Any funds that it cannot deposit will remain in the agents TBA. Using one of the methods with `AndRefundExcess` will also transfer any unallocated ETH and USDB back to the creator, otherwise they will be deposited during the next rebalance.

If you already have a genesis or explorer agent, use the function with `ForRoot` to mint the new strategy to your existing agent. Use the function with `AndExplorer` to create a new explorer agent with the strategy agent inside.

### Using the Agent

Strategy agents from this factory come installed with the [**ConcentratedLiquidityGatewayModuleC**](./../../contracts/modules/ConcentratedLiquidityGatewayModuleC).

Coming soon
