import React from 'react';

const InputPassword = (props) => {
    return (
    	<input type="password" id={props.id} value={props.value} onChange={props.onChange} className={ props.className ? props.className : "input-text" } placeholder={props.placeholder} required={props.required} pattern={props.pattern}/>
    );
}

export default InputPassword;

