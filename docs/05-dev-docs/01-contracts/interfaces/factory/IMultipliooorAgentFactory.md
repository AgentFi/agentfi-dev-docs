<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/IMultipliooorAgentFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for multipliooor strategy agents.

Agent operators can use one of the create methods to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


## Functions
### getStaticAddresses
```solidity
  function getStaticAddresses() external returns (address erc6551Registry_, address agentRegistry_, address genesisAgentNft_, address strategyAgentNft_, address explorerAgentNft_, address weth_)
```
Gets the addresses that have been statically set.



### getAgentCreationSettings
```solidity
  function getAgentCreationSettings() external returns (address strategyAccountImpl_, address explorerAccountImpl_, bytes strategyInitializationCall_, bytes explorerInitializationCall_, bool isActive_)
```
Gets the agent creation settings.



### createMultipliooorAgentForRoot
```solidity
  function createMultipliooorAgentForRoot(
    address rootAgentAddress
  ) external returns (uint256 strategyAgentID, address strategyAddress)
```
Creates a new Multipliooor strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createMultipliooorAgentAndExplorer
```solidity
  function createMultipliooorAgentAndExplorer() external returns (uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new Multipliooor strategy agent.
The new agent will be minted to a new explorer agent.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |
| `explorerAgentID` | uint256 | The ID of the newly created explorer agent. |
| `explorerAddress` | address | The address of the newly created explorer agent. |

### postAgentCreationSettings
```solidity
  function postAgentCreationSettings() external
```
Posts a new AgentCreationSettings.
Can only be called by the contract owner.




## Events
### AgentCreationSettingsPosted
```solidity
  event AgentCreationSettingsPosted()
```
Emitted when a new AgentCreationSettings is posted.


