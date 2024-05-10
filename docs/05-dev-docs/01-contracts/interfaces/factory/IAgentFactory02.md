<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IAgentFactory02.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for agents.

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
  function getAgentCreationSettings() external returns (address agentNft, address agentImplementation, bytes[] initializationCalls, bool isPaused, address[] giveTokenList, uint256[] giveTokenAmounts)
```
Gets the agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentNft` | address | The Agents contract. |
| `agentImplementation` | address | The agent implementation. |
| `initializationCalls` | bytes[] | The calls to initialize the agent. |
| `isPaused` | bool | True if these creation settings are paused, false otherwise. |
| `giveTokenList` | address[] | The list of tokens to give to newly created agents. |
| `giveTokenAmounts` | uint256[] | The amount of each token to give. |

### createAgent
```solidity
  function createAgent() external returns (uint256 agentID, address agentAddress)
```
Creates a new agent.
The new agent will be transferred to `msg.sender`.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |
| `agentAddress` | address | The address of the newly created agent. |

### createAgent
```solidity
  function createAgent(
    uint256 callDatas
  ) external returns (uint256 agentID, address agentAddress)
```
Creates a new agent.
The new agent will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `callDatas` | uint256 | Extra data to pass to the agent after it is created. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |
| `agentAddress` | address | The address of the newly created agent. |

### createAgent
```solidity
  function createAgent(
    uint256 receiver
  ) external returns (uint256 agentID, address agentAddress)
```
Creates a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `receiver` | uint256 | The address to mint the new agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |
| `agentAddress` | address | The address of the newly created agent. |

### createAgent
```solidity
  function createAgent(
    uint256 receiver,
    bytes[] callDatas
  ) external returns (uint256 agentID, address agentAddress)
```
Creates a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `receiver` | uint256 | The address to mint the new agent to. |
| `callDatas` | bytes[] | Extra data to pass to the agent after it is created. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |
| `agentAddress` | address | The address of the newly created agent. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings(
    struct IAgentFactory02.AgentCreationSettings creationSettings
  ) external returns (uint256 creationSettingsID)
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettings` | struct IAgentFactory02.AgentCreationSettings | The new creation settings to post. |

### setPaused
```solidity
  function setPaused(
    uint256 status
  ) external
```
Sets the pause state of the contract.
Allows or disallows creation of new agents.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `status` | uint256 | True to pause, false to unpause. |


## Events
### AgentCreationSettingsPosted
```solidity
  event AgentCreationSettingsPosted()
```
Emitted when a new AgentCreationSettings is posted.


### AgentCreationSettingsPaused
```solidity
  event AgentCreationSettingsPaused()
```
Emitted when a new AgentCreationSettings is paused or unpaused.


