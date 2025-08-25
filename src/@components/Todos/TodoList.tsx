import type { SetStateAction } from "react";
import Todo from "./Todo";

type Todo = {
  id: number;
  todoName: string;
  isCompleted?: boolean;
};

const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}) => {
  const onDeleteHandler = (id: number | undefined): void => {
    const todosNew = todos.filter((todo) => todo.id !== id);
    setTodos(todosNew);
  };

  return (
    <section className="section-todo">
      <div className="section__container">
        <ul className="todo-list" role="list">
          {todos.length > 0
            ? todos.map((todo: Todo) => {
                return (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    onDeleteHandler={onDeleteHandler}
                  />
                );
              })
            : "There are no todos added"}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
