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
import {ITodoType2, PostTodoType, UpdateTodoType} from '../types/todo';

const HomeLayout = () => {
   /*const getTodoData = async () => {
    const todoData = await axios.get('https://waffle.gq/todo');
    // eslint-disable-next-line no-console
    console.log(todoData);
  };
  getTodoData();*/
  /*const getTodoData = async () => {
    try {
      return await axios.get('https://waffle.gq/todo');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const asdf = async () => {
    const todos = await getTodoData();

    if (todos) {
      todos.data.todos.forEach((todo: any) => {
        // eslint-disable-next-line no-console
        console.log(todo.content);
        addTodo(todo.content);
      });
    }
  };*/


  /*useEffect(() => {
    fetch('https://waffle.gq/todo')
      .then((res) => res.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        data.data.todos.forEach((todo: any) => {
          // eslint-disable-next-line no-console
          console.log(todo.content);
          addTodo(todo.content);
        });
      });
  }, []);
*/
  // input 값 받기
  const [content, setContent] = useState<string | null>(null);
  //store 데이터 받아오기
  const { todos, addTodo } = todoStore();

  const [todoList, setTodoList] = useState<ITodoType2>({
    id: '',
    title: '',
    content: '',
    completed: false,
    deleted: false,
    createdDate: '',
    updatedDate: '',
    deletedDate: '',
  });

  const [todo, setTodo] = useState<PostTodoType>({
    title: '',
    content: '',
  });

  const addTodoHandler2 = async () => {
    if (todo.content != '') {
      await axios
        .post('https://waffle.gq/todo', todo)
        .then((res) => {
          alert('성공');
        })
        .catch((err) => {
          alert('실패');
          console.log(err);
        });
    } else {
      alert('내용을 입력해주세요.');
    }
  }

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

  const getTodoList = async () => {
    const response = await axios.get('https://waffle.gq/todo');
    console.log(response.data)
    return response.data;
  };
  // eslint-disable-next-line no-console
  const showTodoList = async () => {
    const res = await getTodoList()

    if (res.success) {
      for (let i=0; i<res.data.todos.length; i++) {
        todos[i] = res.data.todos[i];
      }
      res.data.todos.forEach((todo: ITodoType2) => {
        console.log(todo.content);
        setTodoList(todo);
      })
    }
    console.log('캬캬캬')
  }
  useEffect(() => {
    showTodoList();
  },[])

  console.log(todos)

  return (
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
          <StackButton onClick={() => addTodoHandler2()}>추가하기</StackButton>
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
