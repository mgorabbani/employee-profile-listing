import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EmployeeEdit from './components/EmployeeEdit'
const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop:70}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login"/>
            </Scene>

            <Scene key="main">
                <Scene 
                onRight={()=>Actions.createEmployee()}
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

export default RouterComponent;