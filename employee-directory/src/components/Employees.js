import React from 'react';
import EmployeeList from './EmployeeList'

class Employees extends React.Component {
    constructor() {
        super();
        this.state = { employees: [] };
        fetch("employees.json")
            .then(response => response.json())
            .then(json => { this.setState({ employees: json }) })
            .catch(error => console.log(error));
        fetch("rolls.json")
            .then(response => response.json())
            .then(json => { this.setState({ rolls: json }) })
            .catch(error => console.log(error));
    }

    select(employeeCode) {
        let employeeList = this.state.employees.map(function (e) {
            if (e.code === employeeCode) {
                e.selected = (!e.selected);
            }
            return e;
        });
        this.setState({ employees: employeeList });
    }
    render() {
        // {console.log(this.state.employees);}
        return <div><h2>employees..: </h2><EmployeeList people={this.state.employees} selectHandler={this.select.bind(this)} /></div>;
    }
}

export default Employees;