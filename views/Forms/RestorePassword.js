import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, StyleSheet, Image } from 'react-native';
import { Right, Left, Label, Input, Button, Form, Item, Text, Content, Card, CardItem, Container } from 'native-base';
import * as strings from '../../Data/Strings';


export default class RestorePassword extends Component {
  static navigationOptions = {
    title: `${strings.RestorePassword}`
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.content}>
        <Content >
          <Form>
            <Item>
              <Label>{strings.RestorePasswordMessage}</Label>
            </Item>
            <Item>
              <Label>{strings.Email}</Label>
              <Input />
            </Item>
            <Button full danger>
              <Text>{strings.RestorePassword}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10
  }
});
