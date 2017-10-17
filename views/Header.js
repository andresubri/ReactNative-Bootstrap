import React, { Component } from 'react';
import { Header, Left, Body, Right, Title } from 'native-base';
import { Platform, StyleSheet } from 'react-native';

export default class Head extends Component {

  render() {
    return (
        <Header>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
    );
  }
}