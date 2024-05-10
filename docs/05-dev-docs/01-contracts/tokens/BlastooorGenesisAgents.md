<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/tokens/BlastooorGenesisAgents.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The Blastooor Genesis ERC721 token contract. Creates new agents and manages ownership of agents in the AgentFi protocol.

Each agent is represented as an NFT. The owner of the NFT is the owner of the agent. Transferring the NFT means transferring the agent and its contents.

Each agent is also a smart contract account. The account is created at the same time the agent is created. Ownership of the account is delegated to the owner of the NFT using ERC6551 Token Bound Accounts.

Agents can be created via [`createAgent()`](#createagent). Only whitelisted accounts may create agents - these may be any address, but are designed to be smart contracts called factories. This ERC721 contract manages the creation and registration of agents. The factory contract handles any additional logic - verifying implementation, initializing the agent, etc. A user that wants to create an agent should call a factory contract, which in turn calls this contract.

The list of factories can be queried via [`factoryIsWhitelisted()`](#factoryiswhitelisted) and maintained by the contract owner via [`setWhitelist()`](#setwhitelist).

Agents are ERC721s with the enumerable, metadata, and exists extensions. Info about the associated TBAs is stored in this contract and can be queried via [`getAgentInfo()`](#getagentinfo).


## Functions
### constructor
```solidity
  function constructor(
    address owner_,
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_,
    address erc6551Registry_
  ) public
```
Constructs the BlastooorGenesisAgents nft contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The owner of the contract. |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |
| `erc6551Registry_` | address | The address of the ERC6551Registry. |

### getAgentInfo
```solidity
  function getAgentInfo(
    uint256 agentID
  ) external returns (address agentAddress, address implementationAddress)
```
Returns the address of an agent.
Reverts if the agent does not exist.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentAddress` | address | The address of the agent account. |
| `implementationAddress` | address | The address of the agent implementation. |

### getAgentID
```solidity
  function getAgentID(
    address agentAddress
  ) external returns (uint256 agentID)
```
Returns the ID of an agent given its address.
Returns ID 0 if the address is not an agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentAddress` | address | The address of the agent to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent. |

### isAddressAgent
```solidity
  function isAddressAgent(
    address agentAddress
  ) external returns (bool isAgent)
```
Given the address of the agent, returns if it is a known agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentAddress` | address | The address of the agent to query. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `isAgent` | bool | True if is a known agent, false otherwise. |

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

### getERC6551Registry
```solidity
  function getERC6551Registry() external returns (address registry_)
```
Returns the address of the ERC6551 registry.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `registry_` | address | The address of the registry. |

### createAgent
```solidity
  function createAgent(
    address implementation
  ) external returns (uint256 agentID, address agentAddress)
```
Creates a new agent.

The new agent will be minted to `msg.sender`. This function is designed to be called from another contract to perform additional setup.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `implementation` | address | The address of the implementation to use in the new agent. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the newly created agent. |
| `agentAddress` | address | The address of the newly created agent. |

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
    struct IBlastooorGenesisAgents.SetWhitelistParam[] params
  ) external
```
Adds or removes factories to the whitelist.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IBlastooorGenesisAgents.SetWhitelistParam[] | The list of factories and if they should be whitelisted or blacklisted. |

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


