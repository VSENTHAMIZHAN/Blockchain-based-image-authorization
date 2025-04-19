const hre = require("hardhat");

async function main() {
  const ImageAuth = await hre.ethers.getContractFactory("ImageAuth");
  const contract = await ImageAuth.deploy(); // deploy the contract
  await contract.waitForDeployment(); // wait for deployment to finish

  console.log("ImageAuth deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
