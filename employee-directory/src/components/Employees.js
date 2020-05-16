import React, { Component } from 'react';
import EmployeeList from './EmployeeList'

class Employees extends Component {
    constructor() {
        super();
        this.state = { employees: [] };
        fetch("employees.json")
            .then(response => response.json())
            .then(json => { this.setState({ employees: json }) })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h2>employees: </h2><EmployeeList people={this.state.employees} />
            </div>
        );
    }
}

export default Employees;