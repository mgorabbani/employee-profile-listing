import React, { Component } from 'react';

import {  ListView ,View, Button} from 'react-native';
import { connect } from 'react-redux'
import { employeesFetch,employeeSignOut } from '../actions/EmployeeActions'
import _ from 'lodash';
import ListItem from './ListItem'
const a = ["a","b"]
class EmployeeList extends Component {
        
    createDataSource(employees) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });
        this.dataSource = ds.cloneWithRows(employees)
    }

    componentWillMount() {
        this.props.employeesFetch()
        this.createDataSource(this.props.employees)

    }


    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.employees)


    }
    render() {
        return (
            <View style={{justifyContent:'space-between',flex:1}} >
                 <ListView style={{flex:.9}} enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
                 <View style={{justifyContent:'flex-end',flex:.1,backgroundColor:'green',paddingBottom:10}} >
                    <Button title=" Sign Out" color="#fff" onPress={()=>this.props.employeeSignOut()}/>
                </View> 
            </View>
              
        )
    }
    renderRow(employee){
        return <ListItem employee={employee} />
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })
    const {loading} = state
    return {employees, loading}
}
export default connect(mapStateToProps, { employeesFetch,employeeSignOut })(EmployeeList)