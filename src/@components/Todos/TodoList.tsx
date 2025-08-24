import type { SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";

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
  const onDeleteHandler = (id: number) => {
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
                  <li className="todo-list__items" key={todo.id}>
                    <span className="todo-text">{todo.todoName}</span>
                    <button
                      className="btn-close"
                      onClick={() => onDeleteHandler(todo.id)}
                    >
                      <FaTimes className="btn-close__icon" />
                    </button>
                  </li>
                );
              })
            : "There are no todos added"}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
