import React, { Component } from 'react';
import {ActivityIndicator} from 'react-native';

import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EmployeeEdit from './components/EmployeeEdit'



class RouterComponent extends Component {
    state = {
        loading: true,
        isLogin:false
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.setState({isLogin:true,loading:false})
            } else {
                 this.setState({isLogin:false,loading:false})
            }
        })
    }
    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator
                style={{alignItems:'center'}}
                size="large"
            />
            )
        } else 
        return (
            <Router sceneStyle={{ paddingTop: 70 }} >
                <Scene key="auth" >
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>

                <Scene key="main" initial={this.state.isLogin}>
                    <Scene
                        onRight={() => Actions.createEmployee()}
                        rightTitle="Add"
                        key="employeeList"
                        component={EmployeeList}
                        title="Employee List" />
                    <Scene key="createEmployee" component={CreateEmployee} title="Creaet Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;