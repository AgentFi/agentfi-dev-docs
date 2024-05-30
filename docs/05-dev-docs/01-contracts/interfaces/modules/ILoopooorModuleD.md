<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/modules/ILoopooorModuleD.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Interface for the LoopooorModuleD contract.


## Functions
### moduleName
```solidity
  function moduleName() external returns (string name_)
```
Returns the name of the module.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `name_` | string | The name of the module. |

### strategyType
```solidity
  function strategyType() external returns (string type_)
```
Returns the type of the strategy.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `type_` | string | The type of the strategy. |

### eth
```solidity
  function eth() external returns (address)
```
Returns the Ethereum address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | Ethereum address. |

### weth
```solidity
  function weth() external returns (address)
```
Returns the Wrapped Ethereum address.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | Wrapped Ethereum address. |

### mode
```solidity
  function mode() external returns (enum ILoopooorModuleD.MODE)
```
Returns the current mode of the contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | enum ILoopooorModuleD.MODE | current mode of the contract. |

### rateContract
```solidity
  function rateContract() external returns (address)
```
Returns the address of the rate contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | address of the rate contract. |

### underlying
```solidity
  function underlying() external returns (address)
```
Returns the address of the underlying asset.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | address of the underlying asset. |

### wrapMint
```solidity
  function wrapMint() external returns (address)
```
Returns the address of the WrapMint contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | address of the WrapMint contract. |

### oToken
```solidity
  function oToken() external returns (contract IOErc20Delegator)
```
Returns the oToken contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | contract IOErc20Delegator | oToken contract. |

### comptroller
```solidity
  function comptroller() external returns (contract IOrbitSpaceStationV4)
```
Returns the Orbit comptroller contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | contract IOrbitSpaceStationV4 | Orbit comptroller contract. |

### supplyBalance
```solidity
  function supplyBalance() external returns (uint256 supply_)
```
Returns the supply balance of the contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `supply_` | uint256 | The supply balance of the contract. |

### borrowBalance
```solidity
  function borrowBalance() external returns (uint256 borrow_)
```
Returns the borrow balance of the contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `borrow_` | uint256 | The borrow balance of the contract. |

### duoAsset
```solidity
  function duoAsset() external returns (contract IERC20)
```
Returns the address of the Duo asset.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | contract IERC20 | address of the Duo asset. |

### moduleD_mintFixedRate
```solidity
  function moduleD_mintFixedRate(
    address wrapMint,
    address exchange,
    address token,
    uint256 amountIn,
    uint256 amountOutMin,
    uint256 minLockedYield,
    bytes data
  ) external returns (address fixedRateContract_, uint256 amountOut, uint256 lockedYield)
```
Mints a fixed rate position using the WrapMint contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint` | address | The address of the wrap contract. |
| `exchange` | address | The address of the exchange contract. |
| `token` | address | The address of the token to be used. |
| `amountIn` | uint256 | The amount of tokens to be deposited. |
| `amountOutMin` | uint256 | The minimum amount of tokens to be received. |
| `minLockedYield` | uint256 | The minimum locked yield. |
| `data` | bytes | Additional data for the WrapMint contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `fixedRateContract_` | address | The address of the fixed rate contract. |
| `amountOut` | uint256 | The amount of tokens received. |
| `lockedYield` | uint256 | The locked yield. |

### moduleD_mintFixedRateEth
```solidity
  function moduleD_mintFixedRateEth(
    address wrapMint,
    address exchange,
    uint256 amountIn,
    uint256 amountOutMin,
    uint256 minLockedYield,
    bytes data
  ) external returns (address fixedRateContract_, uint256 amountOut, uint256 lockedYield)
```
Mints a fixed rate position using the WrapMint contract with Ether.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint` | address | The address of the wrap contract. |
| `exchange` | address | The address of the exchange contract. |
| `amountIn` | uint256 | The amount of Ether to be deposited. |
| `amountOutMin` | uint256 | The minimum amount of tokens to be received. |
| `minLockedYield` | uint256 | The minimum locked yield. |
| `data` | bytes | Additional data for the WrapMint contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `fixedRateContract_` | address | The address of the fixed rate contract. |
| `amountOut` | uint256 | The amount of tokens received. |
| `lockedYield` | uint256 | The locked yield. |

### moduleD_mintVariableRate
```solidity
  function moduleD_mintVariableRate(
    address wrapMint,
    address exchange,
    address token,
    uint256 amountIn,
    uint256 amountOutMin,
    bytes data
  ) external returns (address variableRateContract_, uint256 amountOut)
```
Mints a variable rate position using the WrapMint contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint` | address | The address of the wrap contract. |
| `exchange` | address | The address of the exchange contract. |
| `token` | address | The address of the token to be used. |
| `amountIn` | uint256 | The amount of tokens to be deposited. |
| `amountOutMin` | uint256 | The minimum amount of tokens to be received. |
| `data` | bytes | Additional data for the WrapMint contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `variableRateContract_` | address | The address of the variable rate contract. |
| `amountOut` | uint256 | The amount of tokens received. |

### moduleD_mintVariableRateEth
```solidity
  function moduleD_mintVariableRateEth(
    address wrapMint,
    address exchange,
    uint256 amountIn,
    uint256 amountOutMin,
    bytes data
  ) external returns (address variableRateContract_, uint256 amountOut)
```
Mints a variable rate position using the WrapMint contract with Ether.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint` | address | The address of the wrap contract. |
| `exchange` | address | The address of the exchange contract. |
| `amountIn` | uint256 | The amount of Ether to be deposited. |
| `amountOutMin` | uint256 | The minimum amount of tokens to be received. |
| `data` | bytes | Additional data for the WrapMint contract. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `variableRateContract_` | address | The address of the variable rate contract. |
| `amountOut` | uint256 | The amount of tokens received. |

### moduleD_burnVariableRate
```solidity
  function moduleD_burnVariableRate(
    address wrapMint,
    address variableRate,
    uint256 amount,
    uint256 minYield
  ) external returns (uint256 yieldToUnlock, uint256 yieldToRelease)
```
Burns a variable rate position using the WrapMint contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint` | address | The address of the wrap contract. |
| `variableRate` | address | The address of the variable rate contract. |
| `amount` | uint256 | The amount of tokens to be burned. |
| `minYield` | uint256 | The minimum yield to be received. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `yieldToUnlock` | uint256 | The amount of yield to be unlocked. |
| `yieldToRelease` | uint256 | The amount of yield to be released. |

### moduleD_burnFixedRate
```solidity
  function moduleD_burnFixedRate(
    address wrapMint,
    address fixedRate,
    uint256 amount
  ) external returns (uint256 yieldToUnlock, uint256 yieldToRelease)
```
Burns a fixed rate position using the WrapMint contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint` | address | The address of the wrap contract. |
| `fixedRate` | address | The address of the fixed rate contract. |
| `amount` | uint256 | The amount of tokens to be burned. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `yieldToUnlock` | uint256 | The amount of yield to be unlocked. |
| `yieldToRelease` | uint256 | The amount of yield to be released. |

### moduleD_borrow
```solidity
  function moduleD_borrow(
    address oToken,
    uint256 borrowAmount
  ) external returns (uint256)
```
Borrows tokens from the Orbit protocol.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oToken` | address | The address of the oToken contract. |
| `borrowAmount` | uint256 | The amount of tokens to be borrowed. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | amount of tokens borrowed. |

### moduleD_mint
```solidity
  function moduleD_mint(
    address oToken,
    uint256 mintAmount
  ) external returns (uint256)
```
Mints tokens in the Orbit protocol.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oToken` | address | The address of the oToken contract. |
| `mintAmount` | uint256 | The amount of tokens to be minted. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | amount of tokens minted. |

### moduleD_repayBorrow
```solidity
  function moduleD_repayBorrow(
    address oToken,
    uint256 repayAmount
  ) external returns (uint256)
```
Repays a borrow in the Orbit protocol.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oToken` | address | The address of the oToken contract. |
| `repayAmount` | uint256 | The amount of tokens to be repaid. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | amount of tokens repaid. |

### moduleD_redeem
```solidity
  function moduleD_redeem(
    address oToken,
    uint256 redeemTokens
  ) external returns (uint256)
```
Redeems tokens from the Orbit protocol.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `oToken` | address | The address of the oToken contract. |
| `redeemTokens` | uint256 | The amount of tokens to be redeemed. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | amount of tokens redeemed. |

### moduleD_enterMarkets
```solidity
  function moduleD_enterMarkets(
    address comptroller,
    address[] oTokens
  ) external returns (uint256[])
```
Enters the specified markets in the Orbit protocol.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `comptroller` | address | The address of the comptroller contract. |
| `oTokens` | address[] | The addresses of the oTokens to enter. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256[] | error codes for each market entered. |

### moduleD_depositBalance
```solidity
  function moduleD_depositBalance(
    address wrapMint_,
    address oToken_,
    address underlying_,
    enum ILoopooorModuleD.MODE mode_,
    uint256 leverage
  ) external
```
Deposits the balance into the Orbit protocol and mints a fixed or variable rate position.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wrapMint_` | address | The address of the WrapMint contract. |
| `oToken_` | address | The address of the oToken contract. |
| `underlying_` | address | The address of the underlying asset. |
| `mode_` | enum ILoopooorModuleD.MODE | The mode to be used (fixed or variable rate). |
| `leverage` | uint256 | The leverage to be used. |

### moduleD_withdrawBalance
```solidity
  function moduleD_withdrawBalance() external
```
Withdraws the balance from the Orbit protocol and burns the fixed or variable rate position.



### moduleD_withdrawBalanceTo
```solidity
  function moduleD_withdrawBalanceTo(
    address receiver
  ) external
```
Withdraws the balance from the Orbit protocol and burns the fixed or variable rate position, then sends the balance to the specified receiver.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `receiver` | address | The address to send the balance to. |

### moduleD_sendBalanceTo
```solidity
  function moduleD_sendBalanceTo(
    address receiver,
    address token
  ) external
```
Sends the balance of the specified token to the specified receiver.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `receiver` | address | The address to send the balance to. |
| `token` | address | The address of the token to be sent. |


