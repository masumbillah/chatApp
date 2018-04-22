import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

//import { GiftedChat } from 'react-native-gifted-chat'

class Chat extends React.Component {
    render(){
        return (
            <View>
                <Text>
                    Hello {this.props.userName}
                </Text>
            </View>
        )
    }
}

Chat.defautlProps = {
    userName: 'Masum'
}

Chat.propTypes = {
    userName: PropTypes.string,
}


export default Chat;