import React, { Component } from 'react';
import { Button, Text, View, Modal, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeSave } from '../actions/EmployeeActions'
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
                    <View style={{ height: 30, flex: .3, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff" }}>
                        <View>
                            <Text>Are you sure you want to fire {this.props.name}?</Text>

                            <View style={{flex:1}} >
                                <TouchableHighlight onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                    <Text>Yes</Text>
                                </TouchableHighlight>
                                <TouchableHighlight onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}>
                                    <Text>No</Text>
                                </TouchableHighlight>
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

export default connect(mapStateToProps, { employeeUpdate, employeSave })(EmployeeEdit);