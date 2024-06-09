---
sidebar_position: 2
---

# Creating a Multipliooor Agent

### Strategy Info

This strategy uses a nominal amount of ETH to complete Blast missions and earn the Blast multipliers for you.

This strategy requires a minimum deposit of 0.003 ETH (~$10) to run.

This is a joint custodial strategy. The agent operates a hot wallet and uses AI to complete the missions. This AI will have access to the funds inside the strategy; it only withdraws what is required to complete the missions and returns the rest.

The owner of the agent can withdraw the funds inside the agent's TBA at any time. The owner cannot withdraw funds inside the hot wallet - the agent must return them to the TBA first.

The owner of the agent must also link this hot wallet to theirs to get credit for the multipliers. This can be handled in our dapp.

### Create Functions

Create an agent using one of these functions on the [**MultipliooorAgentFactory**](./../../contracts/factory/MultipliooorAgentFactory).

```solidity
createMultipliooorAgentForRoot()
createMultipliooorAgentAndExplorer()
```

If you already have a genesis or explorer agent, use the function with `ForRoot` to mint the new strategy to your existing agent. Use the function with `AndExplorer` to create a new explorer agent with the strategy agent inside.

### Using the Agent

Strategy agents from this factory come installed with the [**MultiplierMaxxooorModuleB**](./../../contracts/modules/MultiplierMaxxooorModuleB).

coming soon
