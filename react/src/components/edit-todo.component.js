import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import editTodoContainer from '../containers/editTodo.container'

const EditTodo = (props) => {
  const [id] = useState(props.match.params.id)
  const fetchTodo = props.fetchTodo
  useEffect(() => {
    fetchTodo(id)
  }, [fetchTodo, id])

  return (
    <div className='container'>
      <h3 style={{ marginBottom: 20 }}>Edit Todo</h3>
      <form onSubmit={props.update}>
        <div className='form-group'>
          <label>Description:</label>
          <input
            type='text'
            className='form-control'
            onChange={props.updateTodoDescription}
            value={props.todoDescription}
          />
        </div>
        <div className='form-group'>
          <label>Responsible:</label>
          <input
            type='text'
            className='form-control'
            onChange={props.updateTodoResponsible}
            value={props.todoResponsible}
          />
        </div>
        <div className='from-group' style={{ marginBottom: 10 }}>Priority:</div>
        <div className='form-group form-check'>
          <label className='form-check-label'>
            <input
              type='radio'
              className='form-check-input'
              name='priorityOptions'
              id='priorityLow'
              value='Low'
              checked={props.todoPriority === 'Low'}
              onChange={props.updateTodoPriority} />
              Low
          </label>
        </div>
        <div className='form-group form-check'>
          <label className='form-check-label'>
            <input
              type='radio'
              className='form-check-input'
              name='priorityOptions'
              id='priorityMedium'
              value='Medium'
              checked={props.todoPriority === 'Medium'}
              onChange={props.updateTodoPriority} />
              Medium
          </label>
        </div>
        <div className='form-group form-check'>
          <label className='form-check-label'>
            <input
              type='radio'
              className='form-check-input'
              name='priorityOptions'
              id='preorityHigh'
              value='High'
              checked={props.todoPriority === 'High'}
              onChange={props.updateTodoPriority} />
              High
          </label>
        </div>
        <div className='form-group form-check'>
          <label className='form-check-label'>
            <input
              type='checkbox'
              className='form-check-input'
              name='completed'
              checked={props.todoCompleted}
              onChange={props.updateTodoCompleted}
              value={props.todoCompleted} />
              Completed
          </label>
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-secondary'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default connect(editTodoContainer.mapStateToProps, editTodoContainer.mapDispatchToProps)(EditTodo)
