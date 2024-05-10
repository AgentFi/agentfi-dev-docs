<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IBlastooorAccountFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for Agent accounts.


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
  function getAgentCreationSettings() external returns (address agentNft, address agentImplementation, bytes[] initializationCalls, bool isActive)
```
Gets the agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentNft` | address | The agents contract. |
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

### maxCreationsPerAgent
```solidity
  function maxCreationsPerAgent() external returns (uint256 count)
```
Gets the maximum number of strategy agents that can be created per genesis agent.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `count` | uint256 | The count. |

### createAccount
```solidity
  function createAccount(
    uint256 agentID,
    uint256 creationSettingsID
  ) external returns (address account)
```
Creates a new account for an agent.
Can only be called by the owner of the agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to create an account for. |
| `creationSettingsID` | uint256 | The creation settings to use. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `account` | address | The address of the newly created account. |

### createAccount
```solidity
  function createAccount(
    uint256 agentID,
    uint256 creationSettingsID,
    bytes[] callDatas
  ) external returns (address account)
```
Creates a new account for an agent.
Can only be called by the owner of the agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to create an account for. |
| `creationSettingsID` | uint256 | The creation settings to use. |
| `callDatas` | bytes[] | Extra data to pass to the agent after it is created. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `account` | address | The address of the newly created account. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings(
    struct IBlastooorAccountFactory.AgentCreationSettings creationSettings
  ) external returns (uint256 creationSettingsID)
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettings` | struct IBlastooorAccountFactory.AgentCreationSettings | The new creation settings to post. |

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

### setMaxCreationsPerAgent
```solidity
  function setMaxCreationsPerAgent(
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


### SetMaxCreationsPerAgent
```solidity
  event SetMaxCreationsPerAgent()
```
Emitted when the maxCreationsPerAgent is set.


