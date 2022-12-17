/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: "goerli",
    networks: {
       goerli: {
        hardhat: {},
          url: 'https://goerli.infura.io/v3/7dcdeb180769458493744588542fabcd',
          accounts: [`0x${process.env.PRIVATE_KEY}`]
       }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
