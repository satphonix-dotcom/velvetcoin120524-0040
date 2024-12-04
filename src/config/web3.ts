import { defaultWagmiConfig } from '@web3modal/wagmi';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

export const projectId = 'YOUR_WALLET_CONNECT_PROJECT_ID';

const metadata = {
  name: 'Velvet Coin',
  description: 'Luxury Fashion E-commerce with Cryptocurrency',
  url: 'https://velvetcoin.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia],
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
});