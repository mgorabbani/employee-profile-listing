import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions'
import EmployeeForm from './EmployeeForm';

class CreateEmloyee extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate(name, phone, shift)
    }
    showButton() {
        if (this.props.loading) {
            return <ActivityIndicator
                style={{ alignItems: 'center' }}
                size="large"
            />
        } else {
            return <Button title="Create" onPress={this.onButtonPress.bind(this)} />
        }
    }
    render() {
        {console.log(this.props.employee)}
        return (
            <View>
                <Text>Create Employee</Text>
                <EmployeeForm {...this.props} />
                {this.showButton()}
                <Text>{this.props.error}</Text>
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
})(CreateEmloyee)