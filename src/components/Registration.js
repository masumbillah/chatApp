import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: '',
      password: ''
    };
  }

  render() {
    return (
      <View style = {styles.container}>
      {/* Name field */}
      <Text style = {styles.label}> Name: </Text>
       <TextInput style = {styles.input}
            placeholder='Enter name'
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                name: text
              });
            }}
            value={this.state.name}
          />
          {/* Email field */}
          <Text style = {styles.label}> Name: </Text>
           <TextInput style = {styles.input}
                placeholder='Enter email'
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({
                    email: text
                  });
                }}
                value={this.state.email}
              />
              {/* birthDay field */}
              <Text style = {styles.label}> Birth of Date: </Text>
              <TextInput style = {styles.input}
                  placeholder='24/04/2018'
                  style={styles.textInput}
                  onChangeText={(text) => {
                    this.setState({
                      birthDay: text
                    });
                  }}
                  value={this.state.birthDay}
                />
              {/* Password field     */}
              <Text style = {styles.label}> Password: </Text>
              <TextInput style = {styles.input}
                  placeholder = "Password"
                  autoCapitalize = "none"
                  style={styles.textInput}
                  onChangeText={(text) => {
                  this.setState({
                    password: text
                  });
                }}
            value={this.state.password}
          />

          <View style = {styles.actionButtonsContainer}>
          <TouchableOpacity 
                  onPress={() => {
                      Actions.login();
                    }
                  }>
                <Text style = {styles.registrationLink}> Have a account? </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                        console.log("Registration Data")    
                  }}>
                <Text style = {styles.submitButtonText}> Registration </Text>
              </TouchableOpacity>
            </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 45,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  submitButtonText:{
    fontSize: 20,
    color: 'white',
    padding: 10,
    backgroundColor: '#0073DA',
    width:168,
    textAlign: 'center'
  },
  actionButtonsContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  registrationLink:{
    fontSize: 16,
    textAlign: 'left', 
    marginRight: 20,
    padding: 10,
    color: '#0073DA'
  }
});