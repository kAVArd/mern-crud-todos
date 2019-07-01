import {changeTodoDescription, changeTodoResponsible, changeTodoPriority, submit} from '../actions/createTodo.actions';

const createTodoContainer = {
    mapStateToProps: state => ({
        todoPriority: state.createTodo.todoPriority,
        todoDescription: state.createTodo.todoDescription,
        todoResponsible: state.createTodo.todoResponsible,
    }),
    mapDispatchToProps: dispatch => ({
            changeTodoDescription: (event) => dispatch(changeTodoDescription(event)),
            changeTodoResponsible: (event) => dispatch(changeTodoResponsible(event)),
            changeTodoPriority: (event) => dispatch(changeTodoPriority(event)),
            submit: () => dispatch(submit()),
    })
}

export default createTodoContainer;