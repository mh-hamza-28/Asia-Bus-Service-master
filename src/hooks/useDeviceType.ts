import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'web';

function getDevice(width: number): DeviceType {
  if (width < 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'web';
}

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>(() => getDevice(window.innerWidth));

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setDevice(getDevice(window.innerWidth));
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
}
