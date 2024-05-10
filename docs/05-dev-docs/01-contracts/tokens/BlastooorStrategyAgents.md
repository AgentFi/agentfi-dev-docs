<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/tokens/BlastooorStrategyAgents.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The Blastooor Strategy ERC721 token contract. Creates new agents and manages ownership of agents in the AgentFi protocol.

Each agent is represented as an NFT. The owner of the NFT is the owner of the agent. Transferring the NFT means transferring the agent and its contents.

Each agent is also a smart contract account. The account is created at the same time the agent is created. Ownership of the account is delegated to the owner of the NFT using ERC6551 Token Bound Accounts.

Agents can be created via [`createAgent()`](#createagent). Only whitelisted accounts may create agents - these may be any address, but are designed to be smart contracts called factories. This ERC721 contract manages the creation and registration of agents. The factory contract handles any additional logic - verifying implementation, initializing the agent, etc. A user that wants to create an agent should call a factory contract, which in turn calls this contract.

The list of factories can be queried via [`factoryIsWhitelisted()`](#factoryiswhitelisted) and maintained by the contract owner via [`setWhitelist()`](#setwhitelist).

Agents are ERC721s with the enumerable, metadata, and exists extensions. Info about the associated TBAs is stored in another contract.


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
Constructs the BlastooorStrategyAgents nft contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The owner of the contract. |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### exists
```solidity
  function exists(
    uint256 agentID
  ) external returns (bool status)
```
Returns true if the agent exists.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the agent exists, false otherwise. |

### createAgent
```solidity
  function createAgent() external returns (uint256 agentID)
```
Creates a new agent.

The new agent will be minted to `msg.sender`. This function is designed to be called from another contract to perform additional setup.


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |

### factoryIsWhitelisted
```solidity
  function factoryIsWhitelisted(
    address factory
  ) external returns (bool isWhitelisted)
```
Returns true if the factory has been whitelisted.
All addresses are whitelisted if address zero is whitelisted.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `factory` | address | The address of the factory to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isWhitelisted` | bool | True if the factory has been whitelisted, false otherwise. |

### setWhitelist
```solidity
  function setWhitelist(
    struct IBlastooorStrategyAgents.SetWhitelistParam[] params
  ) external
```
Adds or removes factories to the whitelist.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IBlastooorStrategyAgents.SetWhitelistParam[] | The list of factories and if they should be whitelisted or blacklisted. |

### tokenURI
```solidity
  function tokenURI(
    uint256 agentID
  ) public returns (string uri)
```
Returns the Uniform Resource Identifier (URI) for `agentID` token.
Reverts if the token does not exist.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the pool to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uri` | string | The token uri. |

### baseURI
```solidity
  function baseURI() external returns (string uri)
```
Returns the base URI for computing tokenURI.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uri` | string | The base URI. |

### setBaseURI
```solidity
  function setBaseURI(
    string uri
  ) external
```
Sets the base URI for computing tokenURI.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uri` | string | The new base URI. |

### contractURI
```solidity
  function contractURI() external returns (string uri)
```
Returns the contract URI.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uri` | string | The contract URI. |

### setContractURI
```solidity
  function setContractURI(
    string uri
  ) external
```
Sets the contract URI.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `uri` | string | The new contract URI. |

### _exists
```solidity
  function _exists(
    uint256 agentID
  ) internal returns (bool status)
```
Returns true if the agent exists.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | bool | True if the agent exists, false otherwise. |

### _requireMinted
```solidity
  function _requireMinted(
    uint256 agentID
  ) internal
```
Reverts if the `agentID` has not been minted yet.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to query. |


