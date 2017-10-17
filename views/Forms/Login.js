import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Form, Item, Label, Input, Button, Icon, Title, Text, Content, Container } from 'native-base';
import * as strings from '../../Data/Strings';
import RestorePassword from '../CardDialog';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  showRestorePassword = function () {
    
  }

  render() {
    const { navigate } = this.props.navigation;    
    return (
      <RestorePassword/>
      
      /*       <Container style={styles.content}>
      <Content >
        <Form>
          <Item floatingLabel>
            <Label>{strings.Email}</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>{strings.Password}</Label>
            <Input />
          </Item>
          <Button full danger>
            <Text>{strings.Login}</Text>
          </Button>
        </Form>
        <Button transparent full
        onPress={() => navigate('SignUp')}>
        <Text>{strings.SignUp}</Text>
        </Button>
        <Button transparent full
        onPress={() => showRestorePassword() }>

          <Text>{strings.RestorePassword}</Text>
        </Button>
      </Content>      
    </Container> */
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10
    }
});
