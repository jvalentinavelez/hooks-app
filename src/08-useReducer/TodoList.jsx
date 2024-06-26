import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = {}, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDeleteTodo={(id) => onDeleteTodo(id)}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
