import React, { useState, useCallback, useRef } from "react";
import TodoWapper from "./TodoWrapper";
import InputTodoItem from "./InputTodoItem";
import TodoItemList from "./TodoItemList";

function App() {
  const [todos, setTodos] = useState<
    Array<{
      id: React.MutableRefObject<number>;
      text: string;
      checked: boolean;
    }>
  >([]);

  const nextId = useRef(1);

  const onAdd = useCallback(
    (text: string) => {
      const todo = {
        id: nextId,
        text: text,
        checked: false,
      };

      setTodos(todos.concat(todo));
    },
    [todos]
  );

  const onRemove = useCallback(
    (id: React.MutableRefObject<number>) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id: React.MutableRefObject<number>) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoWapper>
      <InputTodoItem onAdd={onAdd} />
      <TodoItemList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoWapper>
  );
}

export default App;
