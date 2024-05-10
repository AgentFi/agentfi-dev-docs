<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Thruster/ISwapRouter.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

Functions for swapping tokens via Thruster CLMM


## Functions
### exactInputSingle
```solidity
  function exactInputSingle(
    struct ISwapRouter.ExactInputSingleParams params
  ) external returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another token


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactInputSingleParams | The parameters necessary for the swap, encoded as `ExactInputSingleParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### exactInput
```solidity
  function exactInput(
    struct ISwapRouter.ExactInputParams params
  ) external returns (uint256 amountOut)
```
Swaps `amountIn` of one token for as much as possible of another along the specified path


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactInputParams | The parameters necessary for the multi-hop swap, encoded as `ExactInputParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountOut` | uint256 | The amount of the received token |

### exactOutput
```solidity
  function exactOutput(
    struct ISwapRouter.ExactOutputParams params
  ) external returns (uint256 amountIn)
```
Swaps as little as possible of one token for `amountOut` of another along the specified path (reversed)


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `params` | struct ISwapRouter.ExactOutputParams | The parameters necessary for the multi-hop swap, encoded as `ExactOutputParams` in calldata |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountIn` | uint256 | The amount of the input token |

### factory
```solidity
  function factory() external returns (address)
```
The contract that deployed the pool, which must adhere to the IThrusterPoolFactory interface



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `The` | address | contract address |

