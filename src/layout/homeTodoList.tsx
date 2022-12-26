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
import { ITodoType, PostTodoType, UpdateTodoType } from '../types/todo';
import { getTodoList } from '../apis';
import Modal from '../components/common/Modal';
import ModalContent from '../components/common/ModalContent';

const HomeTodoList = () => {
  const { addTodo } = todoStore();

  const [todoData, setTodoData] = useState<ITodoType[]>([
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

  const setTodoList = async () => {
    const res = await getTodoList();

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
              value={todo.content ?? ''}
              type={'text'}
              onChange={(e) => {
                setTodo(() => {
                  return { ...todo, content: e.target.value };
                });
              }}
            />
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

export default HomeTodoList;
