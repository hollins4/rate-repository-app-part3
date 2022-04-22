import { useMutation } from "@apollo/client"
import { LOGIN_USER } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
    const apolloClient = useApolloClient()
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(LOGIN_USER)
    
    const signIn = async ({ username, password }) => {
        let signInResult = await mutate({ variables: { credentials: { username, password } }})
        await authStorage.setAccessToken(signInResult)
        apolloClient.resetStore()
        return signInResult
    }

    return [signIn, result];
}

export default useSignIn;
