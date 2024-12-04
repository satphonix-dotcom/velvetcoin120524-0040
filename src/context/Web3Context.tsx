import React, { createContext, useContext } from 'react';
import { useAccount, useDisconnect, useBalance } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

interface Web3ContextType {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: boolean;
  address?: string;
  balance: {
    eth?: string;
    formatted?: string;
  };
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const { data: balance } = useBalance({
    address,
  });

  const connect = async () => {
    try {
      await open();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnect = async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <Web3Context.Provider
      value={{
        connect,
        disconnect,
        isConnected,
        address,
        balance: {
          eth: balance?.formatted,
          formatted: balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : undefined,
        },
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};