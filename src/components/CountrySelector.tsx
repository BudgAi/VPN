
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

type CountrySelectorProps = {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
  disabled: boolean;
};

// Sample VPN server locations
const countries = [
  { value: 'usa', label: 'United States' },
  { value: 'germany', label: 'Germany' },
  { value: 'japan', label: 'Japan' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'canada', label: 'Canada' },
];

const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountry,
  onCountryChange,
  disabled
}) => {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center space-x-2 mb-2">
        <Globe className="h-5 w-5 text-vpn" />
        <span className="text-sm font-medium">VPN Location</span>
      </div>
      <Select
        value={selectedCountry}
        onValueChange={onCountryChange}
        disabled={disabled}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountrySelector;
