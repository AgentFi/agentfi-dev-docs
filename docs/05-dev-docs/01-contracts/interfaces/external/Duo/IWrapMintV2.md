<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Duo/IWrapMintV2.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### duoAssetToken
```solidity
  function duoAssetToken() external returns (address)
```




### mintFixedRate
```solidity
  function mintFixedRate() external returns (address fixedRateContract, uint256 amountOut, uint256 lockedYield)
```
mint a fixed rate contract (represented as NFT), input with ERC20 token



### mintFixedRateEth
```solidity
  function mintFixedRateEth() external returns (address fixedRateContract, uint256 amountOut, uint256 lockedYield)
```
mint a fixed rate contract (represented as NFT), input with ETH



### mintVariableRateEth
```solidity
  function mintVariableRateEth() external returns (address variableRateContract, uint256 amountOut)
```
mint a variable rate contract, input with ETH



### mintVariableRate
```solidity
  function mintVariableRate() external returns (address variableRateContract, uint256 amountOut)
```
mint a variable rate contract, input with ERC20 token



### burnVariableRate
```solidity
  function burnVariableRate(
    address variableRate,
    uint256 amount,
    uint256 minYield
  ) external returns (uint256 yield, uint256 fee)
```
burn a variable rate contract, together with asset token, receiving principal and yield


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `variableRate` | address | the variable rate contract to burn |
| `amount` | uint256 | the amount of variable rate contract to burn |
| `minYield` | uint256 | the minimum amount of yield to unlock |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `yield` | uint256 | the amount of yield unlocked |
| `fee` | uint256 | the amount of fee |

### burnFixedRate
```solidity
  function burnFixedRate(
    address fixedRate,
    uint256 amount
  ) external returns (uint256 yieldToUnlock, uint256 yieldToRelease)
```
burn a fixed rate contract, together with asset token, receiving principal and yield


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `fixedRate` | address | the fixed rate contract to burn |
| `amount` | uint256 | the amount of fixed rate contract to burn |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `yieldToUnlock` | uint256 | the amount of yield to unlock |
| `yieldToRelease` | uint256 | the amount of yield to release |

## Events
### MintFixedRate
```solidity
  event MintFixedRate()
```



### BurnFixedRate
```solidity
  event BurnFixedRate()
```



### MintVariableRate
```solidity
  event MintVariableRate()
```



### BurnVariableRate
```solidity
  event BurnVariableRate()
```



### UpdateExchange
```solidity
  event UpdateExchange()
```



### UpdateFixedRateNft
```solidity
  event UpdateFixedRateNft()
```



### UpdateVariableRateNft
```solidity
  event UpdateVariableRateNft()
```



### UpdateDuoAssetToken
```solidity
  event UpdateDuoAssetToken()
```



