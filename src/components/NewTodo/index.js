import propTypes from "prop-types";
import React, { useState } from "react";
import "./styles.css";

const NewTodo = ({ onNewTodo }) => {
  const [todo, setTodo] = useState("");
  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const eraseTodo = () => {
    setTodo("");
  };

  const submit = () => {
    if (!onNewTodo) return;

    onNewTodo(todo);
    eraseTodo();
  };

  const onKeyDownTodo = (event) => {
    if (event.key === "Enter") {
      submit();
    } else if (event.key === "Escape") {
      eraseTodo();
    }
  };
  return (
    <>
      <input
        className="new-todo"
        placeholder="O que precisa ser feito?"
        value={todo}
        onChange={onChangeTodo}
        onKeyDown={onKeyDownTodo}
      />
    </>
  );
};

NewTodo.propTypes = {
  onNewTodo: propTypes.func.isRequired,
};

export default NewTodo;
