import React, { useEffect, useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const onNewTodo = (todo) => {
    const newItem = {
      id: new Date().getTime(),
      title: todo,
      completed: false,
    };

    // Atualize o estado com o novo item
    setTodos((prevTodos) => [...prevTodos, newItem]);

    // Salve os dados atualizados no local storage
    localStorage.setItem("todos", JSON.stringify([...todos, newItem]));
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

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Lista de Tarefas</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
};

export default App;
