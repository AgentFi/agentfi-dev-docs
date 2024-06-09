---
sidebar_position: 1
---

# Creating an Agent

You can create a strategy agent by calling one of our factory contracts. Which factory and method depends on the type of agent you want to create and if you have an agent already.

Our genesis agents have sold out and can no longer be minted. You can create new strategy and explorer agents.

All factory contracts are stored under `contracts/factory`. The contract addresses can be found at [**Factory Contract Addresses**](./../contract-addresses/Mainnet/Blast#factories).

### Strategy Agents

When a factory creates a strategy agent, it mints the strategy NFT, creates the agent TBA, and installs the logic for the strategy onto the TBA via a module.

These modules are separate contracts that contain the logic to execute and manage the strategy. Do not attempt to call the module directly - instead, call the agent using the functions defined in both the TBA and its installed modules.
