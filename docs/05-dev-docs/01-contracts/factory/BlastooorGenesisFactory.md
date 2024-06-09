<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/factory/BlastooorGenesisFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for agents.

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

### getAgentCreationSettings
```solidity
  function getAgentCreationSettings() external returns (address agentNft, address agentImplementation, bytes[] initializationCalls, bool isActive, uint256 paymentAmount, address paymentReceiver, uint256 timestampAllowlistMintStart, uint256 timestampAllowlistMintEnd, uint256 timestampPublicMintStart)
```
Gets the agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentNft` | address | The Agents contract. |
| `agentImplementation` | address | The agent implementation. |
| `initializationCalls` | bytes[] | The calls to initialize the agent. |
| `isActive` | bool | True if these creation settings are active, false otherwise. |
| `paymentAmount` | uint256 | The amount of the token to pay. |
| `paymentReceiver` | address | The receiver of the payment. |

### allowlistMintedTotal
```solidity
  function allowlistMintedTotal() external returns (uint256 amount)
```




### allowlistMintedByAccount
```solidity
  function allowlistMintedByAccount() external returns (uint256 amount)
```




### isAuthorizedSigner
```solidity
  function isAuthorizedSigner() external returns (bool isAuthorized)
```




### isAuthorizedTreasuryMinter
```solidity
  function isAuthorizedTreasuryMinter() external returns (bool isAuthorized)
```




### blastooorPublicMint
```solidity
  function blastooorPublicMint(
    uint256 count
  ) external returns (struct IBlastooorGenesisFactory.AgentInfo[] info)
```
Creates new agents.
The new agents will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `count` | uint256 | The number of agents to create. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorGenesisFactory.AgentInfo[] | Information about the newly created agents. |

### blastooorMintWithAllowlist
```solidity
  function blastooorMintWithAllowlist(
    uint256 count,
    bytes signature
  ) external returns (struct IBlastooorGenesisFactory.AgentInfo[] info)
```
Creates new agents.
The new agents will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `count` | uint256 | The number of agents to create. |
| `signature` | bytes | Signature from the signer. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorGenesisFactory.AgentInfo[] | Information about the newly created agents. |

### blastooorMintWithAllowlistAndPublic
```solidity
  function blastooorMintWithAllowlistAndPublic(
    uint256 countAllowlist,
    uint256 countPublic,
    bytes signature
  ) external returns (struct IBlastooorGenesisFactory.AgentInfo[] info)
```
Creates new agents.
The new agents will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `countAllowlist` | uint256 | The number of agents to create via the allowlist. |
| `countPublic` | uint256 | The number of agents to create via public mint. |
| `signature` | bytes | Signature from the signer. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorGenesisFactory.AgentInfo[] | Information about the newly created agents. |

### blastooorMintForTreasury
```solidity
  function blastooorMintForTreasury(
    uint256 count
  ) external returns (struct IBlastooorGenesisFactory.AgentInfo[] info)
```
Creates new agents.
The new agents will be transferred to `msg.sender`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `count` | uint256 | The number of agents to create. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorGenesisFactory.AgentInfo[] | Information about the newly created agents. |

### _createBlastooorChecks
```solidity
  function _createBlastooorChecks(
    contract IAgents agentNft,
    uint256 count
  ) internal
```
A set of checks before minting.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentNft` | contract IAgents | The agent nft contract. |
| `count` | uint256 | The number of agents to create. |

### _createBlastooorCheckAllowlist
```solidity
  function _createBlastooorCheckAllowlist(
    contract IAgents agentNft,
    uint256 count,
    bytes signature
  ) internal
```
A set of checks before minting from the allowlist.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentNft` | contract IAgents | The agent nft contract. |
| `count` | uint256 | The number of agents to create. |
| `signature` | bytes | Signature from the signer. |

### _createBlastooorChecksForTreasury
```solidity
  function _createBlastooorChecksForTreasury(
    contract IAgents agentNft,
    uint256 count
  ) internal
```
A set of checks before minting.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentNft` | contract IAgents | The agent nft contract. |
| `count` | uint256 | The number of agents to create. |

### _handlePayment
```solidity
  function _handlePayment(
    uint256 count
  ) internal
```
Handles payment to creates a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `count` | uint256 | The number of agents to create. |

### _createBlastooors
```solidity
  function _createBlastooors(
    contract IAgents agentNft,
    uint256 countAllowlist,
    uint256 countPublic
  ) internal returns (struct IBlastooorGenesisFactory.AgentInfo[] info)
```
Creates a new agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `agentNft` | contract IAgents | The agent nft contract. |
| `countAllowlist` | uint256 | The number of agents to create via the allowlist. |
| `countPublic` | uint256 | The number of agents to create via the public mint. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `info` | struct IBlastooorGenesisFactory.AgentInfo[] | Information about the newly created agents. |

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

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings(
    struct IBlastooorGenesisFactory.AgentCreationSettings creationSettings
  ) external returns (uint256 creationSettingsID)
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettings` | struct IBlastooorGenesisFactory.AgentCreationSettings | The new creation settings to post. |

### addSigner
```solidity
  function addSigner(
    address signer
  ) external
```
Adds a new signer that approve allowlist mints.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer to add. |

### removeSigner
```solidity
  function removeSigner(
    address signer
  ) external
```
Removes a signer.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `signer` | address | The signer to remove. |

### addTreasuryMinter
```solidity
  function addTreasuryMinter(
    address treasuryMinter
  ) external
```
Adds a new treasuryMinter that can mint from the treasury allocation.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `treasuryMinter` | address | The TreasuryMinter to add. |

### removeTreasuryMinter
```solidity
  function removeTreasuryMinter(
    address treasuryMinter
  ) external
```
Removes a treasuryMinter.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `treasuryMinter` | address | The treasuryMinter to remove. |


