import {useEffect, useState} from 'react';

const useMatchMedia = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 767px').matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 767px');
    const handleWidth = (e) => {
      const matches = e.matches
      setIsMobile(matches);
    };

    mediaQueryList.addEventListener('change', handleWidth);

    return () => {
      mediaQueryList.removeEventListener('change', handleWidth);
    };
  });

  return {isMobile};
};

export default useMatchMedia;
