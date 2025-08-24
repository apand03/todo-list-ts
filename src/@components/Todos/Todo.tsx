// import type { MouseEventHandler } from "react";

type TodoProps = {
  id?: number;
  todoName: string;
  isCompleted?: boolean;
};

type TTodoCompleteProps = TodoProps & {
  handler: (id: number) => void;
};

const Todo = ({ id, todoName, onDeleteHandler }: TTodoCompleteProps) => {
  // const deleteHandler = (id: number | undefined) => onDelete();

  return (
    <li className="todo-list__items">
      <span className="todo-text">{todoName}</span>
      <button
        className="btn-close"
        onClick={() => {
          onDeleteHandler(id);
        }}
      >
        <FaTimes className="btn-close__icon" />
      </button>
    </li>
  );
};

export default Todo;
