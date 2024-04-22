import { useState, useEffect } from 'react';

const useToken = (key) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = () => {
			const storedDate = localStorage.getItem(key)
      setToken(storedDate);
    };

    fetchToken();

    const handleStorageChange = () => {
      fetchToken();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return token;
}

export default useToken;
