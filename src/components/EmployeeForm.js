import React, { Component } from 'react';
import { View, Text, TextInput, Button, Picker, ActivityIndicator } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions'
import { connect } from 'react-redux';

class EmployeeForm extends Component {
    render(){
        return (
            <View>
                    <Text>Name</Text>
                    <TextInput
                        style={{ paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                        placeholder="John Doe"
                        value={this.props.name}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                    <Text>Phone</Text>
                    <TextInput
                        style={{ paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                        keyboardType="number-pad"
                        placeholder="555-333-000"
                        value={this.props.phone}
                        onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                    <Text>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </View>
        )
    }
}
const mapStateToProps = state => {
    const { name, phone, shift, loading, error } = state.employeeForm;
    return { name, phone, shift, loading, error };
}
export default connect(mapStateToProps, {
    employeeUpdate,
    employeeCreate
})(EmployeeForm)