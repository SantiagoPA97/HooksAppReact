import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') ?? []);
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  

    const handleNewTodo = (todo) => {
        const action = {
        type: '[TODO] Add TODO',
        payload: todo
        }

        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        dispatch({
        type: '[TODO] Remove TODO',
        payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
        type: '[TODO] Toggle TODO',
        payload: id
        });
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(t => !t.done).length;

    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    };
}