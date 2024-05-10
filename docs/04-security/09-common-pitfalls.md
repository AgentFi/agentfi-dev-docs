---
sidebar_position: 9
---

# Common pitfalls
---

### <b>Linkgen Limited cannot be held responsible for any losses from the use of AgentFi.</b>  

We care about your crypto and do all that we can to keep it safe. It is ultimately your responsibility to keep it safe.

Funds are safu if the protocol is used as intended. There are many ways to use it improperly that may lead to loss of funds. We've compiled an incomplete list of some common pitfalls so you may avoid them.

### Incorrect destination address

In functions that transfer tokens, the protocol needs to know where to send the output. Passing in the wrong address will cause the tokens to be sent to the wrong destination, possibly an address that you don't control.

This sort of mistake is not unique to AgentFi. Countless BTC and ETH have been lost by incorrectly typing addresses. This is a common mistake and this point is worth reiterating.

###  Transferring the Agent NFT

Agents are represented as ERC721 tokens, each of which has one or more ERC6551 Token Bound Account. The owner of the NFT has the ability to withdraw tokens from the TBA. By transferring away the NFT, you give up the rights to the tokens in the TBA. Beware of scams and lowball offers on NFT marketplaces.

###  Buying and Selling Agent NFTs

Igor enjoys the artwork on Mallory's NFT and wants to buy it. He uses a secondary NFT marketplace to make an offer to Mallory, factoring in the value of the tokens in the TBAs. Mallory withdraws the tokens from her agent then accepts the offer.

In a standard NFT marketplace, the transaction will be successful and Igor will receive an NFT with less funds than he expected. Igor should have used a marketplace that has the proper safeguards for TBAs, ensuring the NFT has the proper token balances when he receives it. Alternatively, the two parties could arrange for a deal for just the NFT with no tokens in the TBA.
