import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { PostTodoType } from '../../../types/todo';
import { todoStore } from '../../../store/todoStore';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Date = styled.small`
  display: block;
  color: #c9c8cc;
  font-size: ${({ theme }) => theme.fontSize.textXl};
`;

const InputTodo = styled.input`
  display: flex;
  padding: 16px 24px;
  border: none;
  width: 100%;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: transparent;
  color: #c9c8cc;
  caret-color: #c9c8cc;
  flex-wrap: nowrap;
  font-size: ${({ theme }) => theme.fontSize.textM};
`;

const Card = styled.div`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181a;
  position: relative;
`;
const SubmitButton = styled.button`
  display: flex;
  box-sizing: border-box;
  text-align: center;
  padding: 8px 20px;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  background-color: ${({ theme }) => theme.colors.tossBlue500};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
`;

interface IModalContentProps {
  addTodoHandler?: () => void;
  onClose?: () => void;
}

const ModalContent: React.FC<IModalContentProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => setIsOpen(false);

  const { addTodo } = todoStore();
  const [todo, setTodo] = useState<PostTodoType>({
    title: '',
    content: '',
  });
  const addTodoHandler = async () => {
    if (todo.content != '') {
      setTodo(() => {
        return { ...todo, content: '' };
      });
      await addTodo(todo);
      onClose && onClose();
      //setIsOpen(false);
      //setTodoList();
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  const currentDate = localStorage.getItem('currentDate');
  return (
    <Container>
      <Card>
        <Date>{currentDate}</Date>
        <InputTodo
          placeholder="할 일을 입력해주세요"
          value={todo.content ?? ''} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
          type={'text'}
          onChange={(e) => {
            setTodo(() => {
              return { ...todo, content: e.target.value };
            });
          }}
        />
        <SubmitButton onClick={() => addTodoHandler()}>추가하기</SubmitButton>
      </Card>
    </Container>
  );
};

export default ModalContent;
