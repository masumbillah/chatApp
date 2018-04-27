import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isProfilePage: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image style={styles.welcomeLogo}
            source={require('../imgs/male-avatar.png')}
          />
        
          <Text style={styles.greetText}> Mr. Masum Billah </Text>
              <TouchableOpacity
                  onPress={() => { Actions.login({isLoginPage: true});
                }}> 
                <Text style={[styles.greetText, {marginTop: 15, fontWeight: 'bold'}]}> Logout </Text>
              </TouchableOpacity>
        </View>

        {/* Bottom menus */}
        <View style={styles.bottomMenusContainer}>          
              <TouchableOpacity style = {[styles.menuItem, this.state.isProfilePage ? styles.activeMenu : ""]}>
                 <Text> Profile </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.menuItem} 
                  onPress={() => { Actions.contacts();
                }}> 
                <Text> Contacts </Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.menuItem} 
                onPress={() => { 
                  Actions.conversations();
                }}> 
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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeLogo: {
    width: 80,
    height: 80,
    marginBottom: 20
  },
  greetText: {
    fontSize: 18
  },
  welcomeText: {
    fontSize: 18
  },
  bottomMenusContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  activeMenu: {
    borderTopWidth: 2,
    borderTopColor: "#0073DA"
  },
  menuItem: {
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CACACB',
    justifyContent: 'center'
  }
});