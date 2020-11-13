import React from "react";
import { connect } from "react-redux";
import NoData from "../../NoData";
import NewTodoForm from "../NewTodoForm";
import TodoListItem from "../TodoListItem";
import "./styles.css";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompleteRequest,
} from "../../../store/thunks";

const TodoList = ({
  todos,
  isLoading,
  onRemovePressed,
  onCompletePressed,
  onStartLoadingTodos,
}) => {
  React.useEffect(() => {
    onStartLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading data...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />

      <div className="list__container">
        {!!todos.length ? (
          todos.map((todo, idx) => (
            <TodoListItem
              key={`${todo.text}-${idx}`}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletePressed={onCompletePressed}
            />
          ))
        ) : (
          <NoData message="No todos yet, add one" />
        )}
      </div>
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = ({ todos, isLoading }) => ({
  isLoading,
  todos,
});

const mapDispatchToProps = (dispatch) => ({
  onStartLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(markTodoAsCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
