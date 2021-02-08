import React from 'react'
import "./UserCard.css";
import { UserInput, UserOutput } from '../../components'

const UserCard = ( props ) => {
    return(
        <div className='UserCard'>
            <UserOutput name={props.name} age={props.age}/>
            <UserInput name={props.name} changed={props.changed}/>
            <div className="DeleteB" onClick={props.deleteMe}>Delete</div>
        </div>
    )
};

export default UserCard;