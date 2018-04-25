import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.greetText}> Thanks <Text style={styles.userName}> {this.props.userName} </Text> </Text>
          <Text style={styles.welcomeText}> Welcome to ChattApp </Text>
        </View>

        {/* Bottom menus */}
        <View style={styles.bottomMenusContainer}>          
              <TouchableOpacity style = {styles.menuItem} 
                onPress={() => { 
                  console.log("Profile");
                }
                }>
                 <Text> Profile </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.menuItem} 
                onPress={() => { 
                  Actions.conversations();
                }
              }> 
                <Text> Conversations </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.menuItem} 
                onPress={() => {
                   console.log("Settings");
                  }
                }>
                 <Text> Settings </Text>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetText: {
    fontSize: 18
  },
  welcomeText: {
    fontSize: 18
  },
  userName: {
    fontWeight: 'bold'
  },
  bottomMenusContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  menuItem: {
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CACACB',
    justifyContent: 'center'
  }
});