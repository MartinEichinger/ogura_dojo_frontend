import { useEffect, useState } from 'react';
import { createDirectus, graphql } from '@directus/sdk';

const debug = 0;
const backendPath = process.env.REACT_APP_BACKEND_PATH!;

const useGraphQLQuery = (query: string) => {
  const [queryResult, setQueryResult] = useState<any>();

  useEffect(() => {
    const client = createDirectus(backendPath).with(graphql());

    const getResults = async () => {
      const result = await client.query(query);
      setQueryResult(result);
    };

    getResults();
    /* eslint-disable */
  }, []);

  if (debug > 0) console.log('useGraphQLQuery: ', query, queryResult, backendPath);
  return queryResult;
};

export default useGraphQLQuery;
