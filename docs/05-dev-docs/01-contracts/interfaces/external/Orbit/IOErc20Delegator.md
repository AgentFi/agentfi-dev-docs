<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Orbit/IOErc20Delegator.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### balanceOf
```solidity
  function balanceOf() external returns (uint256)
```




### comptroller
```solidity
  function comptroller() external returns (address)
```




### underlying
```solidity
  function underlying() external returns (address)
```




### borrow
```solidity
  function borrow(
    uint256 borrowAmount
  ) external returns (uint256)
```
Sender borrows assets from the protocol to their own address


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `borrowAmount` | uint256 | The amount of the underlying asset to borrow |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uint` | uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details) |

### mint
```solidity
  function mint(
    uint256 mintAmount
  ) external returns (uint256)
```
Sender supplies assets into the market and receives oTokens in exchange

Accrues interest whether or not the operation succeeds, unless reverted

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `mintAmount` | uint256 | The amount of the underlying asset to supply |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uint` | uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details) |

### repayBorrow
```solidity
  function repayBorrow(
    uint256 repayAmount
  ) external returns (uint256)
```
Sender repays their own borrow


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `repayAmount` | uint256 | The amount to repay, or -1 for the full outstanding amount |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uint` | uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details) |

### redeem
```solidity
  function redeem(
    uint256 redeemTokens
  ) external returns (uint256)
```
Sender redeems oTokens in exchange for the underlying asset

Accrues interest whether or not the operation succeeds, unless reverted

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `redeemTokens` | uint256 | The number of oTokens to redeem into underlying |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `uint` | uint256 | 0=success, otherwise a failure (see ErrorReporter.sol for details) |

### borrowBalanceCurrent
```solidity
  function borrowBalanceCurrent(
    address account
  ) external returns (uint256)
```
Accrue interest to updated borrowIndex and then calculate account's borrow balance using the updated borrowIndex


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The address whose balance should be calculated after updating borrowIndex |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | calculated balance |

### borrowBalanceStored
```solidity
  function borrowBalanceStored(
    address account
  ) external returns (uint256)
```
Return the borrow balance of account based on stored data


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `account` | address | The address whose balance should be calculated |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | uint256 | calculated balance |

### exchangeRateStored
```solidity
  function exchangeRateStored() external returns (uint256)
```
Calculates the exchange rate from the underlying to the OToken

This function does not accrue interest before calculating the exchange rate


#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `Calculated` | uint256 | exchange rate scaled by 1e18 |

### exchangeRateCurrent
```solidity
  function exchangeRateCurrent() external returns (uint256)
```
Accrue interest then return the up-to-date exchange rate



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `Calculated` | uint256 | exchange rate scaled by 1e18 |

