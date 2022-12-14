import axios from "axios";
import { PostTodoType, UpdateTodoType } from '../types/todo';

export const getTodoList = async () => {
  return await axios.get(`https://waffle.gq/todo?size=100`);
};

export const getTodoListByPage = async (page: number) => {
  return await axios.get(`https://waffle.gq/todo?page=${page}&size=7`);
};

export const getTrashTodoList = async () => {
  return await axios.get(`https://waffle.gq/todo/trash?size=100`);
};

export const getTrashTodoListByPage = async (page: number) => {
  return await axios.get(`https://waffle.gq/todo/trash?page=${page}&size=8`);
};

export const addTodo = async (todo: PostTodoType) => {
  return await axios.post(`https://waffle.gq/todo`, todo);
};

export const removeTodo = async (id: string) => {
  return await axios.delete(`https://waffle.gq/todo/${id}`);
};

export const updateTodo = async (todo: UpdateTodoType, id: string) => {
  return await axios.put(`https://waffle.gq/todo/${id}`, todo);
};

export const recoverTodo = async (todo: UpdateTodoType, id: string) => {
  return await axios.put(`https://waffle.gq/todo/recover/${id}`, todo);
};
