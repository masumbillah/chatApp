import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: ''
    };
  }

  render() {
    return (
      <View style = {styles.container}>
       <TextInput style = {styles.input}
            placeholder='Enter your name'
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                name: text
              });
            }}
            value={this.state.name}
          />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               autoCapitalize = "none"
               onChangeText={(text) => {
                this.setState({
                  password: text
                });
              }}
              value={this.state.password}
            />
               
            <TouchableOpacity
                 onPress={() => {
                  //Checked input field and return action
                  if(!this.state.name && !this.state.password) alert("Please enter your name or password");
                  else {
                    Actions.home({ userName: this.state.name, password: this.state.password });
                    this.setState({ name: '' });
                  }
      
                }}>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23
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
  },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
  fontSize: 20,
  marginLeft: 15,
  color: 'white',
  padding: 10,
  backgroundColor: 'blue',
  width:80,
  textAlign: 'center'
 }
});