import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Container, Content} from 'native-base';
import Login from './views/Forms/Login';
import SignUp from './views/Forms/SignUp';

import { StackNavigator } from 'react-navigation';


const SimpleApp = StackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp }
});

export default class App extends Component<{}> {
  render() {
    return (
      <SimpleApp/>
    );
  }
}