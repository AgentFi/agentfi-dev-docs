<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Monoswap/IMonoswapV3Router.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Functions for swapping tokens via Monoswap CLMM


## Functions
### factory
```solidity
  function factory() external returns (address)
```




### WETH
```solidity
  function WETH() external returns (address)
```




### addLiquidity
```solidity
  function addLiquidity() external returns (uint256 amountA, uint256 amountB, uint256 liquidity)
```




### addLiquidityETH
```solidity
  function addLiquidityETH() external returns (uint256 amountToken, uint256 amountETH, uint256 liquidity)
```




### removeLiquidity
```solidity
  function removeLiquidity() external returns (uint256 amountA, uint256 amountB)
```




### removeLiquidityETH
```solidity
  function removeLiquidityETH() external returns (uint256 amountToken, uint256 amountETH)
```




### removeLiquidityWithPermit
```solidity
  function removeLiquidityWithPermit() external returns (uint256 amountA, uint256 amountB)
```




### removeLiquidityETHWithPermit
```solidity
  function removeLiquidityETHWithPermit() external returns (uint256 amountToken, uint256 amountETH)
```




### swapExactTokensForTokens
```solidity
  function swapExactTokensForTokens() external returns (uint256[] amounts)
```




### swapTokensForExactTokens
```solidity
  function swapTokensForExactTokens() external returns (uint256[] amounts)
```




### swapExactETHForTokens
```solidity
  function swapExactETHForTokens() external returns (uint256[] amounts)
```




### swapTokensForExactETH
```solidity
  function swapTokensForExactETH() external returns (uint256[] amounts)
```




### swapExactTokensForETH
```solidity
  function swapExactTokensForETH() external returns (uint256[] amounts)
```




### swapETHForExactTokens
```solidity
  function swapETHForExactTokens() external returns (uint256[] amounts)
```




### quote
```solidity
  function quote() external returns (uint256 amountB)
```




### getAmountOut
```solidity
  function getAmountOut() external returns (uint256 amountOut)
```




### getAmountIn
```solidity
  function getAmountIn() external returns (uint256 amountIn)
```




### getAmountsOut
```solidity
  function getAmountsOut() external returns (uint256[] amounts)
```




### getAmountsIn
```solidity
  function getAmountsIn() external returns (uint256[] amounts)
```




### removeLiquidityETHSupportingFeeOnTransferTokens
```solidity
  function removeLiquidityETHSupportingFeeOnTransferTokens() external returns (uint256 amountETH)
```




### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens
```solidity
  function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens() external returns (uint256 amountETH)
```




### swapExactTokensForTokensSupportingFeeOnTransferTokens
```solidity
  function swapExactTokensForTokensSupportingFeeOnTransferTokens() external
```




### swapExactETHForTokensSupportingFeeOnTransferTokens
```solidity
  function swapExactETHForTokensSupportingFeeOnTransferTokens() external
```




### swapExactTokensForETHSupportingFeeOnTransferTokens
```solidity
  function swapExactTokensForETHSupportingFeeOnTransferTokens() external
```




### exactInputSingle
```solidity
  function exactInputSingle(
    struct IMonoswapV3Router.ExactInputSingleParams params
  ) external returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another token


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3Router.ExactInputSingleParams | The parameters necessary for the swap, encoded as `ExactInputSingleParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### exactInput
```solidity
  function exactInput(
    struct IMonoswapV3Router.ExactInputParams params
  ) external returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another along the specified path


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3Router.ExactInputParams | The parameters necessary for the multi-hop swap, encoded as `ExactInputParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### exactOutput
```solidity
  function exactOutput(
    struct IMonoswapV3Router.ExactOutputParams params
  ) external returns (uint256 amountIn)
```
Swaps as little as possible of one token for `amountOut` of another along the specified path (reversed)


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3Router.ExactOutputParams | The parameters necessary for the multi-hop swap, encoded as `ExactOutputParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountIn` | uint256 | The amount of the input token |

