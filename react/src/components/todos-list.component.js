import React, {useEffect} from 'react';
import todoListContainer from '../containers/todosList.container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Todo = ({todo}) => (
    <tr>
        <td className={todo.todoCompleted ? 'completed' : ''}>{todo.todoDescription}</td>
        <td className={todo.todoCompleted ? 'completed' : ''}>{todo.todoResponsible}</td>
        <td className={todo.todoCompleted ? 'completed' : ''}>{todo.todoPriority}</td>
        <td>
            <Link to={'/edit/'+todo._id} ><button type='button' className='btn btn-secondary'>Edit</button></Link>
        </td>
    </tr>
);

const TodoList = (props) => {

    const fetchAllTodos = props.fetchAllTodos;

    useEffect(() => {
        fetchAllTodos();
    }, [fetchAllTodos])

    return (
        <div className='container'>
            <h3 style={{marginBottom: 20}}>Todos list</h3>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todoList.map(todo => {
                        return (
                            <Todo key={todo._id} todo={todo} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default connect(todoListContainer.mapStateToProps, todoListContainer.mapDispatchToProps)(TodoList);