import React from 'react';

function Employees(props) {
    return (
        <div className="card">

            <div className="content">
                <ul>
                    <li>
                        <strong>name: </strong>{props.firstName} {props.lastName}
                    </li>
                    <li>
                        <strong>id: </strong>{props.id}
                    </li>
                    <li>
                        <strong>role number: </strong>{props.roleNum}
                    </li>
                    <li>
                        <strong>role: </strong>{props.role}
                    </li>
                    <li>
                        <strong>tasty: </strong>{props.tasty}
                    </li>
                    <button onClick={() => props.removeEmployee(props.id)} className="remove btn btn-danger">fire me</button>
                </ul>
            </div>

        </div>
    );
}

export default Employees;