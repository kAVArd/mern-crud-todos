import React from 'react'

const InputRadio = (props) => {
  return (
    <div className='form-group form-check'>
      <label className='form-check-label'>
        <input
          type='radio'
          className='form-check-input'
          name={props.nameInput}
          id={props.idInput}
          value={props.valueInput}
          checked={props.todoPriority === props.valueInput}
          onChange={props.onChange}
        />{props.valueInput}</label>
    </div>
  )
}

export default InputRadio
