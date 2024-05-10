<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IOwnable2Step.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An abstract contract that provides a basic access control system through ERC173.


## Functions
### owner
```solidity
  function owner() external returns (address owner_)
```
Returns the address of the current owner.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `owner_` | address | The current owner. |

### pendingOwner
```solidity
  function pendingOwner() external returns (address pendingOwner_)
```
Returns the address of the pending owner.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `pendingOwner_` | address | The pending owner. |

### renounceOwnership
```solidity
  function renounceOwnership() external
```
Leaves the contract without owner. It will not be possible to call
`onlyOwner` functions. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby disabling any functionality that is only available to the owner.



### transferOwnership
```solidity
  function transferOwnership(
    address newOwner
  ) external
```
Starts the ownership transfer of the contract to a new account. Replaces the pending transfer if there is one.
Can only be called by the current owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `newOwner` | address | The address of the new owner. |

### acceptOwnership
```solidity
  function acceptOwnership() external
```
Completes the ownership transfer of the contract to the new account.
Can only be called by the pending owner.



### sweep
```solidity
  function sweep(
    address receiver,
    address[] tokens
  ) external
```
Rescues tokens that may have been accidentally transferred in.
Can only be called by the contract owner.

If the inheriting contract requires tokens in the contract, overwrite this with a revert.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `receiver` | address | The receiver of the rescued tokens. |
| `tokens` | address[] | The tokens to rescue. Can be ETH or ERC20s. |


## Events
### OwnershipTransferStarted
```solidity
  event OwnershipTransferStarted()
```
Emitted when the contract ownership process is started.


### OwnershipTransferred
```solidity
  event OwnershipTransferred()
```
Emitted when the contract ownership process is completed.


