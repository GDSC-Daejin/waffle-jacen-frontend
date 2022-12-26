import React, { useEffect, useState } from 'react';
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
import { ITodoType2, PostTodoType, UpdateTodoType } from '../types/todo';
import { useNavigate } from 'react-router-dom';
import { getTodoList } from '../apis';
import styled from 'styled-components';
import Modal from "../components/common/Modal";
import ModalContent from "../components/common/ModalContent";

const HomeLayout = () => {
  const navigate = useNavigate();

  // input 값 받기
  const [content, setContent] = useState<string | null>(null);
  //store 데이터 받아오기
  const { todos, addTodo, setTodos, increaseRender, render } = todoStore();
  const [change, setChange] = useState(0);

  const [todoData, setTodoData] = useState<ITodoType2[]>([
    {
      id: '',
      title: '',
      content: '',
      completed: false,
      deleted: false,
      createdDate: '',
      updatedDate: '',
      deletedDate: '',
    },
  ]);

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
      setTodoList();
    } else {
      alert('내용을 입력해주세요.');
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodoHandler();
    }
  };

  /*  const getTodoList = async () => {
    const response = await axios.get('https://waffle.gq/todo');
    console.log(response.data);
    return response.data;
  };*/
  // eslint-disable-next-line no-console
  const setTodoList = async () => {
    const res = await getTodoList();

    /*if (res.data.success) {
      for (let i = 0; i < res.data.data.todos.length; i++) {
        todos[i] = res.data.data.todos[i];
      }
    }*/
    /* if (res.data.success) {
      res.data.data.todos.forEach((todo: ITodoType2) => {
        setTodoData(todo);
      })
    }*/

    if (res.data.success) {
      const tempTodoList: ITodoType2[] = [];
      res.data.data.todos.forEach((todo: ITodoType2) => {
        tempTodoList.push(todo);
      });
      setTodoData(tempTodoList);
      //setTodos(tempTodoList);
    }
    // eslint-disable-next-line no-console
    console.log('캬캬캬');
  };


  // eslint-disable-next-line no-console
  console.log(todoData);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    setTodoList();
  }, [isModalOpen]);

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  const Button = styled.button`
    width: 280px;
    height: 60px;
    border-radius: 12px;
    color: #fff;
    background-color: #3d6afe;
    margin: 0;
    border: none;
    font-size: 24px;
    &:active {
      opacity: 0.8;
    }
  `;

  const ModalBody = styled.div`
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    max-height: calc(100vh - 16px);
    overflow: hidden auto;
    position: relative;
    padding-block: 12px;
    padding-inline: 24px;
  `;

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalContent onClose={handleModalClose} />
      </Modal>
      <WrapperDesign>
        <StackWrapper>
          <StackInputButtonWrapper>
            {/*TODO값 입력하기*/}
            <StackInput
              placeholder={'할 일을 입력해요'}
              value={todo.content ?? ''} //content의 타입이 string과 null이므로 ?? ''로 값을 설정
              type={'text'}
              onChange={(e) => {
                setTodo(() => {
                  return { ...todo, content: e.target.value };
                });
              }}
              onKeyPress={handleOnKeyPress} //엔터를 누르면 addTodoHandler를 실행
            />
            {/*TODO 추가하기 input 값이 없다면 추가 안됨*/}
            <StackButton onClick={() => setIsModalOpen(true)}>
              추가하기
            </StackButton>
          </StackInputButtonWrapper>
          <TodoSection>
            {/*TODO 데이터 뿌리기*/}
            {todoData.map((todo: ITodoType2) => (
              <TodoWrapper key={todo.id}>
                <TodoCard {...todo} setTodoList={setTodoList} isTrash={false} />
              </TodoWrapper>
            ))}
          </TodoSection>
        </StackWrapper>
      </WrapperDesign>
    </>
  );
};

export default HomeLayout;
