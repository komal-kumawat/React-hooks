import {useState,useEffect} from 'react';
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  };
  export default useWindowSize;
  