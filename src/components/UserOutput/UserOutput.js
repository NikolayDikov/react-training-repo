import React from 'react'

import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Hi my name is {props.name}!</p>
            <p>My age is: {props.age}</p>
        </div>
    )
}

export default UserOutput;