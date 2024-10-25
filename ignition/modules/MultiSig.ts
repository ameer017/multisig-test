// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const MultiSig = buildModule("MultiSigModule", (m) => {

  const ms = m.contract("MultiSig", [
    ["0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
      "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
      "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",
      "0x2546BcD3c84621e976D8185a91A922aE77ECEc30"
    ], 1]);

  return { ms };

});

export default MultiSig;