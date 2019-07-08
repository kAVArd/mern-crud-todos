import axios from 'axios'

export const FETCH_TODO = 'FETCH_TODO'
export const UPDATE_TODO_COMPLETED = 'UPDATE_TODO_COMPLETED'
export const UPDATE_TODO_DESCRIPTION = 'UPDATE_TODO_DESCRIPTION'
export const UPDATE_TODO_PRIORITY = 'UPDATE_TODO_PRIORITY'
export const UPDATE_TODO_RESPONSIBLE = 'UPDATE_TODO_RESPONSIBLE'

export const updateTodoCompleted = event => {
  const completed = (event.target.value === 'true')
  return { type: UPDATE_TODO_COMPLETED, completed: !completed }
}

export const fetchTodo = (id) => {
  return dispatch => {
    return axios.get('http://localhost:4000/todos/' + id)
      .then(res => {
        dispatch({ type: FETCH_TODO, payload: res.data })
      })
  }
}

export const updateTodoDescription = (event) => {
  const description = event.target.value
  return { type: UPDATE_TODO_DESCRIPTION, description }
}

export const updateTodoPriority = (event) => {
  const priority = event.target.value
  return { type: UPDATE_TODO_PRIORITY, priority }
}

export const updateTodoResponsible = (event) => {
  const responsible = event.target.value
  return { type: UPDATE_TODO_RESPONSIBLE, responsible }
}

export const update = (event) => {
  event.preventDefault()
  return { type: 'update' }
}
