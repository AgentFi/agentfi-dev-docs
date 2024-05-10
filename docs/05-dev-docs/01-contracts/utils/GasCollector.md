<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/GasCollector.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

The GasCollector collects the gas rewards in bulk from a list of contracts.


## Functions
### constructor
```solidity
  function constructor(
    address owner_,
    address blast_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the GasCollector contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `owner_` | address | The contract owner. |
| `blast_` | address | The address of the blast gas reward contract. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### getContractList
```solidity
  function getContractList() external returns (address[] contractList_, address gasReceiver_)
```
Gets the list of contracts to collect blast gas rewards from.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `contractList_` | address[] | The list of contract addresses. |
| `gasReceiver_` | address | The receiver of gas rewards. |

### claimGas
```solidity
  function claimGas() external returns (uint256 amountClaimed)
```
Claims max gas from a list of contracts.
Can be called by anyone.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountClaimed` | uint256 | The amount claimed. |

### callBlastMulti
```solidity
  function callBlastMulti(
    bytes[] calldatas
  ) external returns (bytes[] results)
```
Calls the Blast contract multiple times with arbitrary data.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `calldatas` | bytes[] | The list of datas to pass to the Blast contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `results` | bytes[] | The results of each calls. |

### setClaimContractList
```solidity
  function setClaimContractList(
    address[] contractList_,
    address receiver_
  ) external
```
Sets the contract list and receiver.
Can only be called by the contract owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `contractList_` | address[] | The list of contracts. |
| `receiver_` | address | The receiver. |


