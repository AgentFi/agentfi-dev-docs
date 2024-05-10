<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/Particle/IParticlePositionManager.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### swap
```solidity
  function swap(
    address tokenFrom,
    address tokenTo,
    uint24 fee,
    uint256 amountFrom,
    uint256 amountToMinimum,
    uint256 blockNumber,
    bytes oracleSignature
  ) external returns (uint256 amountReceived)
```
Swap exactly `amountFrom` of `tokenFrom` into `tokenTo`.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `tokenFrom` | address | address of token to swap from |
| `tokenTo` | address | address of token to swap to |
| `fee` | uint24 | fee level of the pool |
| `amountFrom` | uint256 | amount of tokenFrom to swap |
| `amountToMinimum` | uint256 | minimum amount of tokenTo to receive |
| `blockNumber` | uint256 | The block number that the message was signed at. |
| `oracleSignature` | bytes | A signature from the oracle. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `amountReceived` | uint256 | amount of tokenTo received |

