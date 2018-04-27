import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
               content: "Hello testing1",
               gender: 'male',
               phone: '015874693'
            },
            {
               id: 1,
               name: 'Billah',
               content: "Hello testing2",
               gender: 'male',
               phone: '015874693'
            },
            {
               id: 2,
               name: 'Shati',
               content: "Hello testing2",
               gender: 'female',
               phone: '015874693'
            },
            {
               id: 3,
               name: 'Jhon',
               content: "Hello testing3",
               gender: 'male',
               phone: '015874693'
            },
            {
               id: 4,
               name: 'Mary',
               content: "Hello testing4",
               gender: 'female',
               phone: '015874693'
            },
            {
               id: 5,
               name: 'Yesmin',
               content: "Hello testing2",
               gender: 'female',
               phone: '015874693'
            },
         ]
     }
  }

// Get Default avatar url
avatarImg = (item) => {
    if(item && item.gender === 'male') return require('../imgs/male-avatar.png');
    else return require('../imgs/female-avatar.png');
 }

 //Main render 
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
                            <View style = {styles.avatarContainer}>
                                <Image style={styles.avatar} source={this.avatarImg(item)}/>
                            </View>
                        </View>
                        <View style = {styles.nameAndMessageBox}>
                            <Text style = {styles.listBoldText}> {item.name} </Text>
                            <Text style = {styles.dimText}> {item.phone} </Text>
                        </View>
                        <View style = {styles.callBox}>
                            <Image style={[styles.contactActionIcon, styles.dimIcon]} source={require('../imgs/call.png')}/>
                        </View>
                        <View style = {styles.messageBox}>
                            <TouchableOpacity 
                                onPress={() => { 
                                    Actions.chat({ contactInfo: item });
                                }}> 
                                <Image style={styles.contactActionIcon} source={require('../imgs/chat.png')}/>
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
                        Actions.profile();
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
       flex: 0.3, 
       flexDirection: 'column',
       alignItems: 'flex-start',
       marginRight: 15
   }, 
   avatar: {
       width: 35,
       height: 35
   },
   listBoldText: {
        fontWeight: 'bold'
   },
   nameAndMessageBox: { 
       flex: 2, 
       flexDirection: 'column'
   },
   callBox: {
        marginTop:5,
       flexDirection: 'column',
       alignItems: 'flex-end'
   },
   messageBox: {
       marginTop: 5,
       marginLeft: 10,
       flexDirection: 'column',
       alignItems: 'flex-end'
   },
   dimText: {
       color: '#707071'
   },
   dimIcon: {
      opacity: 0.6
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
  },
  contactActionIcon: {
      width: 25,
      height: 25,
      marginLeft: 15
  }
})
