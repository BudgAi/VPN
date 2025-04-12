
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import VpnFeatures from '@/components/VpnFeatures';
import VpnFAQ from '@/components/VpnFAQ';
import VpnInstall from '@/components/VpnInstall';
import BearMascot from '@/components/BearMascot';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vpn-lighter via-background to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Make <span className="text-vpn">WhatsApp Calls</span> from Anywhere
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Secure, fast and easy-to-use VPN specially designed for 
              WhatsApp calls in restricted regions like the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-vpn hover:bg-vpn-dark text-white">
                <Link to="/app">Connect Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="#install">Install App</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-vpn rounded-full blur-3xl opacity-20"></div>
              <BearMascot status="connected" className="scale-125" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <VpnFeatures />
      
      {/* Installation Section */}
      <div id="install">
        <VpnInstall />
      </div>
      
      {/* FAQ Section */}
      <VpnFAQ />
      
      {/* Footer */}
      <footer className="mt-12 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Momma Bear VPN - Created with 💜
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
