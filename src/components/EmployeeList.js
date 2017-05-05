import React, { Component } from 'react';

import {  ListView } from 'react-native';
import { connect } from 'react-redux'
import { employeesFetch } from '../actions/EmployeeActions'
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
               <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
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
export default connect(mapStateToProps, { employeesFetch })(EmployeeList)