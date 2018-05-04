import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, TouchableOpacity,
         View, Image,
         ScrollView, KeyboardAvoidingView
         } from 'react-native';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            message: ''
        };
      }

// Get Default avatar url
sendMessageIconUrl = function(){
    if(this.state.message.trim()) return require('../imgs/message-send.png');
    else return require('../imgs/message-send-gray.png');
 };

    render(){
        return (

            <View style={styles.container}>
                {/* Message page header option */}
               <View style={styles.messageBoxHeader}> 
                    <View style = {styles.avatarContainer}>
                        <View style = {styles.avatarContainer}>
                            <Image style={styles.avatar} source={require('../imgs/male-avatar.png')}/>
                        </View>
                    </View>
                    <View style = {styles.nameAndMessageBox}>
                        <Text style = {[styles.listBoldText, styles.messageHeaderColor]}> Name John </Text>
                        <Text style = {styles.dimText}> Online </Text>
                    </View>
                    <View style = {styles.messageBox}>
                        <TouchableOpacity 
                            onPress={() => { 
                                console.log("settings");
                            }}> 
                            <Image style={styles.settingsIcon} source={require('../imgs/settings.png')}/>
                        </TouchableOpacity>
                    </View>
               </View>

                {/* Message page message list container */}
               <View style={styles.messageContainer}> 
                    <Text style={styles.blankMessage}> We didn't find any message! </Text>
                </View>

//
//     <ScrollView>
//        <KeyboardAvoidingView behavior="padding" enabled>
//

                {/* Message page footer input form container */}
               <View style={styles.messageTypingBox}> 
               <TextInput style={[styles.sendMessageInput]}
                    placeholder='Type your message..'
                    underlineColorAndroid="transparent"
                    onChangeText={(message) => {
                        this.setState({message: message});
                    }}
                    value={this.state.message}
                />
                <TouchableOpacity disabled={!this.state.message.trim()}
                            onPress={() => { 
                                console.log("Message send");
                            }}> 
                            <Image style={[styles.settingsIcon, styles.sendMessageIcon]} source={this.sendMessageIconUrl()}/>
                        </TouchableOpacity>
               </View>

//           </KeyboardAvoidingView>
//         </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    messageBoxHeader: {
        flex: 0.6,
        backgroundColor: '#e3e3e3',
        flexDirection: 'row',
        height: 60,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#424242'
    },
    messageHeaderColor: {
        //color: '#ffffff'
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
       fontSize: 18,
       fontWeight: 'bold'
    },
    settingsIcon: {
        width: 25,
        height: 25,
        marginLeft: 15,
        marginTop: 8
    },
    nameAndMessageBox: { 
        flex: 2, 
        flexDirection: 'column'
    },
    //Message container
    messageContainer: {
        flex: 7,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    blankMessage: {
        flex: 1,
        fontSize: 18,
        color: '#777',
        textAlign: 'center'
    },
    //Message typing container
    messageTypingBox: {
        flex: 0.6,
        backgroundColor: '#e3e3e3',
        flexDirection: 'row',
        height: 80,
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#424242'
    },
    sendMessageInput: {
        flex: 0.95,
        flexDirection: 'column',
        marginLeft: 8
    },
    sendMessageIcon: {
        flex: 0.8,
        flexDirection: 'column',
    }
});