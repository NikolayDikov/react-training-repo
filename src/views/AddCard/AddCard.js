import React, { useState } from 'react'
import { UserInput, Button } from "../../components"
import './AddCard.css'

const AddCard = ( props ) => {
    const [personName, setPersonName] = useState('');
    const [personAge, setPersonAge] = useState('');

    return (
        <div className="AddCardContainer">
            <UserInput placeholderText={props.pName} onChange={({ target: { value }}) => setPersonName(value)}/>
            <UserInput placeholderText={props.pAge} onChange={({ target: { value }}) => setPersonAge(value)}/>
            <Button buttonPosisition="rel" onClick={() => props.addPersonalCard(personName, personAge)} bText="Add Cards" />
        </div>
    )
}

export default AddCard
