import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const todosCount = todos.length;

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    console.log(todo);

    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };
    dispatch(action);
  };
  const removeTodo = (id) => {
    console.log(id);
    dispatch({
      type: "[TODO] remove todo",
      payload: id,
    });
  };
  const updateTodo = (id) => {
    console.log(id);
    dispatch({
      type: "[TODO] update todo",
      payload: id,
    });
  };
  return { updateTodo, removeTodo, onNewTodo, todos, todosCount, pendingTodos };
};
