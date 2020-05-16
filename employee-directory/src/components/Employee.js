import React from 'react';

class Employee extends React.Component {
  render() {
    return( <li>
      <hr />
      <h4>{this.props.people.firstName} {this.props.people.lastName}</h4>
      <p>{this.props.people.title} | {this.props.people.salary}</p>
    </li>)
  }
}

export default Employee;