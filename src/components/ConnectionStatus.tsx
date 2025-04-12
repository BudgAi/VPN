
import React from 'react';
import { Loader2, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

type ConnectionStatusProps = {
  status: 'connected' | 'connecting' | 'disconnected' | 'error';
  duration?: string;
  ipAddress?: string;
};

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({
  status,
  duration = '00:00:00',
  ipAddress = '0.0.0.0'
}) => {
  const statusConfig = {
    connected: {
      icon: <CheckCircle2 className="h-5 w-5 text-vpn-connected" />,
      label: 'Connected',
      color: 'text-vpn-connected',
      bg: 'bg-vpn-connected/10'
    },
    connecting: {
      icon: <Loader2 className="h-5 w-5 text-yellow-500 animate-spin" />,
      label: 'Connecting',
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10'
    },
    disconnected: {
      icon: <XCircle className="h-5 w-5 text-vpn-disconnected" />,
      label: 'Disconnected',
      color: 'text-vpn-disconnected',
      bg: 'bg-vpn-disconnected/10'
    },
    error: {
      icon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
      label: 'Connection Error',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10'
    }
  };

  const { icon, label, color, bg } = statusConfig[status];

  return (
    <div className="w-full max-w-md space-y-3">
      <div className={`flex items-center justify-between rounded-lg p-3 ${bg}`}>
        <div className="flex items-center space-x-2">
          {icon}
          <span className={`font-medium ${color}`}>{label}</span>
        </div>
        {status === 'connected' && (
          <span className="text-sm text-muted-foreground">
            {duration}
          </span>
        )}
      </div>

      {status === 'connected' && (
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">IP Address:</span>
            <span className="text-sm font-medium">{ipAddress}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;
