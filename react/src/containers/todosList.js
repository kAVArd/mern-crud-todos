import { fetchAllTodos } from '../actions/todoList'

const todosListContainer = {
  mapStateToProps: state => ({
    todoList: state.todoList.todoList
  }),
  mapDispatchToProps: dispatch => ({
    fetchAllTodos: () => dispatch(fetchAllTodos())
  })
}

export default todosListContainer
