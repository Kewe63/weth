import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-verify";
import "@matterlabs/hardhat-zksync-solc";
import "@nomiclabs/hardhat-waffle";

module.exports = {
  // hardhat-zksync-solc
  // The compiler configuration for zkSync artifacts.
  zksolc: {
    version: "latest",
    compilerSource: "binary",
    settings: {
      compilerPath: "./zksolc-linux-amd64-musl-v1.3.5",
    },
  },

  // The compiler configuration for normal artifacts.
  solidity: {
    version: "0.8.15",
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
    hardhat: {
      chainId: 280,
      gasMultiplier: 0,
      gasPrice: 0,
      initialBaseFeePerGas: 0
    },

    goerli: {
      url: "https://rpc.ankr.com/eth_goerli"
    },

    mainnet: {
      url: "https://eth.llamarpc.com"
    },

    zkTestnet: {
      zksync: true,

      // URL of the Ethereum Web3 RPC, or the identifier of the network (e.g. `mainnet` or `goerli`)
      ethNetwork: "goerli",

      // URL of the zkSync network RPC
      url: 'https://zksync2-testnet.zksync.dev',

      // Verification endpoint for Goerli
      verifyURL: 'https://testnet-explorer.zksync.dev/contract_verification'
    },

    zkMainnet: {
      zksync: true,

      // URL of the Ethereum Web3 RPC, or the identifier of the network (e.g. `mainnet` or `goerli`)
      ethNetwork: "mainnet",

      // URL of the zkSync network RPC
      url: 'https://zksync2-mainnet.zksync.io',

      // Verification endpoint for Goerli
      verifyURL: 'https://explorer.zksync.io/contract_verification'
    },
  },
  mocha: {
    timeout: 40000
  },
};