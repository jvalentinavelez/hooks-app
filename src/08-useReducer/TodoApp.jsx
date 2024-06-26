import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todos.length}{" "}
        <small>
          , Pendientes: {todos.filter((todo) => todo.done == false).length}
        </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => onToggleTodo(id)}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
