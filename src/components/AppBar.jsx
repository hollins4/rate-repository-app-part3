import { View, StyleSheet, ScrollView } from 'react-native';
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
  return (
      <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={scrollStyles.contentContainer}>
            <View style={styles.flexContainer}>
              <Link to="/" style={styles.tab}><AppBarTab text="Home" /></Link>
              <Link to="/signin" style={styles.tab}><AppBarTab text="Sign In" /></Link>
            </View>
        </ScrollView>
      </View>
  );
};
// <AppBarTab text="Repository2" />
export default AppBar;