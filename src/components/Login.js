import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        {/* logo container */}
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../imgs/brand.png')}/>
            <Text style={styles.logoText}> ChatApp </Text>
        </View>

      {/* Email field */}
      <Text style = {styles.label}> Email: </Text>
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
          {/* Password field     */}
          <Text style = {styles.label}> Password: </Text>
          <TextInput style = {styles.input}
              placeholder = "Password"
              autoCapitalize = "none"
              secureTextEntry={true}
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
                      Actions.registration();
                    }
                  }>
                <Text style = {styles.registrationLink}> Resgistration </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                    //Checked input field and return action
                    if(!this.state.email && !this.state.password) alert("Please enter your email or password!");
                    else if(this.state.email && this.state.password){
                      Actions.welcome({ email: this.state.email, password: this.state.password });
                      this.setState({ email: '', password: '' });
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 40
  },
  logo: {
    width: 60,
    height: 60
  },
  logoText: {
    fontSize: 25,
    marginLeft: 5,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
    color: '#222'
  },
  textInput: {
    height: 45,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#888',
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
    width:190,
    textAlign: 'center'
  },
  actionButtonsContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10,
  },
  registrationLink:{
    fontSize: 16,
    textAlign: 'left', 
    marginRight: 20,
    padding: 10,
    color: '#0073DA'
  }
});