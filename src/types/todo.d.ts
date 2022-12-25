// todo type입니다.

export interface ITodoType {
  content: string;
  id: number;
  date: number;
  isCompleted: boolean;
}

export interface ITodoStoreType {
  todos: ITodoType2[];
  addTodo: (content: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, content: string) => void;
  toggleCompletedTodo: (id: string) => void;
}
export interface GetTodoListType {
  success: boolean;
  data: {
    todos: ITodoType2[];
    paging: {
      total_pages: number;
      current_page: number;
      is_last_page: boolean;
    };
  };
}
export interface PostTodoType {
  title: string;
  content: string;
}
export interface UpdateTodoType {
  title: string;
  content: string;
  completed: boolean;
}

export interface ITodoType2 {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  deleted: boolean;
  createdDate: string;
  updatedDate: string;
  deletedDate: string;
}
