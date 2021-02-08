import React from 'react'
import './Button.css'

const Button = ( props ) => {
    const classes = `bWrap ${props.bPos}`
    return <div className={classes} onClick={props.bEvent}>{props.bText}</div>
}

export default Button