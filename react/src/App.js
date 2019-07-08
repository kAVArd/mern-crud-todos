import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CreateTodo from './components/create-todo.component'
import TodosList from './components/todos-list.component'
import EditTodo from './components/edit-todo.component'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

function App () {
  return (
    <Provider store={store}>
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <Link to='/' className='navbar-brand'>MERN-stack Todo app</Link>
            <div className='collpase nav-collapse'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>Todos</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/create' className='nav-link'>Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create' component={CreateTodo} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
