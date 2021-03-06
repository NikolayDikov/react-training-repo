import React from 'react'

import './UserInput.css'

const UserInput = (props) => {
    return (
        <div className='UserInput'>
            <input type='text' value={props.name} onChange={props.onChange} placeholder={props.placeholderText}/>
        </div>
    )
}

export default UserInput;