import create from 'zustand';
import {ITodoStoreType, ITodoType2, PostTodoType, UpdateTodoType} from '../types/todo';
import { devtools, persist } from 'zustand/middleware';
import { addTodo, removeTodo, updateTodo } from '../apis';

export const todoStore = create(
  devtools((set) => ({
    render: 0,
    //Todo 기본 데이터
    todos: [],
    setTodos: (todo: ITodoType2[]) => {
      set((state) => ({ ...state, todos: todo }));
    },
    //Todo 추가
    /*addTodo: (content: string) =>
      set((state) => ({
        todos: [
          {
            id: Math.random() * 100,
            content: content,
            createdDate: date.getUTCDate(),
            completed: false,
          },
          ...state.todos,
        ],
      })),*/
    addTodo: (todo: PostTodoType) => set(async (state) => await addTodo(todo)),
    //Todo 삭제
    /*removeTodo: (id: string) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),*/
    removeTodo: (id: string) => set(async (state) => await removeTodo(id)),
    //Todo 업데이트
    /*updateTodo: (id: string, content: string) =>
      set((state) => {
        // const foundTodo = state.todos.find((todo) => todo.id === id);
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, content: content } : todo,
          ),
        };
      }),*/
    updateTodo: (data: UpdateTodoType, id: string) =>
      set(async (state) => {
        const todo: UpdateTodoType = {
          title: data.title,
          content: data.content,
          completed: !data.completed,
        };
        await updateTodo(todo, id);
      }),
    //Todo 완료 토글
    /*toggleCompletedTodo: (id: string) =>
      set((state) => {
        return {
          todos: state.todos.map((todo: ITodoType2) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        };
      }),*/
    increaseRender: () => set((state) => ({ render: state.render + 1 })),
  })),
);
