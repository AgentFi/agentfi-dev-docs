---
sidebar_position: 2
---

# Creating a Dex Balancer Agent

### Strategy Info

This strategy deposits ETH and USDB evenly across the Ring, Thruster, and Blasterswap V2 pools. The Thruster LP token is staked into Hyperlock and the Ring LP token is staked into Ring Staking Rewards.

Rewards stack:
- Ring swap fees
- Thruster swap fees
- Blasterswap swap fees
- Thruster Points
- Hyperlock Credits
- Ring Points
- Blast Points
- Blast Gold
- Blast Native Yield

This is a noncustodial strategy. Only the owner of the strategy has access to the funds inside. The owner can withdraw these funds at any time.

### Create Functions

Create an agent using one of these functions on the [**DexBalancerAgentFactory**](./../../contracts/factory/DexBalancerAgentFactory).

```solidity
createDexBalancerAgentForRoot()
createDexBalancerAgentAndExplorer()
createDexBalancerAgentForRootAndRefundExcess()
createDexBalancerAgentAndExplorerAndRefundExcess()
```

All create functions take two `deposit` inputs. These deposits must be ETH & USDB or WETH & USDB. ETH is signified by the zero address.

The agent will attempt to deposit all of the ETH, WETH, and USDB it has. It can only deposit at the pools' current ratio and will not attempt to rebalance. Any funds that it cannot deposit will remain in the agents TBA. Using one of the methods with `AndRefundExcess` will also transfer any unallocated ETH and USDB back to the creator.

If you already have a genesis or explorer agent, use one of the functions with `ForRoot` to mint the new strategy to your existing agent. Use one of the functions with `AndExplorer` to create a new explorer agent with the strategy agent inside.

### Using the Agent

Strategy agents from this factory come installed with the [**DexBalancerModuleA**](./../../contracts/modules/DexBalancerModuleA).

coming soon
