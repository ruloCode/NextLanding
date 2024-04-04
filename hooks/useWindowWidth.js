import { useState, useEffect } from 'react';

const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width } = window;
    return width;
  }
  return null;
};

export default function useWindowWidth() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowWidth());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}