const { utils } = require('ethers');
const {ethers} = require('hardhat')

async function main() {
  // deploys the escrow contract
  const contractName = "Escrow";
  const arbiter = '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E'; // Replace with the actual arbiter address
  const beneficiary = '0xda52d66dA5836cf49C3DBEED2DB9dE74Ef1694B3'; // Replace with the actual beneficiary address
  const value = ethers.utils.parseEther('0.00001'); // Replace with the desired amount in Wei

  const Escrow = await hre.ethers.getContractFactory(contractName);
  const escrow = await Escrow.deploy( arbiter, beneficiary, {value}); // you put the constructor params inside the ()

  console.log(`${contractName} deployed to address: ${escrow.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });