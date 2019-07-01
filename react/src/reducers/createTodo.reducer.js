import axios from 'axios';
import { CHANGE_TODO_DESCRIPTION, CHANGE_TODO_RESPONSIBLE, CHANGE_TODO_PRIORITY} from '../actions/createTodo.actions';

const initState = {
    todoDescription: '',
    todoResponsible: '',
    todoPriority: '',
    todoCompleted: false,
};

export const createTodo = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_TODO_DESCRIPTION:
            return {
                ...state,
                todoDescription: action.description,
            };
        case CHANGE_TODO_RESPONSIBLE:
            return {
                ...state,
                todoResponsible: action.responsible,
            }
        case CHANGE_TODO_PRIORITY:
            return {
                 ...state,
                todoPriority: action.priority,
            }
        case 'SUBMIT':
            const newTodo = {};

            for (let key in state) newTodo[key] = state[key];

            axios.post('http://localhost:4000/todos/add', newTodo)
                .then(res => {
                    console.log(res);
                });
                
            return initState;
        default:
            return state;
    }
}