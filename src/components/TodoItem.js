import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const TodoItem = ({ todo, del }) => {
  const delById = (id) => {
    del(id);
  };
  return (
    <div style={todoItemStyle}>
      <p>{todo.title}</p>
      <div>
        <Button text="edit" variant="success" />
        <Button
          text="delete"
          variant="danger"
          action={() => delById(todo.id)}
        />
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  del: PropTypes.func.isRequired,
};

export default TodoItem;

const todoItemStyle = {
  background: "#2da4f8",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
