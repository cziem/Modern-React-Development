import React from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../../../store/thunks";
import "./styles.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleAddTodo = () => {
    const isDuplicate = todos.some((todo) => todo.text === inputValue);

    if (!isDuplicate) {
      onCreatePressed(inputValue);
      setInputValue("");
    }
  };

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
        <button onClick={handleAddTodo} className="new-todo-button">
          Create Todo
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
