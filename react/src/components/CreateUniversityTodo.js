import React from 'react'
import { connect } from 'react-redux'
import createUniversityTodoContainer from '../containers/createUniversityTodo'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PropTypes } from 'prop-types'
import InputText from './InputText'
import InputRadio from './InputRadio'

const CreateUniversityTodo = (props) => {
  const radioName = 'priorityOptions'

  return (
    <div className='container'>
      <h3 style={{ marginBottom: 20 }}>Create University Todo</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.submit()
      }}>
        <InputText
          label='Description'
          value={props.todoDescription}
          onChange={props.changeTodoDescription}
        />
        <InputText
          label='Responsible'
          value={props.todoResponsible}
          onChange={props.changeTodoResponsible}
        />
        <div className='from-group' style={{ marginBottom: 10 }}>Priority:</div>
        <InputRadio
          name={radioName}
          idInput='priorityLow'
          valueInput='Low'
          todoPriority={props.todoPriority}
          onChange={props.changeTodoPriority}
        />
        <InputRadio
          name={radioName}
          idInput='priorityMedium'
          valueInput='Medium'
          todoPriority={props.todoPriority}
          onChange={props.changeTodoPriority}
        />
        <InputRadio
          name={radioName}
          idInput='priorityHigh'
          valueInput='High'
          todoPriority={props.todoPriority}
          onChange={props.changeTodoPriority}
        />
        <div className='form-group'>
          <button type='submit' className='btn btn-secondary'>Create</button>
        </div>
      </form>
    </div>
  )
}

CreateUniversityTodo.propTypes = {
  changeTodoDescription: PropTypes.func.isRequired,
  changeTodoPriority: PropTypes.func.isRequired,
  changeTodoResponsible: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default connect(createUniversityTodoContainer.mapStateToProps, createUniversityTodoContainer.mapDispatchToProps)(CreateUniversityTodo)
