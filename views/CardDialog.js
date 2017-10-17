import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, StyleSheet, Image } from 'react-native';
import { Right, Left, Label, Input, Button, Icon, Body, Text, Content, Card, CardItem } from 'native-base';


export default class RestorePassword extends Component {

  state = {
    modalVisible: true,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          styles={styles.content}
          >
         <Content>
         <Card>
           <CardItem>
             <Text>Recuperar</Text>
           </CardItem>
           <CardItem cardBody>
              <Image source={{uri: 'https://i.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d--fantastic-art-bat-family.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
           <CardItem>
           <Left>
            <Button transparent light>
                <Text>Button</Text>
            </Button>
            </Left>
            <Body>
                <Button>
                    <Text>Button </Text>
                </Button>
            </Body>
            <Right>
                <Button transparent light>
                    <Text>Button</Text>
                </Button>
            </Right>
           </CardItem>
        </Card>
       </Content>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    content: {
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      }
  });
  