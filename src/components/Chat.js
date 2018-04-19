import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

class Chat extends React.Component {

    constructor(props) {
        super(props);
    
        console.log("this", this.props );

      }

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