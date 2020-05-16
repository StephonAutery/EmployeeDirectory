import React, { Component } from 'react';

class Role extends Component {
    render() {
        return( <li>
          <hr />
          <h4>
          {this.props.titles.role} | 
          {this.props.titles.salary} | 
          {this.props.titles.roleNum}</h4>
        </li>)
      }
}

export default Role;