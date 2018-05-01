import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      email: '',
      password: '',
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

  //Password validation
  passwordValidation = (password) => {
    this.setState({password:password})

    if(password.trim()) this.setState({hasPassword: true});
    else this.setState({hasPassword: false});
  }


  _submit = function(){
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
        {/* logo container */}
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../imgs/brand.png')}/>
            <Text style={styles.logoText}> ChatApp </Text>
        </View>

      {/* Email field */}
      <Text style = {[styles.label]}> Email: </Text>
       <TextInput style = {[styles.textInput, !this.state.isValidEmail ? styles.errorMessage : ""]}
            placeholder='Enter email'
            onChangeText={(email) => {
              this.emailValidation(email)
            }}
            value={this.state.email}
          />
          <Text style= {[styles.errorText, !this.state.isValidEmail ? styles.errorMessage : ""]}>Email is required or invalid! </Text>
          
          {/* Password field     */}
          <Text style = {[styles.label]}> Password: </Text>
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
                      Actions.registration();
                    }
                  }>
                <Text style = {styles.registrationLink}> Resgistration </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => {
                    //Checked input field and return action
                    if(this._submit()){
                      Actions.welcome({ email: this.state.email, password: this.state.password, fromPage: 'login' });
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