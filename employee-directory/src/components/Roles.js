import React, { Component } from 'react';
import RoleList from './RoleList';
import roles from '../data/roles.json';

class Roles extends Component {
    state = {
        roles
    }

    render() {
        return (
            <div>
                <h2>role: </h2><RoleList titles={this.state.roles} />
            </div>
        );
    }
}

export default Roles;