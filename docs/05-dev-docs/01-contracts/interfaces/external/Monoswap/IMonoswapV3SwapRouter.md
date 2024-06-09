<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Monoswap/IMonoswapV3SwapRouter.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Functions for swapping tokens via Uniswap V3


## Functions
### exactInputSingle
```solidity
  function exactInputSingle(
    struct IMonoswapV3SwapRouter.ExactInputSingleParams params
  ) external returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another token

Setting `amountIn` to 0 will cause the contract to look up its own balance,
and swap the entire amount, enabling contracts to send tokens before calling this function.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3SwapRouter.ExactInputSingleParams | The parameters necessary for the swap, encoded as `ExactInputSingleParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### exactInput
```solidity
  function exactInput(
    struct IMonoswapV3SwapRouter.ExactInputParams params
  ) external returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another along the specified path

Setting `amountIn` to 0 will cause the contract to look up its own balance,
and swap the entire amount, enabling contracts to send tokens before calling this function.

#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3SwapRouter.ExactInputParams | The parameters necessary for the multi-hop swap, encoded as `ExactInputParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### exactOutputSingle
```solidity
  function exactOutputSingle(
    struct IMonoswapV3SwapRouter.ExactOutputSingleParams params
  ) external returns (uint256 amountIn)
```
Swaps as little as possible of one token for `amountOut` of another token
that may remain in the router after the swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3SwapRouter.ExactOutputSingleParams | The parameters necessary for the swap, encoded as `ExactOutputSingleParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountIn` | uint256 | The amount of the input token |

### exactOutput
```solidity
  function exactOutput(
    struct IMonoswapV3SwapRouter.ExactOutputParams params
  ) external returns (uint256 amountIn)
```
Swaps as little as possible of one token for `amountOut` of another along the specified path (reversed)
that may remain in the router after the swap.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct IMonoswapV3SwapRouter.ExactOutputParams | The parameters necessary for the multi-hop swap, encoded as `ExactOutputParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountIn` | uint256 | The amount of the input token |

