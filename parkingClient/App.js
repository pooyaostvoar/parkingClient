import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; 
// Version can be specified in package.json

import Home from './app/components/Home'
import Login from './app/components/Login'
import regForm from './app/components/RegForm'
import FirstPage from './app/components/FirstPage'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
console.disableYellowBox = true;
//import { YellowBox } from 'react-native';
//YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

/*class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
*/
const RootStack = StackNavigator(
  {
    LoginPage: {
      screen: Login,
    },
    HomePage: {
      screen: Home,
    },
    SignUpPage: {
      screen: regForm,
    },
    FirstPage:{
      screen: FirstPage,
    }
  },
  {
    initialRouteName: 'LoginPage',
  }
);

export default class App extends React.Component {
  
  render() {
    return <RootStack />;
  }
}