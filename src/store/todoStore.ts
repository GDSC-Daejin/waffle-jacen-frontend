import create from 'zustand';
import {ITodoStoreType, ITodoType2, PostTodoType, UpdateTodoType} from '../types/todo';
import { devtools, persist } from 'zustand/middleware';
import { addTodo, removeTodo, updateTodo } from '../apis';

export const todoStore = create(
  devtools((set) => ({
    todos: [],
    addTodo: (todo: PostTodoType) => set(async (state) => await addTodo(todo)),

    removeTodo: (id: string) => set(async (state) => await removeTodo(id)),

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
  })),
);
