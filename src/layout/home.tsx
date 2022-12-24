import React, { useState } from 'react';
import {
  StackButton,
  StackInput,
  StackInputButtonWrapper,
  StackWrapper,
  TodoSection,
  TodoWrapper,
} from './home.styled';
import { todoStore } from '../store/todoStore';
import TodoCard from '../components/TodoCard';
import { WrapperDesign } from '../components/TodoProgress/styled';
import axios from 'axios';

const HomeLayout = () => {
   /*const getTodoData = async () => {
    const todoData = await axios.get('https://waffle.gq/todo');
    // eslint-disable-next-line no-console
    console.log(todoData);
  };
  getTodoData();*/
  const getTodoData = async () => {
    try {
      return await axios.get('https://waffle.gq/todo');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const asdf = async () => {
    const todo = await getTodoData();

    if (todo) {
      // eslint-disable-next-line no-console
      console.log('asdf' + todo);
    }
  };

  asdf();


  // input 값 받기
  const [content, setContent] = useState<string | null>(null);
  //store 데이터 받아오기
  const { todos, addTodo } = todoStore();

  const addTodoHandler = () => {
    //내용이 입력되었으면 TODO 추가
    if (content) {
      addTodo(content);
      setContent('');
    } else {
      //내용이 없으면 알림
      alert('내용을 입력해주세요.');
    }
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodoHandler();
    }
  };
  return (
    <WrapperDesign>
      <StackWrapper>
        <StackInputButtonWrapper>
          {/*TODO값 입력하기*/}
          <StackInput
            placeholder={'할 일을 입력해요'}
            value={content ?? ''} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
            type={'text'}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행
          />
          {/*TODO 추가하기 input 값이 없다면 추가 안됨*/}
          <StackButton onClick={() => addTodoHandler()}>추가하기</StackButton>
        </StackInputButtonWrapper>
        <TodoSection>
          {/*TODO 데이터 뿌리기*/}
          {todos.map((todo) => (
            <TodoWrapper key={todo.id}>
              <TodoCard {...todo} />
            </TodoWrapper>
          ))}
        </TodoSection>
      </StackWrapper>
    </WrapperDesign>
  );
};

export default HomeLayout;
