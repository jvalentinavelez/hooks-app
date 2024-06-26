import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = {}, onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDeleteTodo={(id) => onDeleteTodo(id)}
        />
      ))}
    </ul>
  );
};
