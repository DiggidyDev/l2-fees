import { CryptoStatsSDK } from '@cryptostats/sdk';

const sdk = new CryptoStatsSDK({
  ipfsGateway: 'https://ipfs.cryptostats.community',
  adapterListSubgraph: 'dmihal/cryptostats-adapter-registry-test',
});

sdk.ethers.addProvider('arbitrum-one', 'https://arb1.arbitrum.io/rpc');
sdk.ethers.addProvider('optimism', 'https://mainnet.optimism.io');

export default sdk;
