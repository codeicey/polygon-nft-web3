require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/juCuSQEu7XvOcSGKFOjgGP_tfoOpt057`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/ZmdpCSobYrhNf2kp3Wvu_gxWI1QtpKc2`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.18",
};
