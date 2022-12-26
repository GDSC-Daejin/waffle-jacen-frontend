import create from 'zustand';
import { PostTodoType, UpdateTodoType } from '../types/todo';
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
  })),
);
