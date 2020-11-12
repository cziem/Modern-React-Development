import React from "react";
import "./styles.css";

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>

      <div className="btns-container">
        <button className="btn btn-complete">Mark as complete</button>
        <button className="btn btn-remove">Remove</button>
      </div>
    </div>
  );
};

export default TodoListItem;
