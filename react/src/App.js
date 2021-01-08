import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CreateTodo from './components/CreateTodo'
import CreateUniversityTodo from './components/CreateUniversityTodo'
import TodosList from './components/TodosList'
import EditTodo from './components/EditTodo'
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
                  <Link to='/create_todo' className='nav-link'>Create Todo</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/create_universityTodo' className='nav-link'>Create University Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={TodosList} />
          <Route path='/edit/:id' component={EditTodo} />
          <Route path='/create_todo' component={CreateTodo} />
          <Route path='/create_universityTodo' component={CreateUniversityTodo} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
