
import React from 'react';
import VpnInterface from '@/components/VpnInterface';

const VpnApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vpn-lighter to-background">
      <div className="container mx-auto py-10 px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-2">Momma Bear VPN</h1>
        <p className="text-muted-foreground text-center mb-10">Safe and secure connection for WhatsApp calls</p>
        
        <VpnInterface />
        
        <p className="text-sm text-muted-foreground mt-10 max-w-md text-center">
          This app provides a secure VPN connection optimized for WhatsApp calls in the UAE and other regions with similar restrictions.
        </p>
      </div>
    </div>
  );
};

export default VpnApp;
