import React from 'react';

const InputTextArea = (props) => {
    return (
    	<textarea id={props.id} rows={props.rows} onChange={props.onChange} className={ props.className ? props.className : "input-textarea" } placeholder={props.placeholder} required={props.required} pattern={props.pattern} defaultValue={props.value}></textarea>
    );
}

export default InputTextArea;

