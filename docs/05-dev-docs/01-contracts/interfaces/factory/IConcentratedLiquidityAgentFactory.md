<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IConcentratedLiquidityAgentFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for v3 strategy agents.

Users can use [`createAgent()`](#createagent) to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


## Functions
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



### createConcentratedLiquidityAgentForRoot
```solidity
  function createConcentratedLiquidityAgentForRoot(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit0,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit1,
    address rootAgentAddress
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `deposit0` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The first token and amount to deposit. |
| `deposit1` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The second token and amount to deposit. |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createConcentratedLiquidityAgentAndExplorer
```solidity
  function createConcentratedLiquidityAgentAndExplorer(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit0,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit1
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to a new explorer agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `deposit0` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The first token and amount to deposit. |
| `deposit1` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The second token and amount to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |
| `explorerAgentID` | uint256 | The ID of the newly created explorer agent. |
| `explorerAddress` | address | The address of the newly created explorer agent. |

### createConcentratedLiquidityAgentForRootAndRefundExcess
```solidity
  function createConcentratedLiquidityAgentForRootAndRefundExcess(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit0,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit1,
    address rootAgentAddress
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `deposit0` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The first token and amount to deposit. |
| `deposit1` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The second token and amount to deposit. |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createConcentratedLiquidityAgentAndExplorerAndRefundExcess
```solidity
  function createConcentratedLiquidityAgentAndExplorerAndRefundExcess(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit0,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit deposit1
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to a new explorer agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `deposit0` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The first token and amount to deposit. |
| `deposit1` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The second token and amount to deposit. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |
| `explorerAgentID` | uint256 | The ID of the newly created explorer agent. |
| `explorerAddress` | address | The address of the newly created explorer agent. |

### createConcentratedLiquidityAgentForRootAndMigrate
```solidity
  function createConcentratedLiquidityAgentForRootAndMigrate(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit depositLpToken,
    address rootAgentAddress
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `depositLpToken` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The lp token and amount to migrate. |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createConcentratedLiquidityAgentAndExplorerAndMigrate
```solidity
  function createConcentratedLiquidityAgentAndExplorerAndMigrate(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit depositLpToken
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to a new explorer agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `depositLpToken` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The lp token and amount to migrate. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |
| `explorerAgentID` | uint256 | The ID of the newly created explorer agent. |
| `explorerAddress` | address | The address of the newly created explorer agent. |

### createConcentratedLiquidityAgentForRootAndMigrateWithPermit
```solidity
  function createConcentratedLiquidityAgentForRootAndMigrateWithPermit(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit depositLpToken,
    address rootAgentAddress
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `depositLpToken` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The lp token and amount to migrate. |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createConcentratedLiquidityAgentAndExplorerAndMigrateWithPermit
```solidity
  function createConcentratedLiquidityAgentAndExplorerAndMigrateWithPermit(
    struct IConcentratedLiquidityAgentFactory.MintBalanceParams mintParams,
    struct IConcentratedLiquidityAgentFactory.TokenDeposit depositLpToken
  ) external returns (uint256 nonfungiblePositionTokenId, uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new V3 strategy agent.
The new agent will be minted to a new explorer agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct IConcentratedLiquidityAgentFactory.MintBalanceParams | Parameters to use to mint the position. |
| `depositLpToken` | struct IConcentratedLiquidityAgentFactory.TokenDeposit | The lp token and amount to migrate. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `nonfungiblePositionTokenId` | uint256 | The ID of the concentrated liquidity position. |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |
| `explorerAgentID` | uint256 | The ID of the newly created explorer agent. |
| `explorerAddress` | address | The address of the newly created explorer agent. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings() external
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.




## Events
### AgentCreationSettingsPosted
```solidity
  event AgentCreationSettingsPosted()
```
Emitted when a new AgentCreationSettings is posted.


