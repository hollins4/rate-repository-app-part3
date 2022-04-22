import { View, StyleSheet, ScrollView } from 'react-native';
import { useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_LOGGED_IN_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

//import createApolloClient from '../utils/apolloClient';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from './theme';
import AppBarTab from './AppBarTab';





const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColor.primary,
    height: 100,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  tab: {
    height: 50,
    //width: 100,
    margin: 5
  }
});


const scrollStyles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 40
  }
});


const AppBar = () => {
  const [token, setToken ] = useState(null)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()


  const getToken = async () => {
    const token = await authStorage.getAccessToken();
    setToken(token)
  }
  
  useEffect( () => {
    getToken()
  }, [])

  
  console.log(token)

  const { data } = useQuery(GET_LOGGED_IN_USER)
  let authorizedUser = data ? data.me : null
  console.log(authorizedUser)

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={scrollStyles.contentContainer}>
          <View style={styles.flexContainer}>
            <Link to="/" style={styles.tab}><AppBarTab text="Repositories"/></Link>
            {!token 
            ? <Link to="/signin" style={styles.tab} onPress={() => alert('Pressed')}><AppBarTab text="Sign In" /></Link> 
            : <Link to="/signout" style={styles.tab} onPress={onSignOut}><AppBarTab text="Sign Out" /></Link>}
          </View>
      </ScrollView>
    </View>
  );


};

export default AppBar;