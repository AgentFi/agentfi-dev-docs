---
sidebar_position: 2
---

# Agent Types
---

Agents can be categorized and analyzed in a number of ways.

### By Collection

There are three NFT collections launched on Blast.

1. **The Blastooor Genesis Collection**. Our inaugural NFT collection which sold out in minutes. This is our primary collection which earns the greatest rewards. The most active secondary marketplace is Element Market. <br/> CA: 0x5066A1975BE96B777ddDf57b496397efFdDcB4A9

2. **Strategies**. The Agents that hold and invest assets. These integrate with external protocols to maximize your returns. <br/> CA: 0x73E75E837e4F3884ED474988c304dE8A437aCbEf

3. **Explorers**. Our free mint collection, for users that want to use AgentFi but don't have a Genesis Agent. <br/> CA: 0xFB0B3C31eAf58743603e8Ee1e122547EC053Bf18

### In the Nested Structure

The AgentFi protocol uses a nested structure of NFTs. The root agent is designed to be a safehouse for any and all assets and child agents. The child agents are equipped with extra functionality to integrate with external protocols.

<div class="image_container">
  <img src="/img/diagrams/architecture nested tbas.svg" alt="nested tbas"/>
</div>

Root agents will be from the Genesis or Explorer collections. Child agents will be from the Strategy collection.

### By Level of Custodial Access

Agents have different levels of custodial access. Custodial access is an optional feature that is disabled by default on most agents. These agents are *noncustodial*, meaning that only the owner or root owner of the agent has access to the agent and the assets inside. There is no admin backdoor - no one else, including the AgentFi team, can steal these funds.

Some strategy types, such as the Multipliooor strategy, come equipped with the custodial featured enabled by default. In this case, the agent grants access to a set of AgentFi services. This is required for the services to complete the missions for you and give you the multipliers.

Agents can also be *semi-custodial*. These agents grant custodial access to AgentFi services, but only to a limited subset of functionality. In the case of Concentrated Liquidity agents, the AgentFi services can only rebalance your deposits but cannot remove them.
