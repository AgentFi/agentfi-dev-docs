<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IBlastooorGenesisFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for agents.

Users can use [`createAgent()`](#createagent) to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


## Functions
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

## Events
### AgentCreationSettingsPosted
```solidity
  event AgentCreationSettingsPosted()
```
Emitted when a AgentCreationSettings is posted.


### AgentCreated
```solidity
  event AgentCreated()
```
Emitted when a new Agent is created.


### SignerAdded
```solidity
  event SignerAdded()
```
Emitted when an allowlist signer is added.


### SignerRemoved
```solidity
  event SignerRemoved()
```
Emitted when an allowlist signer is removed.


### TreasuryMinterAdded
```solidity
  event TreasuryMinterAdded()
```
Emitted when a treasury minter is added.


### TreasuryMinterRemoved
```solidity
  event TreasuryMinterRemoved()
```
Emitted when a treasury minter is removed.


