import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({buttonPosisition, onClick, bText }) => {
    const classes = `bWrap ${buttonPosisition}`
    return <div className={classes} onClick={onClick}>{bText}</div>
}

Button.propTypes = {
    buttonPosisition: PropTypes.string,
    bEvent: PropTypes.func,
    bText: PropTypes.string,
};

export default Button