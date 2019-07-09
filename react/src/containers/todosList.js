import { fetchAllTodos } from '../actions/todoList.actions'

const todosListContainer = {
  mapStateToProps: state => ({
    todoList: state.todoList.todoList
  }),
  mapDispatchToProps: dispatch => ({
    fetchAllTodos: () => dispatch(fetchAllTodos())
  })
}

export default todosListContainer
