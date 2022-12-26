import React, {useEffect, useState} from 'react';
import { StackWrapper, TodoSection, TodoWrapper } from './home.styled';
import {ITodoType2} from "../types/todo";
import TodoCard from "../components/TodoCard";
import {WrapperDesign} from "../components/TodoProgress/styled";
import {getTodoList, getTrashTodoList} from "../apis";

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

  const setTodoList = async () => {
    const res = await getTrashTodoList();

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
        console.log(todo)
      });
      setTodoData(tempTodoList);
      //setTodos(tempTodoList);
    }
    console.log('캬캬캬');
  };
  console.log(todoData)

  useEffect(() => {
    setTodoList();
  }, []);
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
    </WrapperDesign>
  );
};

export default TrashLayout;