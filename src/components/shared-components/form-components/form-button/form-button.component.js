import React from "react";
import './form-button.styles.scss';

const FormButton = ({children,...otherProps} ) =>(
    <button   {...otherProps} >{children}</button>
)

export default FormButton;
