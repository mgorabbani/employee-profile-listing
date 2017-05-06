
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Button
} from 'react-native';

const Confirm = (props) => {
    return(
       <Modal
            transparent
            animationType="slide"
            onRequestClose={() => { }}>
            <View>
                <Text>Are you sure you want to fire </Text>
            </View>
            <View>
                <button>Yes</button>
                <button>No</button>
            </View>
        </Modal>
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

export default Confirm