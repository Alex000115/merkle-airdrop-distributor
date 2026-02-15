# Merkle Airdrop Distributor

This repository features a professional implementation of a Merkle-based airdrop. Instead of storing a massive list of addresses on-chain (which is prohibitively expensive), this contract stores a single 32-byte Merkle Root.

### Features
* **Hyper-Efficiency:** Distribute tokens to an infinite number of users with minimal on-chain storage.
* **Proof Verification:** Uses OpenZeppelin's `MerkleProof` library to validate claims securely.
* **Anti-Double Claim:** Built-in bitmapping or mapping to ensure each eligible address can only claim once.
* **Zero-Griefing:** Claims are push-based, meaning users pay their own gas to receive tokens.

### Technical Workflow
1. **Off-Chain:** Generate a Merkle Tree from a list of addresses and amounts. 
2. **On-Chain:** Deploy this contract with the Merkle Root.
3. **Claim:** Users provide a "proof" (a sibling path in the tree) to the `claim()` function to unlock their tokens.

### License
MIT
