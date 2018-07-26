import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from '../AwesomeDemo/Source/Screens/Welcome'
import Screen2 from '../AwesomeDemo/Source/Screens/Screen2'
import { createStackNavigator } from 'react-navigation';


const navigate = createStackNavigator({
  Welcome: { screen: Welcome ,
   navigationOptions : {
     header : null
   } },
  Screen2: { screen: Screen2},
  
});


export default class App extends React.Component {
  render() {
    const Layout = navigate
    return (
      <Layout />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
