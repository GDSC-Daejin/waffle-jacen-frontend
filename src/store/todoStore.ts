import create from 'zustand';
import { PostTodoType, UpdateTodoType } from '../types/todo';
import { devtools, persist } from 'zustand/middleware';
import { addTodo, recoverTodo, removeTodo, updateTodo } from '../apis';

export const todoStore = create(
  devtools((set) => ({
    todos: [],
    addTodo: (todo: PostTodoType) => set(async () => await addTodo(todo)),

    removeTodo: (id: string) => set(async () => await removeTodo(id)),

    updateTodo: (data: UpdateTodoType, id: string) =>
      set(async () => {
        const todo: UpdateTodoType = {
          title: data.title,
          content: data.content,
          completed: !data.completed,
          deleted: data.deleted,
        };
        await updateTodo(todo, id);
      }),

    recoverTodo: (data: UpdateTodoType, id: string) =>
      set(async () => {
        const todo: UpdateTodoType = {
          title: data.title,
          content: data.content,
          completed: data.completed,
          deleted: !data.deleted,
        };
        await recoverTodo(todo, id);
      }),
  })),
);
