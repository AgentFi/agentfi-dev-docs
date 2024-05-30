<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/factory/ILoopooorAgentFactory.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A factory for loopooor strategy agents.

Users can use [`createAgent()`](#createagent) to create a new agent. The agent will be created based on settings stored in the factory by the contract owner. These settings can be viewed via [`getAgentCreationSettings()`](#getagentcreationsettings).


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



### createLoopooorAgentForRoot
```solidity
  function createLoopooorAgentForRoot(
    struct ILoopooorAgentFactory.MintParams mintParams,
    struct ILoopooorAgentFactory.TokenDeposit deposit,
    address rootAgentAddress
  ) external returns (uint256 strategyAgentID, address strategyAddress)
```
Creates a new Loopooor strategy agent.
The new agent will be minted to an existing root agent.
Can only be called by the owner of the root agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct ILoopooorAgentFactory.MintParams | Parameters to use to mint the position. |
| `deposit` | struct ILoopooorAgentFactory.TokenDeposit | The token and amount to deposit. |
| `rootAgentAddress` | address | The address of the root agent to transfer the v3 agent to. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `strategyAgentID` | uint256 | The ID of the newly created strategy agent. |
| `strategyAddress` | address | The address of the newly created strategy agent. |

### createLoopooorAgentAndExplorer
```solidity
  function createLoopooorAgentAndExplorer(
    struct ILoopooorAgentFactory.MintParams mintParams,
    struct ILoopooorAgentFactory.TokenDeposit deposit
  ) external returns (uint256 strategyAgentID, address strategyAddress, uint256 explorerAgentID, address explorerAddress)
```
Creates a new Loopooor strategy agent.
The new agent will be minted to a new explorer agent.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintParams` | struct ILoopooorAgentFactory.MintParams | Parameters to use to mint the position. |
| `deposit` | struct ILoopooorAgentFactory.TokenDeposit | The token and amount to deposit. |

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


