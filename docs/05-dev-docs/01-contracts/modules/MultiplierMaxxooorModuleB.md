<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/MultiplierMaxxooorModuleB.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A module used in the Multiplier Maxxooor Strategy.


## Functions
### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the MultiplierMaxxooorModuleB contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### moduleName
```solidity
  function moduleName() external returns (string name_)
```




### strategyType
```solidity
  function strategyType() external returns (string type_)
```





