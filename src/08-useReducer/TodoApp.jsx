import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  //   {
  //     id: new Date().getTime(),
  //     description: "Recolectar la piedra del alma",
  //     done: false,
  //   },
  //   {
  //     id: new Date().getTime() * 3,
  //     description: "Recolectar la piedra del alma",
  //     done: false,
  //   },
];

const init = () => {
  //si no hay datos en el localStorage devuelve un arreglo vacío
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //se pasa la referencia a función todoReducer, no se ejecuta directamente
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (addTodo) => {
    // console.log(addTodo);
    const action = {
      type: "[TODO] Add Todo",
      payload: addTodo,
    };
    dispatchTodo(action);
  };

  return (
    <>
      <h1>
        TodoApp: 10 <small>, Pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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
