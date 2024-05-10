<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/ConcentratedLiquidityGatewayModuleC.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

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
Constructs the ConcentratedLiquidityModuleC contract.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### moduleC_wrap
```solidity
  function moduleC_wrap() public
```




### moduleC_mintWithBalance
```solidity
  function moduleC_mintWithBalance() public returns (uint256, uint128, uint256, uint256)
```




### moduleC_increaseLiquidityWithBalance
```solidity
  function moduleC_increaseLiquidityWithBalance() public returns (uint128, uint256, uint256)
```




### moduleC_sendBalanceTo
```solidity
  function moduleC_sendBalanceTo() public
```





