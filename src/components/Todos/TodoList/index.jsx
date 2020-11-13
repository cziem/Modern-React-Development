import React from "react";
import { connect } from "react-redux";
import NoData from "../../NoData";
import NewTodoForm from "../NewTodoForm";
import TodoListItem from "../TodoListItem";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompleteRequest,
} from "../../../store/thunks";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "../../../store/selectors";
import { ListWrapper } from "./styles";

const TodoList = ({
  completedTodos,
  inCompleteTodos,
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
    <ListWrapper>
      <NewTodoForm />

      <div className="list__container">
        <h3 className="list__container__titile">Pending Todos</h3>
        {!!inCompleteTodos.length ? (
          inCompleteTodos.map((todo, idx) => (
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

      <div className="list__container">
        <h3 className="list__container__titile">Completed</h3>
        {!!completedTodos.length ? (
          completedTodos.map((todo, idx) => (
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
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  inCompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onStartLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(markTodoAsCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
