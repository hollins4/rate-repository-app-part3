import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  const [repositories, setRepositories] = useState([]);

  useEffect( () => {
    if (loading) return loading

    setRepositories(data);
  }, [data])
  
  if (error) return error.message

  return repositories;

};

export default useRepositories;