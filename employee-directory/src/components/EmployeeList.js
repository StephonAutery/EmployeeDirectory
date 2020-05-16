import React from 'react';
import Employee from './Employee'
class EmployeeList extends React.Component {

    render() {
        let employees = [];
        for (let employee of this.props.people) {
            employees.push(<Employee people={employee} key={employee.id} />);
        }
        return (
            <ul>{employees} </ul>
        );
    }
}

export default EmployeeList;