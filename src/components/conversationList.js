import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
   state = {
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
   alertItemName = (item) => {
      console.log(item)
   }
   render() {
      return (
         <View style = {styles.container}> 
            {
               this.state.conversations.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}  style = {styles.conversationItem}
                     onPress = {() => this.alertItemName(item)}>
                     
                    <View style = {styles.conversation}>
                        <View style = {styles.avatarContainer}>
                            <Text> Avatar </Text>
                        </View>
                        <View style = {styles.nameAndMessageBox}>
                            <Text> {item.name} </Text>
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
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      paddingTop: 10
   },
   conversationItem: {
      paddingTop: 15,
      paddingBottom: 15,
      marginLeft: 15,
      marginRight: 15,
    //   alignItems: 'center',
      borderBottomWidth: 1,
      borderStyle: 'solid',
      borderColor: '#CACACB'
   },
   conversation: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center'
   },
   avatarContainer: {
       flex: 1, 
       flexDirection: 'column',
       width: 100,
       alignItems: 'flex-start',
       marginRight: 15
   },
   nameAndMessageBox: { 
       flex: 2, 
       flexDirection: 'column',
 
   },
   messageTimeBox: {
       flex: 3,
       flexDirection: 'column',
       width: 80,
       alignItems: 'flex-end'
   },
   dimText: {
       color: '#707071'
   }
})
