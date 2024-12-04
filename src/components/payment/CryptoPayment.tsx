import React, { useState } from 'react';
import { useWeb3 } from '../../context/Web3Context';
import { Wallet, Bitcoin } from 'lucide-react';

interface CryptoPaymentProps {
  amount: {
    eth: number;
    btc: number;
  };
  onSuccess: () => void;
}

const CryptoPayment: React.FC<CryptoPaymentProps> = ({ amount, onSuccess }) => {
  const { connect, disconnect, isConnected, address, balance } = useWeb3();
  const [paymentMethod, setPaymentMethod] = useState<'eth' | 'btc'>('eth');

  const handlePayment = async () => {
    if (!isConnected) {
      await connect();
      return;
    }

    try {
      // Here you would implement the actual payment logic
      // For ETH payments, you would use the wagmi hooks to send a transaction
      // For BTC payments, you would need to integrate with a Bitcoin payment processor
      
      // For demo purposes, we'll just show a success message
      onSuccess();
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-heading font-heading1 text-xl tracking-wider">Payment Method</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setPaymentMethod('eth')}
            className={`flex items-center justify-center gap-2 p-4 border rounded-lg transition-colors ${
              paymentMethod === 'eth'
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Wallet size={24} strokeWidth={1} />
            <span className="font-body">Ethereum</span>
          </button>
          <button
            onClick={() => setPaymentMethod('btc')}
            className={`flex items-center justify-center gap-2 p-4 border rounded-lg transition-colors ${
              paymentMethod === 'btc'
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Bitcoin size={24} strokeWidth={1} />
            <span className="font-body">Bitcoin</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center py-4 border-t border-gray-200">
          <span className="font-body text-gray-600">Amount Due</span>
          <span className="font-heading font-heading1 text-xl">
            {paymentMethod === 'eth' 
              ? `${amount.eth.toFixed(4)} ETH`
              : `${amount.btc.toFixed(4)} BTC`
            }
          </span>
        </div>

        {isConnected ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-body text-sm text-gray-600">Connected Wallet</p>
              <p className="font-body text-sm font-semibold">{address}</p>
              {balance?.formatted && (
                <p className="font-body text-sm text-gray-600 mt-1">
                  Balance: {balance.formatted}
                </p>
              )}
            </div>
            <button
              onClick={handlePayment}
              className="w-full bg-black text-white py-4 font-body hover:bg-gray-900 transition-colors"
            >
              Confirm Payment
            </button>
            <button
              onClick={disconnect}
              className="w-full border border-gray-200 py-4 font-body hover:bg-gray-50 transition-colors"
            >
              Disconnect Wallet
            </button>
          </div>
        ) : (
          <button
            onClick={connect}
            className="w-full bg-black text-white py-4 font-body hover:bg-gray-900 transition-colors"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default CryptoPayment;