import React, {useEffect, useState} from 'react';
import { StackWrapper, TodoSection, TodoWrapper } from './home.styled';
import {ITodoType2} from "../types/todo";
import TodoCard from "../components/TodoCard";
import {WrapperDesign} from "../components/TodoProgress/styled";
import {getTodoList, getTrashTodoList, getTrashTodoListByPage} from "../apis";
import PageBar from "../components/common/PageBar";
import Pagination from 'react-js-pagination';
import '../components/common/PageBar/styled.css';

const TrashLayout = () => {
  const [todoData, setTodoData] = useState<ITodoType2[]>([
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
  const handlePageChange = (page) => {
    setPage(page)
  }

  const getTodoListCount = async () => {
    const res = await getTrashTodoList();
    console.log(res)
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
      /*const tempTodoList: ITodoType2[] = [];
      res.data.data.todos.forEach((todo: ITodoType2) => {
        tempTodoList.push(todo);
        console.log(todo)
      });
      setTodoData(tempTodoList);*/
      setCount(res.data.data.todos.length);
      console.log(count)
      //setTodos(tempTodoList);
    }
    console.log('캬캬캬');
  };

  const setTodoList = async () => {
    console.log(page)
    const res = await getTrashTodoListByPage(page - 1);
    if (res.data.success){
      const tempTodoList: ITodoType2[] = [];
      res.data.data.todos.forEach((todo: ITodoType2) => {
        tempTodoList.push(todo);
      });
      setTodoData(tempTodoList);
    }
  }
  useEffect(() => {
    getTodoListCount();
    setTodoList();
  }, [page]);

  return (
    <WrapperDesign>
      <StackWrapper>
        <TodoSection>
          {/*TODO 데이터 뿌리기*/}
          {todoData.map((todo: ITodoType2) => (
            <TodoWrapper key={todo.id}>
              <TodoCard {...todo} setTodoList={setTodoList} isTrash={true} />
            </TodoWrapper>
          ))}
        </TodoSection>
      </StackWrapper>
      {/*<PageBar page={page} count={count} setPage={setPage} />*/}
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={count - 1}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
        className={'pagination'}
      />
    </WrapperDesign>
  );
};

export default TrashLayout;