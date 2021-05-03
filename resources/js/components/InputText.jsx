import React from 'react';

const InputText = (props) => {
    return (
    	<input type="text" name={props.name} value={props.value} className="input-text" placeholder={props.placeholder} />
    );
}

export default InputText;

