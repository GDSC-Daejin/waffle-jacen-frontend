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
import { getTodoList, getTodoListByPage, getTrashTodoList } from '../apis';
import Modal from '../components/common/Modal';
import ModalContent from '../components/common/ModalContent';
// @ts-ignore
import Pagination from 'react-js-pagination';
import '../components/common/PageBar/styled.css';

const HomeTodoList = () => {
  // @ts-ignore
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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const getTodoListCount = async () => {
    const res = await getTodoList();
    let completedCount = 0;
    if (res.data.success) {
      setCount(res.data.data.todos.length);
      localStorage.setItem('todos-count', String(res.data.data.todos.length));
      res.data.data.todos.forEach((todo: ITodoType) => {
        todo.completed && completedCount++;
      });
      localStorage.setItem('completed-todos-count', String(completedCount));
    }
  };

  const setTodoList = async () => {
    const res = await getTodoListByPage(page - 1);
    if (res.data.success) {
      const tempTodoList: ITodoType[] = [];
      res.data.data.todos.forEach((todo: ITodoType) => {
        tempTodoList.push(todo);
      });
      setTodoData(tempTodoList);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    getTodoListCount();
    setTodoList();
  }, [isModalOpen, page]);

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
            {todoData.map((todo: ITodoType) => (
              <TodoWrapper key={todo.id}>
                <TodoCard {...todo} setTodoList={setTodoList} isTrash={false} />
              </TodoWrapper>
            ))}
          </TodoSection>
        </StackWrapper>
        <Pagination
          activePage={page}
          itemsCountPerPage={7}
          totalItemsCount={count - 1}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={handlePageChange}
          className={'pagination'}
        />
      </WrapperDesign>
    </>
  );
};

export default HomeTodoList;
