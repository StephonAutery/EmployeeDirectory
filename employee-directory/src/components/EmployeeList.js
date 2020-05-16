import React from 'react';
import Employee from './Employee'

class EmployeeList extends React.Component {
    render() {
        let employees = [];

        for (let employee of this.props.people) {
            employees.push(<Employee people={employee} selectHandler={this.props.selectHandler} />);
        }
        return <ul>{employees}</ul>
    }
}

export default EmployeeList;