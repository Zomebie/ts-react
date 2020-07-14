import React from "react";
import styled from "styled-components";

const StyledTemplate = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled.div`
  background: white;
`;

type TodoWrapperProps = {
  children: React.ReactNode;
};

const TodoWrapper = ({ children }: TodoWrapperProps) => {
  return (
    <StyledTemplate>
      <StyledTitle>일정 관리</StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledTemplate>
  );
};

export default TodoWrapper;
