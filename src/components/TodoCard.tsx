import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ITodoType, ITodoType2, UpdateTodoType } from '../types/todo';
import { todoStore } from '../store/todoStore';
import axios from 'axios';

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
const TodoCard: React.FC<ITodoType2> = ({
  id,
  title,
  content,
  completed,
  deleted,
  createdDate,
  updatedDate,
  deletedDate,
}) => {
  const { removeTodo, updateTodo } = todoStore();
  const [todo, setTodo] = useState<UpdateTodoType>({
    title: title,
    content: content,
    completed: completed,
  });

  const removeTodoHandler = async (id: string) => {
    await axios
      .delete(`https://waffle.gq/todo/${id}`)
      .then((res) => {
        removeTodo(id);
        // eslint-disable-next-line no-console
        console.log('삭제되었습니다.');
      })
      .catch((err) => {
        alert('삭제 실패했습니다.');
      });
  };
  const toggleCompletedTodo = async (id: string) => {
    updateTodo(todo, id);
    setTodo(() => {
      return { ...todo, completed: !todo.completed };
    });
  };

  return (
    <TodoWrapper onClick={() => toggleCompletedTodo(id)}>
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
