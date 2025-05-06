import { useState, useEffect } from 'react';

const useFetch = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFunc()
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [apiFunc]);

  return { data, loading };
};

export default useFetch;
