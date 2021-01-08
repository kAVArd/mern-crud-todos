import { combineReducers } from 'redux'
import { createTodo } from './createTodo'
import { todoList } from './todosList'
import { editTodo } from './editTodo'
import { createUniversityTodo } from './createUniversityTodo'

export default combineReducers({
  createTodo,
  todoList,
  editTodo,
  createUniversityTodo,
})
