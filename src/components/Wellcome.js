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
      <View>
        <View style={styles.container}>
          <Text> Thanks {this.props.userName} </Text>
          <Text> Wellcome to ChattApp </Text>
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
                  console.log("Conversations");
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
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  bottomMenusContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  menuItem: {
    height: 40,
    // width: 50,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  }
});