---
sidebar_position: 4
---

# Creating a Looper Agent

### Strategy Info

This strategy loops deposits and borrows of Particle DUO ETH or DUO USD in the Orbit Moon Pool to gain leverage and boost rewards.

Rewards stack:
- Orbit leveraged lending rate - borrow rate
- Orbit emissions
- Leveraged exposure to ETH
- DUO Points
- Blast Points
- Blast Gold
- Blast Native Yield

### Create Functions

Create an agent using one of these functions on the [**LoopooorAgentFactory**](./../../contracts/factory/LoopooorAgentFactory).

```solidity
createLoopooorAgentForRoot()
createLoopooorAgentAndExplorer()
```

The creator must pass in parameters for how to configure the agent and how much of which token to deposit.

```solidity
enum MODE {
    INITIAL, // Initial state
    FIXED_RATE, // Mint Fixed Rate
    VARIABLE_RATE // Mint Variable Rate
}

struct MintParams {
    address wrapMint;
    address otoken;
    address underlying;
    MODE mode;
    uint256 leverage;
}

struct TokenDeposit {
    address token;
    uint256 amount;
}
```

If you already have a genesis or explorer agent, use the function with `ForRoot` to mint the new strategy to your existing agent. Use the function with `AndExplorer` to create a new explorer agent with the strategy agent inside.

### Using the Agent

Strategy agents from this factory come installed with the [**LoopooorModuleD**](./../../contracts/modules/LoopooorModuleD).

coming soon
