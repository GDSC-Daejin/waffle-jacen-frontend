// todo type입니다.

export interface ITodoStoreType {
  todos: ITodoType[];
  addTodo: (todo: PostTodoType) => void;
  removeTodo: (id: string) => void;
  updateTodo: (todo: UpdateTodoType, id: string) => void;
}

export interface GetTodoListType {
  success: boolean;
  data: {
    todos: ITodoType[];
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
  deleted: boolean;
}

export interface ITodoType {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  deleted: boolean;
  createdDate: string;
  updatedDate: string;
  deletedDate: string;
}
