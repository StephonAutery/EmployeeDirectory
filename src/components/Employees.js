import React, { Component } from 'react';
import EmployeeList from './EmployeeList'
import employees from '../data/employees.json';
import roles from '../data/roles.json';

class Employees extends Component {
    state = {
        employees
    }
    roleState = {
        roles
    }

    render() {
        return (
            <div>
                <h2>employees: </h2><EmployeeList people={this.state.employees} titles={this.roleState.roles} />
                <h2>----: </h2>
                {this.roleState.roles[4].role}
                <h2>----: </h2>
            </div>
        );
    }
}

export default Employees;