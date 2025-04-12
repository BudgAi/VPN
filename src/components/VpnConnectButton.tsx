
import React from 'react';
import { Button } from "@/components/ui/button";
import { Power } from 'lucide-react';

type VpnConnectButtonProps = {
  status: 'connected' | 'connecting' | 'disconnected';
  onClick: () => void;
  className?: string;
};

const VpnConnectButton: React.FC<VpnConnectButtonProps> = ({
  status,
  onClick,
  className = ''
}) => {
  const isConnected = status === 'connected';
  const isConnecting = status === 'connecting';
  
  return (
    <Button
      onClick={onClick}
      disabled={isConnecting}
      size="lg"
      variant="outline"
      className={`
        w-full max-w-md h-14 text-lg font-semibold 
        border-2 transition-all duration-300
        ${isConnected 
          ? 'border-vpn-connected text-white bg-vpn-connected' 
          : isConnecting
          ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10'
          : 'border-vpn-disconnected text-white bg-vpn-disconnected'}
        ${className}
      `}
    >
      <Power className={`h-6 w-6 mr-2 ${isConnecting ? 'animate-spin' : ''}`} />
      {isConnected ? 'Disconnect' : isConnecting ? 'Connecting...' : 'Connect'}
    </Button>
  );
};

export default VpnConnectButton;
