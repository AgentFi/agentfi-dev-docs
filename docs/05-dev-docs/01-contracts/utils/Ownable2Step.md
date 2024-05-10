<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/Ownable2Step.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An abstract contract that provides a basic access control system through ERC173.

Based on OpenZeppelins's implementation.

Also includes [`sweep()`](#sweep) to allow the owner to rescue any tokens that may have been sent in.


## Functions
### owner
```solidity
  function owner() public returns (address owner_)
```
Returns the address of the current owner.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `owner_` | address | The current owner. |

### pendingOwner
```solidity
  function pendingOwner() public returns (address pendingOwner_)
```
Returns the address of the pending owner.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `pendingOwner_` | address | The pending owner. |

### renounceOwnership
```solidity
  function renounceOwnership() public
```
Leaves the contract without owner. It will not be possible to call
`onlyOwner` functions. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby disabling any functionality that is only available to the owner.



### transferOwnership
```solidity
  function transferOwnership(
    address newOwner
  ) public
```
Starts the ownership transfer of the contract to a new account. Replaces the pending transfer if there is one.
Can only be called by the current owner.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `newOwner` | address | The address of the new owner. |

### acceptOwnership
```solidity
  function acceptOwnership() public
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

### _checkOwner
```solidity
  function _checkOwner() internal
```
Throws if the sender is not the owner.



### _transferOwnership
```solidity
  function _transferOwnership() internal
```
Transfers ownership of the contract to a new account (`newOwner`) and deletes any pending owner.
Internal function without access restriction.




