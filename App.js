import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from "./src/components/LoginForm";
import Router from "./src/Router";

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: "AIzaSyByIVpI43t99yZWqID30V8VawguPrpU5hQ",
        authDomain: "manager-769c3.firebaseapp.com",
        projectId: "manager-769c3",
        storageBucket: "manager-769c3.appspot.com",
        messagingSenderId: "966111831742",
        appId: "1:966111831742:web:8ec7c0e0838da36882e0ef",
        measurementId: "G-370E3JSNGD"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app()
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
