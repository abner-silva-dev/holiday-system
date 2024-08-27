import { useEffect, useState } from 'react';

type ScreenSize = {
  screenWidth: number;
  screenHeight: number;
};

export function useScreen(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(
    getCurrentDimension()
  );

  function getCurrentDimension(): ScreenSize {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, []);

  return screenSize;
}
