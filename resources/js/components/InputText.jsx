import React from 'react';

const InputText = (props) => {
    return (
    	<input type="text" id={props.id} value={props.value} onChange={props.onChange} className={ props.className ? props.className : "input-text" } placeholder={props.placeholder} required={props.required} pattern={props.pattern}/>
    );
}

export default InputText;

