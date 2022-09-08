import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

  const { todos, handleRemoveTodo, todosCount, pendingTodosCount, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>TodoApp({ todosCount }) <small>Pendientes: { pendingTodosCount }</small></h1>
      <hr />    
      
      <div className="row">
        <div className="col-7">
          <TodoList todos={ todos } onDeleteTodo={ handleRemoveTodo } onToggleTodo={ handleToggleTodo } />
        </div>

        <div className="col-5">
          <TodoAdd handleNewTodo={ handleNewTodo }/>
        </div>

      </div>
    </>
  )
}
