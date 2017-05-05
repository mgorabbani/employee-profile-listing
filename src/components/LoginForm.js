import React, { Component } from 'react';

import { TextInput, View, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import * as ACTION from '../actions'
class LoginForm extends Component {

    render() {
        return (
            <View>
                <Text>email:</Text>
                <TextInput
                    style={{ paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.props.emailChanged(text)}
                    placeholder="email@email.com"
                    value={this.props.email}

                />
                <Text>Password:</Text>
                <TextInput
                    style={{ paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.props.passChanged(text)}
                    value={this.props.pass}
                    placeholder="pass@123"
                />
                <Text>{this.props.error}</Text>
                {this.LoginButton()}
            </View>
        )
    }
    LoginButton() {
        if (this.props.loading) {
            return <ActivityIndicator
                style={{alignItems:'center'}}
                size="large"
            />
        } else {
           return <Button title="Login" onPress={this.onButtonPress.bind(this)} />
        }
    }

    onButtonPress() {
        const { email, pass } = this.props;
        this.props.userLogin({ email, pass })
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, pass, error,loading } = auth
    return { email, pass, error, loading }
}


export default connect(mapStateToProps, ACTION)(LoginForm)