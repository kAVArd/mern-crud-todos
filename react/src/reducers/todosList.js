import { FETCH_ALL_TODOS } from '../actions/todoList.actions'

const initState = {
  todoList: []
}

export const todoList = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return {
        ...state,
        todoList: action.payload
      }
    default:
      return state
  }
}
