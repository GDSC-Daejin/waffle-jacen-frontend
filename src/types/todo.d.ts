// todo type입니다.

export interface ITodoType {
  content: string;
  id: number;
  date: number;
  isCompleted: boolean;
}

export interface ITodoStoreType {
  todos: ITodoType[];
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, content: string) => void;
  toggleCompletedTodo: (id: number) => void;
}
export interface GetTodoType {
  success: boolean;
  data: {
    todos: [
      {
        index: number;
        title: string;
        content?: string;
        is_done: boolean;
        created_date: string;
        updated_date: string;
      },
    ];
  };
}
export interface GETTodoListType {
  paging: {
    total_pages: number;
    current_page: number;
    is_last_page: boolean;
  };
  todos: [
    {
      todo_id: string;
      title: string;
      is_done: boolean;
      created_date: string; // ISO 8061
      updated_date: string;
    },
  ];
}
export interface PostTodoType {
  title: string;
  content?: string;
}
