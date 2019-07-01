import React from 'react';
import { connect } from 'react-redux';
import createTodoContainer from '../containers/createTodo.container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';


const CreateTodo = (props) => {

    return (
        <div className='container'>
            <h3 style={{marginBottom: 20,}}>Create Todo</h3>
                <form onSubmit={props.submit}>
                    <div className='form-group'>
                        <label>Description:</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            onChange={props.changeTodoDescription}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Responsible:</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            onChange={props.changeTodoResponsible} 
                        />
                    </div>
                    <div className='from-group' style={{marginBottom: 10}}>Priority:</div>
                    <div className='form-group form-check'>
                        <label className='form-check-label'>
                            <input 
                                type='radio' 
                                className='form-check-input'
                                name='priorityOptions'
                                id='priorityLow'
                                value='Low'
                                checked={props.todoPriority === 'Low'}
                                onChange={props.changeTodoPriority}
                            />Low</label>
                    </div>
                    <div className='form-group form-check'>
                        <label className='form-check-label'>
                            <input 
                                type='radio' 
                                className='form-check-input'
                                name='priorityOptions'
                                id='priorityMedium'
                                value='Medium'
                                checked={props.todoPriority === 'Medium'}
                                onChange={props.changeTodoPriority}
                            />Medium</label>
                    </div>
                    <div className='form-group form-check'>
                        <label className='form-check-label'>
                            <input 
                                type='radio' 
                                className='form-check-input'
                                name='priorityOptions'
                                id='preorityHigh'
                                value='High'
                                checked={props.todoPriority === 'High'}
                                onChange={props.changeTodoPriority}
                            />High</label>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-secondary'>Create</button>
                    </div>
                </form>
            </div>
    )
}

CreateTodo.propTypes = {
    changeTodoDescription: PropTypes.func.isRequired,
    changeTodoPriority: PropTypes.func.isRequired,
    changeTodoResponsible: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
};

export default connect(createTodoContainer.mapStateToProps, createTodoContainer.mapDispatchToProps)(CreateTodo);