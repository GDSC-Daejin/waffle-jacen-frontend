import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UpdateTodoType } from '../types/todo';
import { todoStore } from '../store/todoStore';

const TodoWrapper = styled.div`
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleBlue};
  }
`;
const TodoContent = styled.div<{ isCompleted: boolean }>`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize.textL};
  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.grey600};
    `}
`;
const TodoButton = styled.button`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize.textS};
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 999;
  &:hover {
    border-color: ${({ theme }) => theme.colors.googleGreen};
  }
  &.remove:hover {
    border-color: ${({ theme }) => theme.colors.googleRed};
  }
  &:last-child {
    margin-left: 10px;
  }
`;
const CheckboxWrapper = styled.div`
  width: 50px;
  height: 50px;
`;
const CheckInputBox = styled.input<{ isTrash: boolean }>`
  display: flex;
  ${({ isTrash }) =>
    isTrash &&
    css`
      display: none;
    `}
`;

interface Iprops {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  deleted: boolean;
  createdDate: string;
  updatedDate: string;
  deletedDate: string;
  setTodoList?: () => void;
  isTrash: boolean;
}

const TodoCard: React.FC<Iprops> = ({
  id,
  title,
  content,
  completed,
  deleted,
  createdDate,
  updatedDate,
  deletedDate,
  setTodoList,
  isTrash,
}) => {
  const { removeTodo, updateTodo } = todoStore();
  const [todo, setTodo] = useState<UpdateTodoType>({
    title: title,
    content: content,
    completed: completed,
  });

  const removeTodoHandler = async (id: string) => {
    const confirmMessage: string = isTrash
      ? '해당 항목을 영구적으로 지우시겠습니까?'
      : '휴지통으로 이동시키겠습니까?';
    const alertMessage: string = isTrash
      ? '영구적으로 삭제되었습니다.'
      : '휴지통으로 이동되었습니다.';
    if (window.confirm(confirmMessage)) {
      await removeTodo(id);
      alert(alertMessage);
      setTodoList && setTodoList();
    } else return;
  };

  const toggleCompletedTodo = async (id: string) => {
    await updateTodo(todo, id);
    setTodo(() => {
      return { ...todo, completed: !todo.completed };
    });
  };

  return (
    <TodoWrapper>
      {/*<CheckboxWrapper>
        <Checkbox />
      </CheckboxWrapper>*/}
      <CheckInputBox
        type={'checkbox'}
        checked={todo.completed}
        onChange={(e) => e.target.checked}
        onClick={() => toggleCompletedTodo(id)}
        isTrash={isTrash}
      />
      <TodoContent isCompleted={todo.completed}>{content}</TodoContent>
      <div>
        {/*<TodoButton onClick={() => updateTodo(id, content)}>
          수정하기
        </TodoButton>*/}
        <TodoButton onClick={() => removeTodoHandler(id)} className={'remove'}>
          삭제하기
        </TodoButton>
      </div>
    </TodoWrapper>
  );
};

export default TodoCard;
