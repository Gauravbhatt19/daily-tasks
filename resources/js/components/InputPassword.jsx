import React from 'react';

const InputPassword = (props) => {
    return (
    	<input type="password" name={props.name} value={props.value} className="input-text" placeholder={props.placeholder} />
    );
}

export default InputPassword;

