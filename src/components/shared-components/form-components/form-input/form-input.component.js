import React from "react";
import './form-input.styles.scss';

const FormInput = ({handleChange, ...otherProps} ) =>(
    <input  onChange={handleChange} {...otherProps} />
)

export default FormInput;
