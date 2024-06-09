---
sidebar_position: 3
---

# Using your Agent

### Strategy Agents

The strategy agents are ERC6551 Token Bound Accounts. When the agent was created, it had logic from a strategy module installed in it. Do not attempt to call the module directly - instead, call the agent using the functions defined in both the TBA and its installed modules.

The latest V2 version of our strategy agents allow for execution from the root owner as well as the direct parent. This means you can call the strategy agent directly, no need to execute through its parent agent.

All of our current factories create V2 strategy agents.

### Genesis and Explorer Agents

These are top level agents. You do not need to interact with them directly, except in cases where the strategy must be called by the direct owner. These are V1 style agents, guide for that todo but basically use execute()

### Calling an Agent

Calling an agent means to send a transaction to the agent TBA. These TBAs are registered in both the `ERC6551Registry` and `AgentRegistry`.
