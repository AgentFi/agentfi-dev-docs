<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/utils/IBlastable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An abstract contract that configures the connection to Blast during deployment

This involves collecting ETH yield, gas rewards, and Blast Points. ETH yield is earned by this contract automatically, while gas rewards and Blast Points are delegated to dedicated collectors.


## Functions
### blast
```solidity
  function blast() external returns (address blast_)
```
Returns the address of the Blast contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blast_` | address | The adress of the Blast contract. |

### blastPoints
```solidity
  function blastPoints() external returns (address blastPoints_)
```
Returns the address of the BlastPoints contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blastPoints_` | address | The adress of the BlastPoints contract. |

