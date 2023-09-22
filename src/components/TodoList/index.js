import propTypes from "prop-types";
import React from "react";
import { MdDelete } from "react-icons/md";
import "./styles.css";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
            onClick={() => {
              onToggle && onToggle(todo);
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
              onRemove && onRemove(todo);
            }}
          >
            <MdDelete size={28} />
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
    }),
  ).isRequired,
  onToggle: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};

export default TodoList;
