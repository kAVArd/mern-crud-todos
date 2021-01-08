import { FETCH_ALL_TODOS, FETCH_ALL_UNIVERSITY_TODOS } from '../actions/todoList'

const initState = {
  todoList: [],
  universityTodos: [],
}

export const todoList = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return {
        ...state,
        todoList: action.payload
      }
    case FETCH_ALL_UNIVERSITY_TODOS:
      return {
        ...state,
        universityTodos: action.payload
      }
    default:
      return state
  }
}
