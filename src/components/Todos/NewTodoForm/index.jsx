import React from "react";
import "./styles.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="wrapper">
      <div className="new-todo-form">
        <input
          type="text"
          value={inputValue}
          className="new-todo-input"
          placeholder="Enter new todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="new-todo-button">Create Todo</button>
      </div>
    </div>
  );
};

export default NewTodoForm;
