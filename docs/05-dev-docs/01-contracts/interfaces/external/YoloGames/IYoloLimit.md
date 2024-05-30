<a href="https://github.com/AgentFi/agentfi-contracts/blob/main/contracts/interfaces/external/YoloGames/IYoloLimit.sol"><img src="/img/github.svg" alt="Github" width="50px"/> Source</a><br/><br/>




## Functions
### deposit
```solidity
  function deposit(
    uint256 roundId,
    struct IYoloLimit.DepositCalldata[] deposits
  ) external
```
This function allows players to deposit into a round.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `roundId` | uint256 | The open round ID. |
| `deposits` | struct IYoloLimit.DepositCalldata[] | The ERC-20/ERC-721 deposits to be made. |

### roundsCount
```solidity
  function roundsCount() external returns (uint40 count)
```
Number of rounds that have been created.

In this smart contract, roundId is an uint256 but its
     max value can only be 2^40 - 1. Realistically we will still
     not reach this number.


### getRound
```solidity
  function getRound(
    uint256 roundId
  ) external returns (enum IYoloLimit.RoundStatus status, uint40 maximumNumberOfParticipants, uint16 roundProtocolFeeBp, uint40 cutoffTime, uint40 drawnAt, uint40 numberOfParticipants, address winner, uint96 roundValuePerEntry, uint256 protocolFeeOwed, struct IYoloLimit.Deposit[] deposits)
```
This function returns the given round's data.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `roundId` | uint256 | The round ID. |

#### Return Values:
| Name                           | Type          | Description                                                                  |
| :----------------------------- | :------------ | :--------------------------------------------------------------------------- |
| `status` | enum IYoloLimit.RoundStatus | The status of the round. |
| `maximumNumberOfParticipants` | uint40 | The round's maximum number of participants. |
| `roundProtocolFeeBp` | uint16 | The round's protocol fee in basis points. |
| `cutoffTime` | uint40 | The round's cutoff time. |
| `drawnAt` | uint40 | The time the round was drawn. |
| `numberOfParticipants` | uint40 | The round's current number of participants. |
| `winner` | address | The round's winner. |
| `roundValuePerEntry` | uint96 | The round's value per entry. |
| `protocolFeeOwed` | uint256 | The round's protocol fee owed in ETH. |
| `deposits` | struct IYoloLimit.Deposit[] | The round's deposits. |

### claimPrizes
```solidity
  function claimPrizes(
    struct IYoloLimit.WithdrawalCalldata[] withdrawalCalldata,
    bool payWithLOOKS
  ) external
```
This function allows the winner of a round to withdraw the prizes.


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
| `withdrawalCalldata` | struct IYoloLimit.WithdrawalCalldata[] | The rounds and the indices for the rounds for the prizes to claim. |
| `payWithLOOKS` | bool | Whether to pay for the protocol fee with LOOKS. |


