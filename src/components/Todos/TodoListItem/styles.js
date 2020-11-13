import styled from "styled-components";

export const getBorderStyleForOldTodos = (startingDate, currentDate) =>
  startingDate < new Date(currentDate - 86400000 * 3)
    ? "2px solid #ff000061"
    : "none";

export const TodoListWrap = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ebebeb;
  width: 50%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  transition: margin-left ease-in-out 0.2s;
  border-left: ${({ complete }) => complete && "4px solid #2ebbbb"};

  &:hover {
    margin-left: 0.3rem;
  }

  .text_item {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 300;
      font-size: 95%;
      color: #383838;
    }

    small {
      color: #848484;
    }
  }

  .btns-container {
    width: 40%;
    display: flex;
    justify-content: space-around;
  }

  .btn {
    text-transform: uppercase;
    padding: 0.2rem;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #ccc;
    color: #777777;
    flex-grow: 1;
    margin: 0 0.3rem;
    outline: 0;
  }

  .btn-complete:hover {
    border: 1px solid #44ffff59;
    color: #2ebbbb;
  }

  .btn-remove:hover {
    border: 1px solid #ff00003d;
    color: #be4040;
  }

  @media screen and (max-width: 824px) {
    .todo-item-container {
      width: 90%;
    }

    .btn {
      flex-grow: 0;
      margin: 0;
    }
  }
`;

export const TodoListWrapWithWarning = styled(TodoListWrap)`
  border-bottom: ${({ createdAt }) =>
    getBorderStyleForOldTodos(new Date(createdAt), Date.now())};
`;
