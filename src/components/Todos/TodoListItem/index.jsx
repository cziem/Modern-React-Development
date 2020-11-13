import React from "react";
import "./styles.css";

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>

      <div className="btns-container">
        {todo.isCompleted ? null : (
          <button
            onClick={() => onCompletePressed(todo.id)}
            className="btn btn-complete"
          >
            Completed
          </button>
        )}

        <button
          onClick={() => onRemovePressed(todo.id)}
          className="btn btn-remove"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
