import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const eraseTodo = () => {
    setTodo("");
  };

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: todo,
        completed: false,
      },
    ]);
    eraseTodo();
  };

  const onKeyDownTodo = (event) => {
    if (event.key === "Enter") {
      submit();
    } else if (event.key === "Escape") {
      eraseTodo();
    }
  };

  const onToggle = (todo) => {
    const newTodos = todos.map((item) => {
      return item.id === todo.id
        ? { ...item, completed: !todo.completed }
        : item;
    });

    setTodos(newTodos);
    console.log(todos);
  };

  const onRemove = (todo) => {
    const newTodos = todos.filter((item) => {
      return item.id !== todo.id;
    });

    setTodos(newTodos);
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Lista de Tarefas</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={todo}
          onChange={onChangeTodo}
          onKeyDown={onKeyDownTodo}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                onClick={() => {
                  onToggle(todo);
                }}
                role="button"
                className={`todo ${todo.completed ? "completed" : ""}`}
                aria-hidden="true"
                tabIndex={0}
              >
                {todo?.title}
              </span>
              <button
                className="remove"
                type="button"
                onClick={() => {
                  onRemove(todo);
                }}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
