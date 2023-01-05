import React, { useState } from 'react';
import { PostTodoType } from '../../../types/todo';
import { todoStore } from '../../../store/todoStore';
import { Card, Container, Date, InputTodo, SubmitButton } from './styled';

interface IModalContentProps {
  onClose?: () => void;
}

const ModalContent: React.FC<IModalContentProps> = ({ onClose }) => {
  // @ts-ignore
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
    } else {
      alert('내용을 입력해주세요.');
    }
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodoHandler();
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
          onKeyPress={handleOnKeyPress}
        />
        <SubmitButton onClick={() => addTodoHandler()}>추가하기</SubmitButton>
      </Card>
    </Container>
  );
};

export default ModalContent;
