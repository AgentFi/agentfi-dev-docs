<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/factory/BlastooorAccountFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for Agent accounts.


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
    address agentNft_,
    address agentRegistry_,
    address erc6551Registry_
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
| `agentNft_` | address | The Agents contract. |
| `agentRegistry_` | address | The AgentRegistry contract. |
| `erc6551Registry_` | address | The ERC6551Registry contract. |

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
Gets the number of accounts created for the agent.



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

### _createAccount
```solidity
  function _createAccount(
    uint256 agentID,
    uint256 creationSettingsID
  ) internal returns (address account)
```
Creates a new account for an agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to create an account for. |
| `creationSettingsID` | uint256 | The creation settings to use. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `account` | address | The address of the newly created account. |

