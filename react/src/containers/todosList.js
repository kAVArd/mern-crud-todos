import { fetchAllTodos, fetchAllUniversityTodos } from '../actions/todoList'

const todosListContainer = {
  mapStateToProps: state => ({
    todoList: state.todoList.todoList,
    universityTodos: state.todoList.universityTodos,
  }),
  mapDispatchToProps: dispatch => ({
    fetchAllTodos: () => dispatch(fetchAllTodos()),
    fetchAllUniversityTodos: () => dispatch(fetchAllUniversityTodos()),
  })
}

export default todosListContainer
