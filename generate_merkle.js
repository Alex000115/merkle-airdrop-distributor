const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const { ethers } = require('ethers');

// Example data
const recipients = [
  { address: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", amount: "100" },
  { address: "0x123...", amount: "200" }
];

const leaves = recipients.map(x => 
  keccak256(ethers.solidityPacked(["address", "uint256"], [x.address, x.amount]))
);

const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
const root = tree.getHexRoot();

console.log("Merkle Root:", root);
