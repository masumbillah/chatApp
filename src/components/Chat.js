import React from 'react';
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

export default Chat;