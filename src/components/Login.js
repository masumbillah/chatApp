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
               

              <TouchableOpacity style = {styles.registrationLink} 
              onPress={() => {
                  alert("Go to signup page");
                  Actions.signUp();
                }
              }>
                <Text> Resgistration </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                    //Checked input field and return action
                    if(!this.state.name && !this.state.password) alert("Please enter your name or password");
                    else {
                      Actions.wellcome({ userName: this.state.name, password: this.state.password });
                      this.setState({ name: '', password: '' });
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
  textAlign: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-end'
 },
 registrationLink: {
  justifyContent: 'flex-start',
  borderBottomWidth: 1,
  flexDirection: 'row',
  borderBottomColor: '#f4c842'
 }
});