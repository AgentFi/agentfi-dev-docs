<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/utils/Blastable.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>

An abstract contract that configures the connection to Blast during deployment

This involves collecting ETH yield, gas rewards, and Blast Points. ETH yield is earned by this contract automatically, while gas rewards and Blast Points are delegated to dedicated collectors.


## Functions
### constructor
```solidity
  function constructor(
    address blast_,
    address gasCollector_,
    address blastPoints_,
    address pointsOperator_
  ) internal
```
Constructs the Blastable contract.
Configures the contract to receive automatic yield, claimable gas, and assigns a gas collector.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `blast_` | address | The address of the blast gas reward contract. |
| `gasCollector_` | address | The address of the gas collector. |
| `blastPoints_` | address | The address of the blast points contract. |
| `pointsOperator_` | address | The address of the blast points operator. |

### blast
```solidity
  function blast() public returns (address blast_)
```
Returns the address of the Blast contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blast_` | address | The adress of the Blast contract. |

### blastPoints
```solidity
  function blastPoints() public returns (address blastPoints_)
```
Returns the address of the BlastPoints contract.



#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `blastPoints_` | address | The adress of the BlastPoints contract. |

### receive
```solidity
  function receive() external
```
Allows this contract to receive the gas token.




