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
    id: React.MutableRefObject<number>;
    text: string;
    checked: boolean;
  }>;
  onRemove: (id: React.MutableRefObject<number>) => void;
  onToggle: (id: React.MutableRefObject<number>) => void;
};

const TodoItemList = ({ todos, onRemove, onToggle }: TodoItemListProps) => {
  return (
    <StyledDiv>
      {todos.map((todo) => (
        <TodoItem todo={todo} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </StyledDiv>
  );
};

export default TodoItemList;
