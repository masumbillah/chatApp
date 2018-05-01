import React from 'react';
import { StyleSheet} from 'react-native';

import Login from './components/Login';
import Registration from './components/Registration';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import conversationList from './components/conversationList';
import { Router, Scene } from 'react-native-router-flux'

class App extends React.Component {

  constructor(props) {
    super(props);

    console.log("this.props", this);
  }

    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' component={Login} title='Login' />
                    <Scene key='registration' component={Registration} title='Registration' />
                    <Scene key='welcome' component={Welcome} title='Welcome' />
                    <Scene key='contacts' component={Contacts} title='Contacts' />
                    <Scene key='profile' component={Profile} title='Profile' />
                    <Scene key='home' component={Home} title='Home' />
                    <Scene key='chat' component={Chat} title='Chat' navigationBarStyle={styles.navigationBar} />
                    <Scene key='conversations' component={conversationList} title='Conversations' />
                </Scene>
            </Router>
        )
    }
}

export default App;


const styles = StyleSheet.create({
    navigationBar: {
        // backgroundColor: '#0073DA'
    }
});