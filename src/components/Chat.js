import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

export default class Chat extends React.Component {
    render(){
        return (
            <View>
                <Text>
                    Contact Id: {this.props.contactInfo.id}
                    Contact Name: {this.props.contactInfo.name}
                    Contact Phone: {this.props.contactInfo.phone}
                </Text>
            </View>
        )
    }
}

// Chat.defautlProps = {
//     userName: 'Masum'
// }

// Chat.propTypes = {
//     userName: PropTypes.string,
// }