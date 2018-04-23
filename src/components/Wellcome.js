import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Wellcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
         <Text> Thanks {this.props.userName} </Text>
         <Text> Wellcome to ChattApp </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  button: {
    fontSize: 20,
    marginLeft: 15,
    color: 'white',
    padding: 10,
    backgroundColor: 'blue',
    width:80,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  developerInfo: {
    fontSize: 14,
    marginTop: 30,
    marginLeft: 15,
  }
});