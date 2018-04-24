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
      {/* User name field */}
      <Text style = {styles.label}> User name: </Text>
       <TextInput style = {styles.input}
            placeholder='Enter user name'
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({
                name: text
              });
            }}
            value={this.state.name}
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
              <TouchableOpacity style = {styles.registrationLink} 
                  onPress={() => {
                      console.log("Go to signup page");
                      //Actions.signUp();
                    }
                  }>
                <Text style = {{ textAlign: 'left', marginRight: 20}}> Resgistration </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                    //Checked input field and return action
                    if(!this.state.name && !this.state.password) console.log("Please enter your name or password");
                    else {
                      Actions.wellcome({ userName: this.state.name, password: this.state.password });
                      this.setState({ name: '', password: '' });
                    }      
                  }}>
                <Text style = {styles.submitButtonText}> Login </Text>
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
  submitButtonText:{
    fontSize: 20,
    color: 'white',
    padding: 10,
    backgroundColor: 'blue',
    width:200,
    textAlign: 'center'
  },
  actionButtonsContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  registrationLink:{
    padding: 10
  }
});