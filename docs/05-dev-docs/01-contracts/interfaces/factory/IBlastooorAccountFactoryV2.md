<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IBlastooorAccountFactoryV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for Agent accounts.

Creates new agents for an existing collection. Loops over the supply and if an nft doesn't have an account, creates one.


## Functions
### getAgentCreationSettings
```solidity
  function getAgentCreationSettings() external returns (address agentNft, address agentImplementation, bytes[] initializationCalls)
```
Gets the agent creation settings.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentNft` | address | The agents contract. |
| `agentImplementation` | address | The agent implementation. |
| `initializationCalls` | bytes[] | The calls to initialize the agent. |

### lastCheckedAgentID
```solidity
  function lastCheckedAgentID() external returns (uint256 agentID)
```
Gets the ID of the last checked agent.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `agentID` | uint256 | The ID of the agent. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings(
    struct IBlastooorAccountFactoryV2.AgentCreationSettings creationSettings
  ) external
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `creationSettings` | struct IBlastooorAccountFactoryV2.AgentCreationSettings | The new creation settings to post. |

### createAccounts
```solidity
  function createAccounts() external
```
Creates new accounts.
Can only be called by the contract owner.




## Events
### AgentCreationSettingsPosted
```solidity
  event AgentCreationSettingsPosted()
```
Emitted when a new AgentCreationSettings is posted.


