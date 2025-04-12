
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background/70 backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-vpn text-2xl font-bold">Momma Bear VPN</span>
        </Link>
      </div>
      <nav>
        <Button asChild variant="ghost">
          <Link to="/app">Open VPN App</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
