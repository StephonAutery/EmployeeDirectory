import React from 'react';

function Employees(props) {
    return (
        <div className="card m-3">
            <div className="content">
                <div className="m-3">
                <strong>name: </strong>{props.firstName} {props.lastName}&nbsp;|&nbsp; 
                <strong>role: </strong>{props.role}
                </div>
                <div className="m-2">
                    <button onClick={() => props.removeEmployee(props.id)} className="remove btn btn-danger">fire me</button>
                </div>
            </div>
        </div>
    );
}

export default Employees;