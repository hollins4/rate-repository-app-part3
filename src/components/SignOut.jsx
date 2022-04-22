import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from "react-router-dom";

const SignOut = () => {
    
    const apolloClient = useApolloClient()
    const authStorage = useAuthStorage();
    let navigate = useNavigate();

    authStorage.removeAccessToken()
    apolloClient.resetStore();
    navigate('./');
    return null
    
}

export default SignOut