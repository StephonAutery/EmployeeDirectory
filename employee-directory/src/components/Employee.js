import React from 'react';

class Employee extends React.Component {
  render() {
    let classToApply = this.props.people.tasty ? "tasty" : "";

    return <li onClick={() => this.props.selectHandler(this.props.item.code)} className={classToApply}>
      <hr />
      <h4>{this.props.people.firstName} {this.props.people.lastName}</h4>
      <p>{this.props.people.title} | {this.props.people.salary}</p>
    </li>
  }
}

export default Employee;