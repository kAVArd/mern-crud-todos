import axios from 'axios'

export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS';
export const FETCH_ALL_UNIVERSITY_TODOS = 'FETCH_ALL_UNIVERSITY_TODOS';

export const fetchAllTodos = () => {
  return dispatch => {
    return axios.get('http://localhost:4000/todos')
      .then(response => {
        dispatch({ type: FETCH_ALL_TODOS, payload: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchAllUniversityTodos = () => {
  return dispatch => {
    return axios.get('http://localhost:5000/UniversityTodos')
      .then(response => {
        dispatch({ type: FETCH_ALL_UNIVERSITY_TODOS, payload: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
