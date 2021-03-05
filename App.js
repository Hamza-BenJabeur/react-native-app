import React  from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import Home from './Home.js'
import LoginScreen1 from './SignIn.js'
import LoginScreen from './SignUp.js'
import { NativeRouter ,Route,Link } from "react-router-native";

export default function App() {

  
 
  return (
    <NativeRouter>
    <View style={styles.container}>
    <View style={styles.nav}>
    <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/signUp"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>signUp</Text>
        </Link>
        <Link
          to="/signIn"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>signIn</Text>
        </Link>
        </View>
      
        <Route exact path="/" component={Home}/>
      <Route path="/signUp" component={LoginScreen}/>
      <Route path="/signIn" component={LoginScreen1}/>
    
           </View>
        
           </NativeRouter>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60
  },
});