<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/ConcentratedLiquidityHyperlockModuleC.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A module used in the Concentrated liquidity strategy.

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
Constructs the ConcentratedLiquidityHyperlockModuleC contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### hyperlockStaking
```solidity
  function hyperlockStaking() external returns (address hyperlockStaking_)
```




### manager
```solidity
  function manager() public returns (address manager_)
```




### moduleC_mint
```solidity
  function moduleC_mint() public returns (uint256 tokenId_, uint128 liquidity, uint256 amount0, uint256 amount1)
```




### moduleC_decreaseLiquidity
```solidity
  function moduleC_decreaseLiquidity() public returns (uint256, uint256)
```




### moduleC_collect
```solidity
  function moduleC_collect() public returns (uint256 amount0, uint256 amount1)
```




### moduleC_burn
```solidity
  function moduleC_burn() public
```





