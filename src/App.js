
import React, { Component } from 'react';
import RoomList from './components/RoomList';
import './App.css';

import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBhtVa59rx03xYh9LuWiaaVpOy5pSz6H1U",
    authDomain: "bloc-chat-react-575f9.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-575f9.firebaseio.com",
    projectId: "bloc-chat-react-575f9",
    storageBucket: "bloc-chat-react-575f9.appspot.com",
    messagingSenderId: "385327052033"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Chat App</h1>
        <RoomList firebase= {firebase}/>
      </div>
    );
  }
}

export default App;
