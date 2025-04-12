
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { AppleIcon, Smartphone, Chrome, Download } from 'lucide-react';

const VpnInstall: React.FC = () => {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Detect iOS
    const ua = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream);
    
    // Detect Android
    setIsAndroid(/Android/.test(ua));
    
    // Check if already installed
    const isInStandaloneMode = () => 
      (window.matchMedia('(display-mode: standalone)').matches) || 
      ((window as any).navigator.standalone) || 
      document.referrer.includes('android-app://');
    
    setIsInstalled(isInStandaloneMode());

    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    });

    // Clean up
    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // For browsers that don't support beforeinstallprompt
      toast({
        title: "Installation info",
        description: "Please follow the manual installation steps shown on screen",
      });
      return;
    }

    try {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        toast({
          title: "Success!",
          description: "Momma Bear VPN has been installed",
        });
        setIsInstallable(false);
      }
      setDeferredPrompt(null);
    } catch (error) {
      console.error("Installation error:", error);
      toast({
        title: "Installation failed",
        description: "Please try the manual installation steps",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Install Momma Bear VPN</h2>
        <p className="text-muted-foreground mt-2">
          Add our VPN to your device for quick and easy access
        </p>
        {isInstalled && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded-md text-green-800 dark:text-green-100">
            App is already installed in standalone mode!
          </div>
        )}
      </div>

      <Tabs defaultValue={isIOS ? "ios" : isAndroid ? "android" : "desktop"} className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
          <TabsTrigger value="ios">iOS</TabsTrigger>
          <TabsTrigger value="android">Android</TabsTrigger>
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ios">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AppleIcon className="h-5 w-5" />
                iOS Installation
              </CardTitle>
              <CardDescription>
                Install our VPN on your iPhone or iPad without using the App Store
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li>Open this website in <strong>Safari</strong> browser</li>
                <li>Tap the <strong>Share</strong> button at the bottom of the screen</li>
                <li>Scroll down and select <strong>Add to Home Screen</strong></li>
                <li>Tap <strong>Add</strong> in the top right corner</li>
                <li>Find the Momma Bear VPN icon on your home screen</li>
              </ol>
              
              <div className="mt-4 flex justify-center">
                <Button className="bg-vpn text-white hover:bg-vpn-dark">
                  <Download className="mr-2 h-4 w-4" />
                  Add to Home Screen
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="android">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Android Installation
              </CardTitle>
              <CardDescription>
                Install our VPN on your Android device without using the Play Store
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li>Open this website in <strong>Chrome</strong> browser</li>
                <li>Tap the <strong>Three dots</strong> menu in the top right</li>
                <li>Select <strong>Add to Home screen</strong> or <strong>Install app</strong> from the menu</li>
                <li>Name the app and tap <strong>Add</strong></li>
                <li>Find the Momma Bear VPN icon on your home screen</li>
              </ol>
              
              <div className="mt-4 flex justify-center">
                <Button onClick={handleInstallClick} className="bg-vpn text-white hover:bg-vpn-dark">
                  <Download className="mr-2 h-4 w-4" />
                  {isInstallable ? "Install App" : "Add to Home Screen"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="desktop">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Chrome className="h-5 w-5" />
                Desktop Installation
              </CardTitle>
              <CardDescription>
                Install our VPN on your computer for easy access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li>Open this website in <strong>Chrome</strong>, <strong>Edge</strong>, or another compatible browser</li>
                <li>Look for the <strong>Install</strong> icon in the address bar (usually on the right side)</li>
                <li>Click <strong>Install</strong> when prompted</li>
                <li>Find the Momma Bear VPN app in your applications</li>
              </ol>
              
              <div className="mt-4 flex justify-center">
                <Button onClick={handleInstallClick} className="bg-vpn text-white hover:bg-vpn-dark">
                  <Download className="mr-2 h-4 w-4" />
                  Install App
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VpnInstall;
