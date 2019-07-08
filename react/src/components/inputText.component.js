import React from 'react';

const InputText = (props) => {
    return (
        <div className='form-group'>
                        <label>{props.label}:</label>
                        <input 
                            type='text'
                            className='form-control'
                            value={props.value}
                            onChange={props.onChange}
                        />
        </div>
    )
}

export default InputText;