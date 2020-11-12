import React from "react";
import NewTodoForm from "../NewTodoForm";
import TodoListItem from "../TodoListItem";
import "./styles.css";

const TodoList = ({
  todos = [
    { text: "Hello World" },
    { text: "Danny Drake" },
    { text: "Johnny Grill" },
  ],
}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />

      <div className="list__container">
        {todos.map((todo) => (
          <TodoListItem todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
