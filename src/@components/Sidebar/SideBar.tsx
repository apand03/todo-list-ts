import type { SetStateAction } from "react";
import Form from "../Form/Form";

type Todo = {
  id: number;
  todoName: string;
  isCompleted?: boolean;
};

const SideBar = ({
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}) => {
  return (
    <section className="sidebar">
      <div className="sidebar__container">
        <Form setTodos={setTodos} />
        <div className="sidebar-buttons">
          <button className="btn btn-sidebar btn-logIn">Log In</button>
          <button className="btn btn-sidebar btn-signUp">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
