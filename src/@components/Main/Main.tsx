import TodoList from "../Todos/TodoList";
import SideBar from "../Sidebar/SideBar";
import Header from "../Header/Header";
import "./Main.css";
import { useState } from "react";

type Todo = {
  id: number;
  todoName: string;
  isCompleted?: boolean;
};

const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <main className="main">
      <Header todos={todos} />
      <div className="main__container">
        {/* <h2 className="bg-text-overlay">Todo App</h2> */}
        <div className="grid">
          <TodoList todos={todos} setTodos={setTodos} />
          <SideBar todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </main>
  );
};

export default Main;
