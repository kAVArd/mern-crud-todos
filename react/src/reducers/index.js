import { combineReducers } from 'redux';
import {createTodo} from './createTodo.reducer';
import {todoList} from './todosList.reducer';
import {editTodo} from './editTodo.reducer';

export default combineReducers({
    createTodo: createTodo,
    todoList: todoList,
    editTodo: editTodo,
});
