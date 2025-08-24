import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type SetStateAction,
} from "react";

type Todo = {
  id: number;
  todoName: string;
  isCompleted?: boolean;
};

const Form = ({
  setTodos,
}: {
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [indexCount, setIndexCount] = useState<number>(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIndexCount((count) => count + 1);
    if (inputValue.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: indexCount,
          todoName: inputValue,
          isCompleted: false,
        },
      ]);
    } else {
      return;
    }

    // Clearing the input field
    setInputValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <div className="todo-input__container">
          <label htmlFor="todo-input">Add a todo</label>
          <input
            type="text"
            name="todo-input"
            id="todo-input"
            className="todo-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            value={inputValue}
          />
        </div>
        <button type="submit" className="btn btn-form">
          Add to List
        </button>
      </div>
    </form>
  );
};

export default Form;
