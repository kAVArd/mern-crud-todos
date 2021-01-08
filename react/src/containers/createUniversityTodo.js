import { changeUniversityTodoDescription, changeUniversityTodoResponsible, changeUniversityTodoPriority, SUBMIT_CREATION_UNIVERSITY_TODO } from '../actions/createUniversityTodo'

const createTodoContainer = {
  mapStateToProps: state => ({
    todoPriority: state.createUniversityTodo.todoPriority,
    todoDescription: state.createUniversityTodo.todoDescription,
    todoResponsible: state.createUniversityTodo.todoResponsible
  }),
  mapDispatchToProps: dispatch => ({
    changeTodoDescription: (event) => dispatch(changeUniversityTodoDescription(event)),
    changeTodoResponsible: (event) => dispatch(changeUniversityTodoResponsible(event)),
    changeTodoPriority: (event) => dispatch(changeUniversityTodoPriority(event)),
    submit: () => dispatch({ type: SUBMIT_CREATION_UNIVERSITY_TODO })
  })
}

export default createTodoContainer
