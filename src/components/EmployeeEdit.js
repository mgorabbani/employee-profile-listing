import React, { Component } from 'react';
import { Button, Text, View, Modal, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeSave, employeeFire } from '../actions/EmployeeActions'
import EmployeeForm from './EmployeeForm'
import _ from 'lodash';
import Communcations from 'react-native-communications';

class EmployeeEdit extends Component {
    state = {
        modalVisible: false
    }
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }
    onButtonPress() {
        const { name, phone, shift, uid } = this.props;
        this.props.employeSave({ name, phone, shift, uid })
    }
    onTextPress() {
        let body = `Hi ${this.props.name}! Your new Schedule is on ${this.props.shift}`
        Communcations.text(this.props.phone, body)
    }
    onFirePress() {
        this.setState({ modalVisible: true })
    }
    setModalVisible(e) {
        this.setState({ modalVisible: e })
    }
    render() {
        return (
            <View>
                <EmployeeForm />
                <Button title="Save Changes" onPress={this.onButtonPress.bind(this)} />
                <Button title="Message Employee" onPress={this.onTextPress.bind(this)} />
                <Button title="Fire" onPress={this.onFirePress.bind(this)} />
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <View style={{ backgroundColor: 'white', height: 120, padding: 20, borderRadius: 15, shadowColor: '#000', shadowOpacity: .5, shadowOffset: { width: 1, height: 1 } }}>
                            <Text>Are you sure you want to fire {this.props.name}?</Text>
                            <View style={{ justifyContent: 'space-around', alignItems: 'center', flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ padding: 5, paddingHorizontal: 20, borderColor: "blue", borderWidth: 1, borderRadius: 5 }} onPress={() => {
                                    this.props.employeeFire(this.props.uid)
                                }}>
                                    <Text>Yes</Text>
                                </TouchableOpacity >
                                <TouchableOpacity
                                    style={{ padding: 5, paddingHorizontal: 20, borderColor: "blue", borderWidth: 1, borderRadius: 5 }}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible)
                                    }}>
                                    <Text>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { name, phone, shift, uid } = state.employeeForm;
    return { name, phone, shift, uid };
}

export default connect(mapStateToProps, { employeeUpdate, employeSave, employeeFire })(EmployeeEdit);