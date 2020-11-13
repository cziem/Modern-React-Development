import { SERVER_URL } from "../../constants";
import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
} from "../actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch(`${SERVER_URL}/todos`);
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
