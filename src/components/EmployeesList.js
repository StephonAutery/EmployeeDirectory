import React from 'react';

function Employees(props) {
    return (
        <div className="card">

            <div className="content">
                <div>
                <strong>name: </strong>{props.firstName} {props.lastName}&nbsp;|&nbsp; 
                {/* <strong>id: </strong>{props.id} */}
                {/* <strong>role number: </strong>{props.roleNum} */}
                <strong>role: </strong>{props.role}
                {/* <strong>tasty: </strong>{props.tasty} */}
                </div>
                <div className="p-2">
                    <button onClick={() => props.removeEmployee(props.id)} className="remove btn btn-danger">fire me</button>
                </div>
            </div>

        </div>
    );
}

export default Employees;