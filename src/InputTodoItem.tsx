import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #adb6bd;
  }
`;

type InputTodoItemProps = {
  onAdd: (text: string) => void;
};

const InputTodoItem = ({ onAdd }: InputTodoItemProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      onAdd(value);
      setValue("");
      e.preventDefault();
    },
    [onAdd, value]
  );

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <StyledButton type="submit">
        <MdAdd />
      </StyledButton>
    </StyledForm>
  );
};

export default InputTodoItem;
