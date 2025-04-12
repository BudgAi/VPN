
import React from 'react';

type BearMascotProps = {
  status: 'connected' | 'connecting' | 'disconnected';
  className?: string;
};

const BearMascot: React.FC<BearMascotProps> = ({ status, className = '' }) => {
  return (
    <div className={`bear-mascot relative ${className}`}>
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`bear-shadow transition-transform duration-500 ease-in-out ${
          status === 'connected' 
            ? 'scale-110' 
            : status === 'connecting' 
            ? 'animate-bounce' 
            : ''
        }`}
      >
        {/* Bear Body */}
        <circle cx="90" cy="90" r="70" fill="#9F85FD" />
        
        {/* Bear Ears */}
        <circle cx="50" cy="45" r="18" fill="#7C5CFC" />
        <circle cx="130" cy="45" r="18" fill="#7C5CFC" />
        
        {/* Bear Face */}
        <circle cx="90" cy="90" r="55" fill="#D8CFFE" />
        
        {/* Bear Eyes */}
        <circle cx="70" cy="80" r="8" fill="#333" />
        <circle cx="110" cy="80" r="8" fill="#333" />
        
        {/* Bear Nose */}
        <ellipse cx="90" cy="100" rx="12" ry="8" fill="#7C5CFC" />
        
        {/* Bear Mouth */}
        <path
          d="M75 110 Q90 120 105 110"
          stroke="#333"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Status Indicator */}
        <circle 
          cx="90" 
          cy="140" 
          r="12" 
          fill={
            status === 'connected' 
              ? '#4CAF50' 
              : status === 'connecting' 
              ? '#FFC107' 
              : '#F44336'
          }
          className={status === 'connecting' ? 'animate-pulse-slow' : ''}
        />
      </svg>
    </div>
  );
};

export default BearMascot;
