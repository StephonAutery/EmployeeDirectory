import React from 'react';
import Role from './Role'
class RoleList extends React.Component {

    render() {
        let roles = [];
        for (let role of this.props.titles) {
            roles.push(<Role titles={role} key={role.rollNum} />);
        }
        return (
            <ul>{roles}</ul>
        );
    }
}

export default RoleList;