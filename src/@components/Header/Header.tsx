import "./Header.css";
type Todo = {
  id: number;
  todoName: string;
  isCompleted?: boolean;
};

const Header = ({ todos }: { todos: Todo[] }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Todo App</h1>
        <p className="header__total-todos">
          Total todos: <span>{todos.length}</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
