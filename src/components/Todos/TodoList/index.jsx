import React from "react";
import NewTodoForm from "../NewTodoForm";
import TodoListItem from "../TodoListItem";
import "./styles.css";

const TodoList = ({ todos = [] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
