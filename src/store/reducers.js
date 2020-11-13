import {
  COMPLETE_TODO,
  CREATE_TODO,
  REMOVE_TODO,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_IN_PROGRESS,
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }

    case COMPLETE_TODO: {
      const { todo: completedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === completedTodo.id) {
            return completedTodo;
          } else return todo;
        }),
      };
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }

    case LOAD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
};
