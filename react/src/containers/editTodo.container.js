import {updateTodoCompleted, fetchTodo, updateTodoDescription, updateTodoResponsible, updateTodoPriority, update} from '../actions/editTodo.actions';

const editTodoContainer = {
    mapStateToProps: state => ({
        todoPriority: state.editTodo.todoPriority,
        todoDescription: state.editTodo.todoDescription,
        todoResponsible: state.editTodo.todoResponsible,
        todoCompleted: state.editTodo.todoCompleted,
        _id: state.editTodo._id,
    }),
    mapDispatchToProps: dispatch => ({
        updateTodoDescription: (event) => dispatch(updateTodoDescription(event)),
        updateTodoResponsible: (event) => dispatch(updateTodoResponsible(event)),
        updateTodoPriority: (event) => dispatch(updateTodoPriority(event)),
        updateTodoCompleted: (event) => dispatch(updateTodoCompleted(event)),
        fetchTodo: (id) => dispatch(fetchTodo(id)),
        update: (event) => dispatch(update(event)),
    })
}

export default editTodoContainer;