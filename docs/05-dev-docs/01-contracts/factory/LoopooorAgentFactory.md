<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/factory/LoopooorAgentFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for loopooor strategy agents.

Agent operators can use one of the create methods to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


## Functions
### constructor
```solidity
  function constructor(
    address owner_,
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_,
    address multicallForwarder_,
    address genesisAgentNft_,
    address strategyAgentNft_,
    address explorerAgentNft_,
    address erc6551Registry_,
    address agentRegistry_,
    address weth_
  ) public
```
Constructs the factory contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The owner of the contract. |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |
| `multicallForwarder_` | address | The MulticallForwarder address. |
| `genesisAgentNft_` | address | The genesis agents contract. |
| `strategyAgentNft_` | address | The strategy agents contract. |
| `explorerAgentNft_` | address | The explorer agents contract. |
| `erc6551Registry_` | address | The erc6551 registry contract. |
| `agentRegistry_` | address | The agent registry contract. |
| `weth_` | address | The address of wrapped ether. |

### getStaticAddresses
```solidity
  function getStaticAddresses() external returns (address erc6551Registry_, address agentRegistry_, address genesisAgentNft_, address strategyAgentNft_, address explorerAgentNft_, address weth_)
```
Gets the addresses that have been statically set.



### getAgentCreationSettings
```solidity
  function getAgentCreationSettings() external returns (address strategyAccountImpl_, address explorerAccountImpl_, bytes strategyInitializationCall_, bytes explorerInitializationCall_, bool isActive_)
```
Gets the agent creation settings.



### createLoopooorAgentForRoot
```solidity
  function createLoopooorAgentForRoot(
    struct ILoopooorAgentFactory.MintParams mintParams,
    struct ILoopooorAgentFactory.TokenDeposit deposit,
    address rootAgentAddress
  ) external returns (uint256 strategyAgentID, address strategyAddress)
```
Creates a new Loopooor strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct ILoopooorAgentFactory.MintParams | Parameters to use to mint the position. |
| `deposit` | struct ILoopooorAgentFactory.TokenDeposit | The token and amount to deposit. |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createLoopooorAgentAndExplorer
```solidity
  function createLoopooorAgentAndExplorer(
    struct ILoopooorAgentFactory.MintParams mintParams,
    struct ILoopooorAgentFactory.TokenDeposit deposit
  ) external returns (uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new Loopooor strategy agent.
The new agent will be minted to a new explorer agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct ILoopooorAgentFactory.MintParams | Parameters to use to mint the position. |
| `deposit` | struct ILoopooorAgentFactory.TokenDeposit | The token and amount to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |
| `explorerAgentID` | uint256 | The ID of the newly created explorer agent. |
| `explorerAddress` | address | The address of the newly created explorer agent. |

### _createLoopooorAgent
```solidity
  function _createLoopooorAgent(
    struct ILoopooorAgentFactory.MintParams mintParams,
    struct ILoopooorAgentFactory.TokenDeposit deposit
  ) internal returns (uint256 strategyAgentID, address strategyAddress)
```
Creates a new Loopooor agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct ILoopooorAgentFactory.MintParams | Parameters to use to mint the position. |
| `deposit` | struct ILoopooorAgentFactory.TokenDeposit | The token and amount to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### _createStrategyAgent
```solidity
  function _createStrategyAgent() internal returns (uint256 strategyAgentID, address strategyAddress)
```
Creates a new strategy agent.
Includes the agent NFT and TBA.
Initializes the strategy but doesn't initialize the position.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the new agent. |
| `strategyAddress` | address | The address of the new agent. |

### _createExplorerAgent
```solidity
  function _createExplorerAgent() internal returns (uint256 explorerAgentID, address explorerAddress)
```
Creates a new explorer agent.
Includes the agent NFT and TBA.
Initializes the explorer but doesn't initialize the position.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `explorerAgentID` | uint256 | The ID of the new agent. |
| `explorerAddress` | address | The address of the new agent. |

### _createAgentForRootPrecheck
```solidity
  function _createAgentForRootPrecheck(
    address rootAgentAddress
  ) internal
```
A precheck for creating new agents to an exist root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `rootAgentAddress` | address | The address of the root agent to mint to. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings() external
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.




