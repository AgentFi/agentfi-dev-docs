<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/factory/AgentFactory01.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for agents.

Users can use [`createAgent()`](#createagent) to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


## Functions
### constructor
```solidity
  function constructor(
    address owner_,
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_,
    address agentNft
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
| `agentNft` | address | The Agents contract. |

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
  function getAgentCreationSettings() external returns (address agentNft, address agentImplementation, bytes[] initializationCalls, bool isPaused)
```
Gets the agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentNft` | address | The Agents contract. |
| `agentImplementation` | address | The agent implementation. |
| `initializationCalls` | bytes[] | The calls to initialize the agent. |
| `isPaused` | bool | True if these creation settings are paused, false otherwise. |

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
    struct IAgentFactory01.AgentCreationSettings creationSettings
  ) external returns (uint256 creationSettingsID)
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettings` | struct IAgentFactory01.AgentCreationSettings | The new creation settings to post. |

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

### _createAgent
```solidity
  function _createAgent(
    contract IAgents agentNft
  ) internal returns (uint256 agentID, address agentAddress)
```
Creates a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentNft` | contract IAgents | The agent nft contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |
| `agentAddress` | address | The address of the newly created agent. |

### _callAgent
```solidity
  function _callAgent(
    address agentAddress,
    bytes callData
  ) internal
```
Calls an agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentAddress` | address | The address of the agent. |
| `callData` | bytes | The data to pass to the agent. |

### _multicallAgent
```solidity
  function _multicallAgent(
    address agentAddress,
    bytes[] callDatas
  ) internal
```
Calls an agent multiple times.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentAddress` | address | The address of the agent. |
| `callDatas` | bytes[] | The data to pass to the agent. |

### _optionalSendToAgent
```solidity
  function _optionalSendToAgent(
    address agentAddress
  ) internal
```
Sends any contract balance to the agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentAddress` | address | The address of the agent. |


