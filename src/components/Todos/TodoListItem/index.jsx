import React from "react";
import { TodoListWrap } from "./styles";

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => {
  return (
    <TodoListWrap complete={todo.isCompleted} createdAt={todo.createdAt}>
      <section className="text_item">
        <h3>{todo.text}</h3>
        <small>created: {new Date(todo.createdAt).toLocaleDateString()}</small>
      </section>

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
    </TodoListWrap>
  );
};

export default TodoListItem;
