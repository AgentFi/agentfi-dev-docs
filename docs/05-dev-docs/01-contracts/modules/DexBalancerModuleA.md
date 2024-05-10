<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/DexBalancerModuleA.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A module used in the dex balancer strategy.

Designed for use on Blast Mainnet only.


## Functions
### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the DexBalancerModuleA contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### moduleName
```solidity
  function moduleName() external returns (string name_)
```




### strategyType
```solidity
  function strategyType() external returns (string type_)
```




### weth
```solidity
  function weth() external returns (address weth_)
```




### usdb
```solidity
  function usdb() external returns (address usdb_)
```




### thrusterRouter100
```solidity
  function thrusterRouter100() external returns (address thrusterRouter100_)
```




### thrusterRouter030
```solidity
  function thrusterRouter030() external returns (address thrusterRouter030_)
```




### thrusterLpToken
```solidity
  function thrusterLpToken() external returns (address thrusterLpToken_)
```




### hyperlockStaking
```solidity
  function hyperlockStaking() external returns (address hyperlockStaking_)
```




### ringSwapV2Router
```solidity
  function ringSwapV2Router() external returns (address ringSwapV2Router_)
```




### ringFwWeth
```solidity
  function ringFwWeth() external returns (address ringFwWeth_)
```




### ringFwUsdb
```solidity
  function ringFwUsdb() external returns (address ringFwUsdb_)
```




### ringLpToken
```solidity
  function ringLpToken() external returns (address ringLpToken_)
```




### ringFwLpToken
```solidity
  function ringFwLpToken() external returns (address ringFwLpToken_)
```




### ringStakingRewards
```solidity
  function ringStakingRewards() external returns (address ringStakingRewards_)
```




### ringStakingIndex
```solidity
  function ringStakingIndex() external returns (uint256 ringStakingIndex_)
```




### blasterswapRouter
```solidity
  function blasterswapRouter() external returns (address blasterswapRouter_)
```




### blasterswapLpToken
```solidity
  function blasterswapLpToken() external returns (address blasterswapLpToken_)
```




### moduleA_depositBalance
```solidity
  function moduleA_depositBalance() external
```




### moduleA_withdrawBalance
```solidity
  function moduleA_withdrawBalance() external
```




### moduleA_withdrawBalanceTo
```solidity
  function moduleA_withdrawBalanceTo() external
```




### _depositBalance
```solidity
  function _depositBalance() internal
```
Deposits this contracts balance into the dexes.



### _depositThruster
```solidity
  function _depositThruster(
    uint256 wethAmount,
    uint256 usdbAmount
  ) internal
```
Deposits tokens into Thruster.
Deposits the tokens into the liquidity pool and stakes the LP token into Hyperlock.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wethAmount` | uint256 | The amount of WETH to deposit. |
| `usdbAmount` | uint256 | The amount of USDB to deposit. |

### _depositRingProtocol
```solidity
  function _depositRingProtocol(
    uint256 wethAmount,
    uint256 usdbAmount
  ) internal
```
Deposits tokens into Ring Protocol.
Deposits the tokens into the liquidity pool and stakes the LP token.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wethAmount` | uint256 | The amount of WETH to deposit. |
| `usdbAmount` | uint256 | The amount of USDB to deposit. |

### _depositBlasterswap
```solidity
  function _depositBlasterswap(
    uint256 wethAmount,
    uint256 usdbAmount
  ) internal
```
Deposits tokens into Blasterswap.
Deposits the tokens into the liquidity pool.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `wethAmount` | uint256 | The amount of WETH to deposit. |
| `usdbAmount` | uint256 | The amount of USDB to deposit. |

### _withdrawBalance
```solidity
  function _withdrawBalance() internal
```
Deposits tokens from all pools.
Will attempt to withdraw all known tokens and hold the WETH and USDB in the TBA.



### _withdrawThruster
```solidity
  function _withdrawThruster() internal
```
Deposits tokens from Hyperlock staking and Thruster liquidity pool.
Will attempt to withdraw all known tokens and hold the WETH and USDB in the TBA.



### _withdrawRingProtocol
```solidity
  function _withdrawRingProtocol() internal
```
Deposits tokens from Ring staking and liquidity pool.
Will attempt to withdraw all known tokens and hold the WETH and USDB in the TBA.



### _withdrawBlasterswap
```solidity
  function _withdrawBlasterswap() internal
```
Deposits tokens from Blasterswap liquidity pool.
Will attempt to withdraw all known tokens and hold the WETH and USDB in the TBA.



### _checkApproval
```solidity
  function _checkApproval(
    address token,
    address recipient,
    uint256 minAmount
  ) internal
```
Checks the approval of an ERC20 token from this contract to another address.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `token` | address | The token to check allowance. |
| `recipient` | address | The address to give allowance to. |
| `minAmount` | uint256 | The minimum amount of the allowance. |


