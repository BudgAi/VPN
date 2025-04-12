
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import BearMascot from './BearMascot';
import CountrySelector from './CountrySelector';
import ConnectionStatus from './ConnectionStatus';
import VpnConnectButton from './VpnConnectButton';

type VpnStatus = 'connected' | 'connecting' | 'disconnected';

const VpnInterface: React.FC = () => {
  const [status, setStatus] = useState<VpnStatus>('disconnected');
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [duration, setDuration] = useState('00:00:00');
  const [ipAddress, setIpAddress] = useState('');
  const [connectionStart, setConnectionStart] = useState<Date | null>(null);

  // Simulate VPN connection
  const handleToggleConnection = () => {
    if (status === 'connected') {
      // Disconnect
      setStatus('disconnected');
      setConnectionStart(null);
      toast.info('VPN Disconnected');
    } else {
      // Connect
      setStatus('connecting');
      
      // Simulate connecting process
      toast.info(`Connecting to ${getCountryName(selectedCountry)} server...`);
      
      setTimeout(() => {
        setStatus('connected');
        setConnectionStart(new Date());
        setIpAddress(generateRandomIp(selectedCountry));
        toast.success(`Connected to ${getCountryName(selectedCountry)}!`);
      }, 2000);
    }
  };

  // Update connection duration
  useEffect(() => {
    let intervalId: number;
    
    if (status === 'connected' && connectionStart) {
      intervalId = window.setInterval(() => {
        const now = new Date();
        const diff = now.getTime() - connectionStart.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setDuration(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }, 1000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [status, connectionStart]);

  // Handle country change
  const handleCountryChange = (country: string) => {
    if (status !== 'connected') {
      setSelectedCountry(country);
    } else {
      toast.warning('Please disconnect before changing location');
    }
  };

  // Helper functions
  const getCountryName = (countryCode: string) => {
    const countryMap: Record<string, string> = {
      usa: 'United States',
      germany: 'Germany',
      japan: 'Japan', 
      singapore: 'Singapore',
      uk: 'United Kingdom',
      canada: 'Canada'
    };
    return countryMap[countryCode] || countryCode;
  };

  const generateRandomIp = (country: string) => {
    const countryPrefixes: Record<string, string> = {
      usa: '104.132',
      germany: '81.169',
      japan: '103.152',
      singapore: '103.6',
      uk: '176.58',
      canada: '99.79'
    };
    
    const prefix = countryPrefixes[country] || '192.168';
    const suffix = `.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    return prefix + suffix;
  };

  return (
    <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-vpn-lighter shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-6">
          <BearMascot status={status} className="mb-2" />
          
          <ConnectionStatus
            status={status === 'disconnected' ? 'disconnected' : status === 'connecting' ? 'connecting' : 'connected'}
            duration={duration}
            ipAddress={ipAddress}
          />
          
          <CountrySelector
            selectedCountry={selectedCountry}
            onCountryChange={handleCountryChange}
            disabled={status === 'connected' || status === 'connecting'}
          />
          
          <VpnConnectButton
            status={status}
            onClick={handleToggleConnection}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default VpnInterface;
