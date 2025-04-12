
import React from 'react';
import { Shield, Zap, Globe, Lock, Video, Download } from 'lucide-react';

const VpnFeatures: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-vpn" />,
      title: "Secure Connection",
      description: "End-to-end encryption keeps your data private and protected"
    },
    {
      icon: <Zap className="h-6 w-6 text-vpn" />,
      title: "Fast Servers",
      description: "Optimized for video and voice calls with minimal lag"
    },
    {
      icon: <Globe className="h-6 w-6 text-vpn" />,
      title: "Global Access",
      description: "Servers in multiple countries for reliable connections"
    },
    {
      icon: <Video className="h-6 w-6 text-vpn" />,
      title: "WhatsApp Optimized",
      description: "Specially configured for clear WhatsApp video calls"
    },
    {
      icon: <Lock className="h-6 w-6 text-vpn" />,
      title: "No Logs Policy",
      description: "We don't track or store your online activities"
    },
    {
      icon: <Download className="h-6 w-6 text-vpn" />,
      title: "Install as App",
      description: "Add to your home screen for easy access"
    }
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-12">Why Choose Momma Bear VPN?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-vpn-lighter shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-12 w-12 bg-vpn-lighter rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VpnFeatures;
