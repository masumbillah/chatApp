import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ConversationsList extends Component {
   constructor(props) {
    super(props);
    
    this.state = {
        isConversationPage: true,
        conversations: [
           {
              id: 0,
              name: 'Masum',
              content: "Hello testing1",
           },
           {
              id: 1,
              name: 'Billah',
              content: "Hello testing2",
           },
           {
              id: 2,
              name: 'Jhon',
              content: "Hello testing3",
           },
           {
              id: 3,
              name: 'Mary',
              content: "Hello testing4",
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
                  <TouchableOpacity
                     key = {item.id}  style = {styles.conversationItem}
                     onPress = {() => this.alertItemName(item)}>
                     
                    <View style = {styles.conversation}>
                        <View style = {styles.avatarContainer}>
                        <Image style={styles.avatar}
                                source={require('../imgs/male-avatar.png')}
                            />
                        </View>
                        <View style = {styles.nameAndMessageBox}>
                            <Text style = {styles.listBoldText}> {item.name} </Text>
                            <Text> {item.content} </Text>
                        </View>
                        <View style = {styles.messageTimeBox}>
                            <Text style = {styles.dimText}>  May 10 </Text>
                            <Text style = {styles.dimText}> 03:25PM </Text>
                        </View>
                    </View>
                  </TouchableOpacity>
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
                <TouchableOpacity style = {styles.menuItem}
                    onPress={() => {
                        Actions.contacts();
                    }}> 
                    <Text> Contacts </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.menuItem, this.state.isConversationPage ? styles.activeMenu : ""]}> 
                    <Text> Conversations </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.menuItem} 
                    onPress={() => {
                        console.log("Settings", this.state.isConversationPage);
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
       flex: 0.6, 
       flexDirection: 'column',
       width: 80,
       alignItems: 'flex-start',
       marginRight: 15
   },
   avatar: {
       width: 35,
       height: 35
   },
   nameAndMessageBox: { 
       flex: 2, 
       flexDirection: 'column',
 
   },
   listBoldText: {
        fontWeight: 'bold'
   },
   messageTimeBox: {
       flex: 3,
       flexDirection: 'column',
       width: 80,
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
