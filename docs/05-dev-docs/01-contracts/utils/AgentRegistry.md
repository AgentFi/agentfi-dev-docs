<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/AgentRegistry.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Tracks Agents, NFTs, and TBAs in the AgentFi ecosystem.

Does NOT replace the ERC6551Registry, merely an enumeration on top of it.


## Functions
### constructor
```solidity
  function constructor(
    address owner_,
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the AgentRegistry contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The owner of the contract. |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### isOperator
```solidity
  function isOperator(
    address account
  ) external returns (bool isAuthorized)
```
Returns true if the account is an operator.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The account to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isAuthorized` | bool | True if is an operator, false otherwise. |

### getTbasOfNft
```solidity
  function getTbasOfNft(
    address collection,
    uint256 agentID
  ) external returns (struct IAgentRegistry.AgentInfo[] tbas)
```
Returns the list of known agent TBAs for an agent NFT.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `collection` | address | The address of the collection to query. |
| `agentID` | uint256 | The ID of the agent to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `tbas` | struct IAgentRegistry.AgentInfo[] | The list of registered TBAs for this agent. |

### getNftOfTba
```solidity
  function getNftOfTba(
    address tba
  ) external returns (address collection, uint256 agentID)
```
Returns the NFT associated with an agent TBA.
Returns zeros if not registered.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tba` | address | The address of the TBA to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `collection` | address | The address of the NFT collection. |
| `agentID` | uint256 | The ID of the agent. |

### isTbaRegisteredAgent
```solidity
  function isTbaRegisteredAgent(
    address tba
  ) external returns (bool isRegistered)
```
Returns true if the TBA is known.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tba` | address | The address of the TBA to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isRegistered` | bool | True if the agent is registerd, false otherwise. |

### registerAgent
```solidity
  function registerAgent(
    struct IAgentRegistry.RegisterAgentParam params
  ) external
```
Registers a new agent.
Can only be called by an operator.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.RegisterAgentParam | The agent to register. |

### tryRegisterAgent
```solidity
  function tryRegisterAgent(
    struct IAgentRegistry.RegisterAgentParam params
  ) external
```
Registers a new agent. Fails gracefully if the agent has already been registered.
Can only be called by an operator.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.RegisterAgentParam | The agent to register. |

### registerAgents
```solidity
  function registerAgents(
    struct IAgentRegistry.RegisterAgentParam[] params
  ) external
```
Registers a list of new agents.
Can only be called by an operator.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.RegisterAgentParam[] | The agents to register. |

### tryRegisterAgents
```solidity
  function tryRegisterAgents(
    struct IAgentRegistry.RegisterAgentParam[] params
  ) external
```
Registers a list of new agents. Fails gracefully if the agent has already been registered.
Can only be called by an operator.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.RegisterAgentParam[] | The agents to register. |

### setOperators
```solidity
  function setOperators(
    struct IAgentRegistry.SetOperatorParam[] params
  ) external
```
Sets the status of a list of operators.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.SetOperatorParam[] | The list to set. |

### _validateSenderIsOperator
```solidity
  function _validateSenderIsOperator() internal
```
Reverts if `msg.sender` is not an operator.



### _registerAgent
```solidity
  function _registerAgent(
    struct IAgentRegistry.RegisterAgentParam params
  ) internal
```
Registers a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.RegisterAgentParam | The agent to register. |

### _tryRegisterAgent
```solidity
  function _tryRegisterAgent(
    struct IAgentRegistry.RegisterAgentParam params
  ) internal
```
Registers a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IAgentRegistry.RegisterAgentParam | The agent to register. |


