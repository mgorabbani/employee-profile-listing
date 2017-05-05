/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';

import store from './store'
import firebase from 'firebase';
import Router from './Router'

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAodm2Mq42LuYCA-W_6vNJxmAkaaWtJNj8",
            authDomain: "chatapp-7f66c.firebaseapp.com",
            databaseURL: "https://chatapp-7f66c.firebaseio.com",
            projectId: "chatapp-7f66c",
            storageBucket: "chatapp-7f66c.appspot.com",
            messagingSenderId: "565127427721"
        };
        firebase.initializeApp(config);
    }
    render() {
       
        return (
            <Provider store={store}>
                <View style={styles.container}>
                <Router />
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

