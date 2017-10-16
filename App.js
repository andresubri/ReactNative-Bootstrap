/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Container, Header, Content, Button, Form, Input } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <Header />
        <Content>
        <Form>
        <Item>
          <Input placeholder="Username" />
        </Item>
        <Item last>
          <Input placeholder="Password" />
        </Item>
      </Form>
        </Content>
      </Container>
    );
  }
}
