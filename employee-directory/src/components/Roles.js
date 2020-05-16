import React, { Component } from 'react';
import RoleList from './RoleList'

class Roles extends Component {
    constructor() {
        super();
        this.state = { roles: [] };
        fetch("roles.json")
            .then(response => response.json())
            .then(json => { this.setState({ roles: json }) })
            .catch(error => console.log(error));
    }

    render() {
        console.log("this");
        return (
            <div>
                <h2>role: </h2><RoleList titles={this.state.roles} />
            </div>
        );
    }
}

export default Roles;