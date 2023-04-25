import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const localData = useLocalStorage('Questions');

  const fetchData = async () => {
    try {
      const response = await fetch(url, { signal: abortCont.signal });

      if (!response.ok) {
        throw Error;
      }

      const data = await response.json();
      setData(data);
      localStorage.setItem('Questions', data)
      setIsPending(false);
    }
    catch (err) {
      if (!err.name === 'AbortError') {
        setError('Could not fetch data from the server');
        setIsPending(false);
      }
    }
  }

  useEffect(() => {
    if (!localData) {
      console.log('fetching...')
      const abortCont = new AbortController();

      fetchData();

      return () => abortCont.abort();
    } else if (localData) {
      console.log('taking from LS')
      setData(localData);
      setIsPending(false);
    }
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
