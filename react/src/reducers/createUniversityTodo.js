import axios from 'axios'
import {
  CHANGE_UNIVERSITY_TODO_DESCRIPTION,
  CHANGE_UNIVERSITY_TODO_RESPONSIBLE,
  CHANGE_UNIVERSITY_TODO_PRIORITY,
  SUBMIT_CREATION_UNIVERSITY_TODO,
} from '../actions/createUniversityTodo'

const initState = {
  todoDescription: '',
  todoResponsible: '',
  todoPriority: '',
  todoCompleted: false
}

export const createUniversityTodo = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_UNIVERSITY_TODO_DESCRIPTION:
      return {
        ...state,
        todoDescription: action.description
      }
    case CHANGE_UNIVERSITY_TODO_RESPONSIBLE:
      return {
        ...state,
        todoResponsible: action.responsible
      }
    case CHANGE_UNIVERSITY_TODO_PRIORITY:
      return {
        ...state,
        todoPriority: action.priority
      }
    case SUBMIT_CREATION_UNIVERSITY_TODO:
      const newTodo = {}

      console.log(state);

      for (let key in state) newTodo[key] = state[key]

      axios.post('http://localhost:5000/universityTodos/add', newTodo)
        .then(res => {
          console.log(res)
        })
      return initState
    default:
      return state
  }
}
