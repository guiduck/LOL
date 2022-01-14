import { useState, useEffect } from 'react';
import { api } from '../services/api';

const useApi = ( url ) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    api.get(url)
        .then((res) => {
            setResponse(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setloading(false);
        });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useApi;