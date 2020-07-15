import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const StyledDiv = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

type TodoItemListProps = {
  todos: Array<{
    id: number;
    text: string;
    checked: boolean;
  }>;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItemList = ({ todos, onRemove, onToggle }: TodoItemListProps) => {
  return (
    <StyledDiv>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </StyledDiv>
  );
};

export default TodoItemList;
