<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/RingProtocol/IFewRouter.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Uniswap's UniversalV2Router02 rewritten for use in Ring Protocol.


## Functions
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




### claimMaxGas
```solidity
  function claimMaxGas() external returns (uint256)
```





