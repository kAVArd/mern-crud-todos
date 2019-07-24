import { combineReducers } from 'redux'
import { createTodo } from './createTodo'
import { todoList } from './todosList'
import { editTodo } from './editTodo'

export default combineReducers({
  createTodo: createTodo,
  todoList: todoList,
  editTodo: editTodo
})
