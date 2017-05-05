import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop:30,
        marginBottom:20,
        fontWeight:'bold'
    },
    container: {
        alignItems:'center'
    }
});

export default Header