import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: '',
      email: '',
      password: '',
      hasName: true,
      isValidEmail: true,
      hasPassword: true
    };
  }


  //Email checked and validation
  emailValidation = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email) === false) {
      //Email is Not Correct
      this.setState({isValidEmail: false});
      this.setState({email:email})
      return false;
    } else {
      //Email is Correct
      this.setState({email:email});
      this.setState({isValidEmail: true});
      return true;
    }
  }

  //Name validation
  nameValidation = (name) => {
    this.setState({name:name})

    if(name.trim()) this.setState({hasName: true});
    else this.setState({hasName: false});
  }

  //Password validation
  passwordValidation = (password) => {
    this.setState({password:password})

    if(password.trim()) this.setState({hasPassword: true});
    else this.setState({hasPassword: false});
  }

  _submit = function(){

    //Name checked and ready for submit
    if(this.state.name.trim()) this.setState({hasName: true});
    else this.setState({hasName: false});

    //Email checked and ready for submit
    if(this.state.email.trim() && this.emailValidation(this.state.email.trim())) this.setState({isValidEmail: true});
    else this.setState({isValidEmail: false});

    //Password checked and ready for submit
    if(this.state.password.trim()) this.setState({hasPassword: true});
    else this.setState({hasPassword: false});

    if(this.emailValidation(this.state.email.trim()) && this.state.password.trim()) return true;
    else return false;
  }

  render() {
    return (
      <View style = {styles.container}>
      {/* Name field */}
      <Text style = {styles.label}> Name: </Text>
       <TextInput style = {[styles.textInput, !this.state.hasName ? styles.errorMessage : ""]}
            placeholder='Enter name'
            onChangeText={(name) => {
              this.nameValidation(name);
            }}
            value={this.state.name}
          />
          <Text style= {[styles.errorText, !this.state.hasName ? styles.errorMessage : ""]}>Name is required! </Text>

          {/* Email field */}
          <Text style = {styles.label}> Email: </Text>
           <TextInput style = {[styles.textInput, !this.state.isValidEmail ? styles.errorMessage : ""]}
                placeholder='Enter email'
                onChangeText={(email) => {
                  this.emailValidation(email);
                }}
                value={this.state.email}
              />
              <Text style= {[styles.errorText, !this.state.isValidEmail ? styles.errorMessage : ""]}>Email is required or invalid! </Text>

              {/* birthDay field */}
              <Text style = {styles.label}> Birth of Date: </Text>
              <TextInput style = {styles.textInput}
                  placeholder='24/04/2018'
                  onChangeText={(text) => {
                    this.setState({
                      birthDay: text
                    });
                  }}
                  value={this.state.birthDay}
                />
                <Text style= {[styles.errorText]}>  </Text>

              {/* Password field     */}
              <Text style = {styles.label}> Password: </Text>
              <TextInput style = {[styles.textInput, !this.state.hasPassword ? styles.errorMessage : ""]}
                  placeholder = "Password"
                  autoCapitalize = "none"
                  secureTextEntry={true}
                  onChangeText={(password) => {
                    this.passwordValidation(password);
                }}
            value={this.state.password}
          />
          <Text style= {[styles.errorText, !this.state.hasPassword ? styles.errorMessage : ""]}>Password is required! </Text>

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
                    if(this._submit()){
                      Actions.welcome({ registrationData: this.state, fromPage: 'registration' });
                      this.setState({password: '', email: ''});
                    }    
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
    marginLeft: 10,
    color: '#222'
  },
  textInput: {
    height: 45,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#888',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 5,
    paddingTop: 5,
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
  },
  hasError: {
    color: 'red'
  },
  errorText: {
    fontSize: 12,
    marginLeft: 15,
    marginBottom: 5,
    opacity: 0,
    color: 'red'
  },
  errorMessage: {
    opacity: 1,
    borderColor: 'red',
  }
});