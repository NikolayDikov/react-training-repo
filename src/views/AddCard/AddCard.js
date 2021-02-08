import React, { useState } from 'react'
import { UserInput, Button } from "../../components"
import './AddCard.css'

const AddCard = ( props ) => {
    const [personName, setPersonName] = useState('');
    const [personAge, setPersonAge] = useState('');

    const passPersonName = (event) => {
        return setPersonName(event.target.value);
    }
    const passPersonAge = (event) => {
        return setPersonAge(event.target.value);
    }
    return (
        <div className="AddCardContainer">
            <UserInput placeholderText={props.pName} changed={(event) => passPersonName(event)}/>
            <UserInput placeholderText={props.pAge} changed={(event) => passPersonAge(event)}/>
            <Button bPos="rel" bEvent={() => props.addPersonalCard(personName, personAge)} bText="Add Cards" />
        </div>
    )
}

export default AddCard
