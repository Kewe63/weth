require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  // hardhat-zksync-solc
  // The compiler configuration for zkSync artifacts.
  zksolc: {
    version: "latest",
    compilerSource: "binary",
    settings: {
      compilerPath: "./zksolc-linux-amd64-musl-v1.2.0",
    },
  },

  // hardhat-zksync-deploy
  // Run `deploy-zksync` task to deploy zkSync artifacts into following network.
  // Note that it will use `artifacts` instead of `artifacts-zk`.
  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    ethNetwork: "goerli",
  },

  // The compiler configuration for normal artifacts.
  solidity: {
    version: "0.5.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999
      }
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  // tests
  defaultNetwork: 'hardhat',
  networks: {
    // Run compile task with this network to generate normal artifacts.
    // Example: `yarn hardhat compile --network hardhat`
    hardhat: {
      chainId: 280,
      gasMultiplier: 0,
      gasPrice: 0,
      initialBaseFeePerGas: 0
    },

    // Run compile task with this network to generate `artifacts-zk` and `cache-zk`.
    // Example: `yarn hardhat compile --network zksync`
    zksync: {
      zksync: true,
      url: 'https://zksync2-testnet.zksync.dev',
      chainId: 280
    },
  },
  mocha: {
    timeout: 40000
  },
};