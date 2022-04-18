import { useState, useEffect, useRef } from 'react';
import { useManager } from "./useManager";

export const useFetch = (url, pageNumber) => {

  const isMounted = useRef(true);
  const { setTotalPokemons } = useManager()
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          setTotalPokemons(data.count)
          setResponse(data.results)
          setError(null);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setResponse(null);
        setError('Error al cargar');
        setIsLoading(false);
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { response, error, isLoading }
}