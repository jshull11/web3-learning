require('dotenv').config();
const { ethers } = require("ethers");
console.log("Loaded key:", process.env.ALCHEMY_API_KEY);

const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);

async function main() {
  const address = "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe";
  const balance = await provider.getBalance(address);
  console.log(`ETH Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
}

main();

