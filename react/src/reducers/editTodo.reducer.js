import axios from 'axios';
import {FETCH_TODO, UPDATE_TODO_COMPLETED, UPDATE_TODO_DESCRIPTION, UPDATE_TODO_PRIORITY,
    UPDATE_TODO_RESPONSIBLE} from '../actions/editTodo.actions';

const initState = {
    _id: '',
    todoDescription: '',
    todoPriority: '',
    todoResponsible: '',
    todoCompleted: false,
}

export const editTodo = (state=initState, action) => {
    switch (action.type) {
        case UPDATE_TODO_DESCRIPTION:
            return {
                ...state,
                todoDescription: action.description,
            }
        case UPDATE_TODO_RESPONSIBLE:
                return {
                    ...state,
                    todoResponsible: action.responsible,
                }
        case UPDATE_TODO_PRIORITY:
                return {
                        ...state,
                    todoPriority: action.priority,
                }
        case FETCH_TODO:
            return action.payload;
        case UPDATE_TODO_COMPLETED:

            return {
                ...state,
                todoCompleted: action.completed,
            }
        case 'update':
            const updatedTodo = {};
            for (let key in state) {
                updatedTodo[key] = state[key];
            }

            axios.post('http://localhost:4000/todos/update/' + state._id, updatedTodo)
                .then( response => {
                    console.log(response);
                });
            return state;
        
        default:
            return state;
    }
}