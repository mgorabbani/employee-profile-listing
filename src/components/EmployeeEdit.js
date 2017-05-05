import React, { Component } from 'react';
import { Button,Text,View } from 'react-native';
import { connect } from 'react-redux';
import {employeeUpdate} from '../actions/EmployeeActions'
import EmployeeForm from './EmployeeForm'
class EmployeeEdit extends Component {
    render(){
        return (
            <View>
                <EmployeeForm/>
                 <Button title="Save Changes" onPress={alert("fuck")} />
            </View>
        )
    }
}

export default connect(null,{employeeUpdate})(EmployeeEdit);