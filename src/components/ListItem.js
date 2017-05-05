import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';

import {
    ListView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    render() {
        console.log(this.props)
        const { name } = this.props.employee;
        return (
            <TouchableOpacity onPress={()=>Actions.employeeEdit({employee:this.props.employee})}>
                <View style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 15 }} >{name}</Text>
                </View>
            </TouchableOpacity>



        )
    }

}



export default ListItem