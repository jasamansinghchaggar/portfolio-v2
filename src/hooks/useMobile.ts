import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop';

const getDeviceType = (width: number): DeviceType => {
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  if (width < 1440) return 'laptop';
  return 'desktop';
};

export const useMobile = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    // Set initial device type
    setDeviceType(getDeviceType(window.innerWidth));

    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};
