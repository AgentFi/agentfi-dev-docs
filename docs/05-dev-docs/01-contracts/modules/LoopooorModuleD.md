<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/modules/LoopooorModuleD.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

A module used in the Loopooor strategy.

Designed for use on Blast Mainnet only.


## Functions
### loopooorModuleDStorage
```solidity
  function loopooorModuleDStorage() internal returns (struct LoopooorModuleD.LoopooorModuleDStorage s)
```




### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) public
```
Constructs the LoopooorModuleD contract.


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




### eth
```solidity
  function eth() external returns (address)
```




### weth
```solidity
  function weth() external returns (address)
```




### mode
```solidity
  function mode() public returns (enum ILoopooorModuleD.MODE)
```




### rateContract
```solidity
  function rateContract() public returns (address)
```




### underlying
```solidity
  function underlying() public returns (address)
```




### wrapMint
```solidity
  function wrapMint() public returns (address)
```




### oToken
```solidity
  function oToken() public returns (contract IOErc20Delegator)
```




### comptroller
```solidity
  function comptroller() public returns (contract IOrbitSpaceStationV4)
```




### duoAsset
```solidity
  function duoAsset() public returns (contract IERC20)
```




### supplyBalance
```solidity
  function supplyBalance() public returns (uint256 supply_)
```




### borrowBalance
```solidity
  function borrowBalance() public returns (uint256 borrow_)
```




### getComptroller
```solidity
  function getComptroller() internal returns (contract IOrbitSpaceStationV4)
```




### getDuoAssetFromOToken
```solidity
  function getDuoAssetFromOToken() internal returns (contract IERC20)
```




### getDuoAssetFromWrapMint
```solidity
  function getDuoAssetFromWrapMint() internal returns (contract IERC20)
```




### moduleD_mintFixedRate
```solidity
  function moduleD_mintFixedRate() public returns (address fixedRateContract_, uint256 amountOut, uint256 lockedYield)
```




### moduleD_mintFixedRateEth
```solidity
  function moduleD_mintFixedRateEth() public returns (address fixedRateContract_, uint256 amountOut, uint256 lockedYield)
```




### moduleD_mintVariableRate
```solidity
  function moduleD_mintVariableRate() public returns (address variableRateContract_, uint256 amountOut)
```




### moduleD_mintVariableRateEth
```solidity
  function moduleD_mintVariableRateEth() public returns (address variableRateContract_, uint256 amountOut)
```




### moduleD_burnVariableRate
```solidity
  function moduleD_burnVariableRate() public returns (uint256 yieldToUnlock, uint256 yieldToRelease)
```




### moduleD_burnFixedRate
```solidity
  function moduleD_burnFixedRate() public returns (uint256 yieldToUnlock, uint256 yieldToRelease)
```




### moduleD_borrow
```solidity
  function moduleD_borrow() public returns (uint256)
```




### moduleD_mint
```solidity
  function moduleD_mint() public returns (uint256)
```




### moduleD_repayBorrow
```solidity
  function moduleD_repayBorrow() public returns (uint256)
```




### moduleD_redeem
```solidity
  function moduleD_redeem() public returns (uint256)
```




### moduleD_enterMarkets
```solidity
  function moduleD_enterMarkets() public returns (uint256[])
```




### moduleD_enterMarket
```solidity
  function moduleD_enterMarket() internal
```




### moduleD_depositBalance
```solidity
  function moduleD_depositBalance() external
```




### moduleD_withdrawBalance
```solidity
  function moduleD_withdrawBalance() public
```




### moduleD_withdrawBalanceTo
```solidity
  function moduleD_withdrawBalanceTo() external
```




### moduleD_sendBalanceTo
```solidity
  function moduleD_sendBalanceTo() public
```




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


