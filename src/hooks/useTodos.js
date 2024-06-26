import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const initialState = [];

  const init = () => {
    //si no hay datos en el localStorage devuelve un arreglo vacío
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

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

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  };
};
