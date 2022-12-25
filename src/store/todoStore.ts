import create from 'zustand';
import { ITodoStoreType } from '../types/todo';
import {persist} from "zustand/middleware";

const date = new Date();
// @ts-ignore
// @ts-ignore
// @ts-ignore
export const todoStore = create<ITodoStoreType>(
  persist((set) => ({
    //Todo 기본 데이터
    todos: [],
    //Todo 추가
    addTodo: (content: string) =>
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
      })),
    //Todo 삭제
    removeTodo: (id: string) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
    //Todo 업데이트
    updateTodo: (id: string, content: string) =>
      set((state) => {
        // const foundTodo = state.todos.find((todo) => todo.id === id);
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, content: content } : todo,
          ),
        };
      }),
    //Todo 완료 토글
    toggleCompletedTodo: (id: string) =>
      set((state) => {
        return {
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.completed } : todo,
          ),
        };
      }),
  })),
  { name: 'todos-storage' },
);
