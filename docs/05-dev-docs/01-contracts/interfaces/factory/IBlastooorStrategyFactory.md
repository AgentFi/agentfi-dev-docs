<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IBlastooorStrategyFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for strategy agents.

Users can use [`createAgent()`](#createagent) to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


## Functions
### getAgentCreationSettingsCount
```solidity
  function getAgentCreationSettingsCount() external returns (uint256 count)
```
Gets the number of agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The count. |

### getAgentCreationSettings
```solidity
  function getAgentCreationSettings() external returns (address genesisAgentNft, address strategyAgentNft, address agentImplementation, bytes[] initializationCalls, bool isActive)
```
Gets the agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `genesisAgentNft` | address | The genesis agents contract. |
| `strategyAgentNft` | address | The strategy agents contract. |
| `agentImplementation` | address | The agent implementation. |
| `initializationCalls` | bytes[] | The calls to initialize the agent. |
| `isActive` | bool | True if these creation settings are active, false otherwise. |

### getCreateCount
```solidity
  function getCreateCount() external returns (uint256 count)
```
Gets the number of agents created by the user.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The count. |

### maxCreationsPerGenesisAgent
```solidity
  function maxCreationsPerGenesisAgent() external returns (uint256 count)
```
Gets the maximum number of strategy agents that can be created per genesis agent.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The count. |

### createAgent
```solidity
  function createAgent(
    uint256 creationSettingsID
  ) external returns (struct IBlastooorStrategyFactory.AgentInfo info)
```
Creates a new agent.
The new agent will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettingsID` | uint256 | The ID of the creation settings to use. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorStrategyFactory.AgentInfo | Information about the newly created agent. |

### createAgent
```solidity
  function createAgent(
    uint256 creationSettingsID,
    bytes[] callDatas
  ) external returns (struct IBlastooorStrategyFactory.AgentInfo info)
```
Creates a new agent.
The new agent will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettingsID` | uint256 | The ID of the creation settings to use. |
| `callDatas` | bytes[] | Extra data to pass to the agent after it is created. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorStrategyFactory.AgentInfo | Information about the newly created agent. |

### createAgent
```solidity
  function createAgent(
    uint256 creationSettingsID,
    struct IBlastooorStrategyFactory.TokenDeposit[] deposits
  ) external returns (struct IBlastooorStrategyFactory.AgentInfo info)
```
Creates a new agent.
The new agent will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettingsID` | uint256 | The ID of the creation settings to use. |
| `deposits` | struct IBlastooorStrategyFactory.TokenDeposit[] | Tokens to transfer from `msg.sender` to the new agent. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorStrategyFactory.AgentInfo | Information about the newly created agent. |

### createAgent
```solidity
  function createAgent(
    uint256 creationSettingsID,
    bytes[] callDatas,
    struct IBlastooorStrategyFactory.TokenDeposit[] deposits
  ) external returns (struct IBlastooorStrategyFactory.AgentInfo info)
```
Creates a new agent.
The new agent will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettingsID` | uint256 | The ID of the creation settings to use. |
| `callDatas` | bytes[] | Extra data to pass to the agent after it is created. |
| `deposits` | struct IBlastooorStrategyFactory.TokenDeposit[] | Tokens to transfer from `msg.sender` to the new agent. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorStrategyFactory.AgentInfo | Information about the newly created agent. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings(
    struct IBlastooorStrategyFactory.AgentCreationSettings creationSettings
  ) external returns (uint256 creationSettingsID)
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettings` | struct IBlastooorStrategyFactory.AgentCreationSettings | The new creation settings to post. |

### setActiveStatus
```solidity
  function setActiveStatus(
    uint256 status
  ) external
```
Sets the active state of a creationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `status` | uint256 | True to activate, false to deactivate. |

### setMaxCreationsPerGenesisAgent
```solidity
  function setMaxCreationsPerGenesisAgent(
    uint256 count
  ) external
```
Sets the maximum number of strategy agents that can be created per genesis agent.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `count` | uint256 | The count to set. |


## Events
### AgentCreationSettingsPosted
```solidity
  event AgentCreationSettingsPosted()
```
Emitted when a new AgentCreationSettings is posted.


### AgentCreationSettingsActivated
```solidity
  event AgentCreationSettingsActivated()
```
Emitted when a new AgentCreationSettings is activated or deactivated.


### SetMaxCreationsPerGenesisAgent
```solidity
  event SetMaxCreationsPerGenesisAgent()
```
Emitted when the maxCreationsPerGenesisAgent is set.


