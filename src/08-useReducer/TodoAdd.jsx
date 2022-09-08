import React from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ( { handleNewTodo } ) => {

    const { description, onInputChange, onResetForm } = useForm({ description: ''});

    const onNewTodo = ( event ) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            description: description,
            done: false
        }
        handleNewTodo( newTodo );
        onResetForm();
    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr />

            <form onSubmit={ onNewTodo }>
                <input 
                    type="text" 
                    placeholder="What should be done?" 
                    className="form-control" 
                    name='description'
                    value={ description }
                    onChange={ onInputChange }
                />

                <button 
                    type="submit" 
                    className="btn btn-outline-primary mt-1" 
                    onClick={ onNewTodo }  
                >
                    Add
                </button>
            </form>
        </>
    )
}
