import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Form, Item, Label, Input, Button, Icon, Title, Text, Content, Container,  } from 'native-base';
import * as strings from '../../Data/Strings';
import Head from '../../views/Header';
import { StackNavigator } from 'react-navigation';


export default class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${strings.SignUpForm}`,
  });
  render() {
    return (
      <Container>
      <Content style={styles.content}>
        <Form >
        <Item fixedLabel>
            <Label>{strings.Id}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.Names}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.LastName}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.Email}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.Password}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.RepeatPassword}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.BirthDate}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.Gender}</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label>{strings.Phone}</Label>
            <Input />
          </Item>
          <Item fixedLabel last>
            <Label>{strings.Address}</Label>
            <Input />
          </Item>
          <Button full danger>
            <Text>{strings.SignUp}</Text>
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