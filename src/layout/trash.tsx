import React, { useEffect, useState } from 'react';
import { StackWrapper, TodoSection, TodoWrapper } from './home.styled';
import TodoCard from '../components/TodoCard';
import { WrapperDesign } from '../components/TodoProgress/styled';
import { getTrashTodoList, getTrashTodoListByPage } from '../apis';
// @ts-ignore
import Pagination from 'react-js-pagination';
import '../components/common/PageBar/styled.css';
import { ITodoType } from '../types/todo';
import { TrashDesign } from './trash.styled';

const TrashLayout = () => {
  const [todoData, setTodoData] = useState<ITodoType[]>([
    {
      id: '',
      title: '',
      content: '',
      completed: false,
      deleted: true,
      createdDate: '',
      updatedDate: '',
      deletedDate: '',
    },
  ]);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const getTodoListCount = async () => {
    const res = await getTrashTodoList();
    if (res.data.success) {
      setCount(res.data.data.todos.length);
    }
  };

  const setTodoList = async () => {
    const res = await getTrashTodoListByPage(page - 1);
    if (res.data.success) {
      const tempTodoList: ITodoType[] = [];
      res.data.data.todos.forEach((todo: ITodoType) => {
        tempTodoList.push(todo);
      });
      setTodoData(tempTodoList);
    }
  };
  useEffect(() => {
    getTodoListCount();
    setTodoList();
  }, [page]);

  return (
    <TrashDesign>
      <WrapperDesign>
        <StackWrapper>
          <TodoSection>
            {/*TODO 데이터 뿌리기*/}
            {todoData.map((todo: ITodoType) => (
              <TodoWrapper key={todo.id}>
                <TodoCard {...todo} setTodoList={setTodoList} isTrash={true} />
              </TodoWrapper>
            ))}
          </TodoSection>
        </StackWrapper>
        {/*<PageBar page={page} count={count} setPage={setPage} />*/}
        <Pagination
          activePage={page}
          itemsCountPerPage={8}
          totalItemsCount={count - 1}
          pageRangeDisplayed={5}
          prevPageText={'<'}
          nextPageText={'>'}
          onChange={handlePageChange}
          className={'pagination'}
        />
      </WrapperDesign>
    </TrashDesign>
  );
};

export default TrashLayout;
