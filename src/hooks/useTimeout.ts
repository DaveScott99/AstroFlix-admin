import { useEffect, useState } from 'react';

export function useTimeout(time: number) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const loadingTimer = setTimeout(() => {
        setIsLoading(false)
      }, time)
  
      return () => {
        clearTimeout(loadingTimer)
      }
    }, [])
  
    return {
        isLoading
    }

}