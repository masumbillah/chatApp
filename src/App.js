import React from 'react';

import Login from './components/Login';
import Welcome from './components/Welcome';
import Home from './components/Home';
import Chat from './components/Chat';
import conversationList from './components/conversationList';
import { Router, Scene } from 'react-native-router-flux'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='login' component={Login} title='Login' />
                    <Scene key='welcome' component={Welcome} title='Welcome' />
                    <Scene key='home' component={Home} title='Home' />
                    <Scene key='chat' component={Chat} title='Chat' />
                    <Scene key='conversations' component={conversationList} title='Conversations' />
                </Scene>
            </Router>
        )
    }
}

export default App;