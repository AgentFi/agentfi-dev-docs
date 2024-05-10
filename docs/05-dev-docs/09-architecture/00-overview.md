# Architecture Overview
---

### Technical Architecture

Our agents works by using two ERC standards - ERC721 (the standard to create the NFT), and the ERC6551 standard (the standard for token bound accounts).

Our platform uniquely employs nested NFTs, allowing for each strategy to be its own NFT. This design not only secures funds but also accumulates points, enabling unique use cases and maximum composability.

Each Agent is the combination of one NFT and all of its TBAs. By default each Agent will only have one TBA, but it may have more.

<div class="image_container">
  <img src="/img/diagrams/architecture nested tbas.svg" alt="nested tbas"/>
</div>

### Technical Flow

1. User comes in and mints a Genesis Agent, which comes with the Agent NFT and TBA.

2. User can create Strategy Agents, which contain logic to execute investment strategies and are nested within the Genesis Agent.

### Details

The Genesis collection has a maximum supply of 6551. The Strategies collection has no maximum supply and can be freely minted as long as you have a Genesis agent.

The Agent TBAs are all based on Tokenbound's AccountV3. They are extended to take advantage of Blast's native yield and gas rewards. The Genesis TBAs were designed to be a safehouse for funds within the nested account structure. The Strategy TBAs were designed for greater flexibility and power, using overrides and modules to add custom logic for the given strategy type.

By default all Agent TBAs are noncustodial, meaning that only the owner has access to the funds inside. There is an optional functionality to allow custodial access to the TBA. For most agents this is not disabled and can only be enabled by the agent owner. Some Agent types come with this feature enabled when it is created. For example, the Multipliooor strategy relies on our system to farm the Blast multiplier. Future strategies may utilize AI to manage their investments and must give custodial access to the AI.

We make extensive use of the factory pattern to efficiently create agents with a high degree of uniformity, while still leaving room for extensibility and customization. Users can call one of our factory contracts and pass in a configID and receive an identical agent every time.
