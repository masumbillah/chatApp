import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Contacts extends Component {
   constructor(props) {
    super(props);
    
    this.state = {
        isContactPage: true,
        conversations: [
           {
              id: 0,
              name: 'Masum',
              phone: "01922483273",
           },
           {
              id: 1,
              name: 'Billah',
              phone: "01922483273",
           },
           {
              id: 2,
              name: 'Jhon',
              phone: "01922483273",
           },
           {
              id: 3,
              name: 'Mary',
              phone: "01922483273",
           }
        ]
     }
  }

   alertItemName = (item) => {
      console.log(item)
   }
   render() {
      return (
        <View style = {styles.mainContainer}>
         <View style = {styles.container}> 
            {
               this.state.conversations.map((item, index) => (
                  <View
                     key = {item.id}  style = {styles.conversationItem}
                    >
                     
                    <View style = {styles.conversation}>
                        <View style = {styles.avatarContainer}>
                            <Text> Avatar </Text>
                        </View>
                        <View style = {styles.nameAndMessageBox}>
                            <Text style = {styles.listBoldText}> {item.name} </Text>
                            <Text style = {styles.dimText}> {item.phone} </Text>
                        </View>
                        <View style = {styles.callBox}>
                            <Text style = {styles.dimText}> Call </Text>
                        </View>
                        <View style = {styles.messageBox}>

                            <TouchableOpacity 
                                onPress={() => { 
                                    console.log("contactInfo", item);
                                    Actions.chat({ contactInfo: item });
                                }}> 
                                <Text> Message </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  </View>
               ))
            }
         </View>

          {/* Bottom menus */}
            <View style={styles.bottomMenusContainer}>          
                <TouchableOpacity style = {styles.menuItem} 
                    onPress={() => { 
                    console.log("Profile");
                    }}>
                    <Text> Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.menuItem, this.state.isContactPage ? styles.activeMenu : ""]}> 
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
                    }}>
                    <Text> Settings </Text>
                </TouchableOpacity>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create ({
    mainContainer: {
        flex: 1
    },
   container: {
      paddingTop: 10
   },
   conversationItem: {
      paddingTop: 15,
      paddingBottom: 15,
      marginLeft: 15,
      marginRight: 15,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: '#CACACB'
   },
   conversation: {
    flexDirection: 'row'
   },
   avatarContainer: {
       flex: 1, 
       flexDirection: 'column',
       alignItems: 'flex-start',
       marginRight: 15
   },
   listBoldText: {
        fontWeight: 'bold'
   },
   nameAndMessageBox: { 
       flex: 2, 
       flexDirection: 'column'
   },
   callBox: {
        marginTop:10,
       flexDirection: 'column',
       alignItems: 'flex-end'
   },
   messageBox: {
       marginTop: 10,
       marginLeft: 10,
       flexDirection: 'column',
       alignItems: 'flex-end'
   },
   dimText: {
       color: '#707071'
   },
   bottomMenusContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  menuItem: {
    height: 50,
    padding: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CACACB',
    justifyContent: 'center'
  },
  activeMenu: {
    borderTopWidth: 2,
    borderTopColor: "#0073DA"
  }
})
