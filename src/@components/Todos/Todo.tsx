// import type { MouseEventHandler } from "react";
import { FaTimes } from "react-icons/fa";

type TodoProps = {
  id?: number;
  todoName: string;
  isCompleted?: boolean;
};

type TTodoDeleteHandler = (id: number | undefined) => void;

const Todo = ({
  todo,
  onDeleteHandler,
}: {
  todo: TodoProps;
  onDeleteHandler: TTodoDeleteHandler;
}) => {
  // const deleteHandler = (id: number | undefined) => onDelete();

  return (
    <li className="todo-list__items">
      <span className="todo-text">{todo.todoName}</span>
      <div className="button__container">
        <button
          className="btn-close"
          onClick={() => {
            onDeleteHandler(todo.id);
          }}
        >
          <FaTimes className="btn-close__icon" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
