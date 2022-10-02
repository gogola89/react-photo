import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "../styles/TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [taskId, setTaskId] = useState(1);

  const addTask = (event) => {
    event.preventDefault();
    setTodo([...todo, { id: taskId, text }]);
    setTaskId(taskId + 1);
    setText("");
  };

  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <div
      className="ui raised very padded text container segment"
      style={{
        marginBottom: "20px",
        background: theme.background,
        color: theme.text,
      }}
    >
      <div className="list">
        <h3 className="header">Todo List</h3>
        <div className="tasks">
          {todo.map((task) => {
            return (
              <p key={task.id} className="item">
                {task.id} &nbsp; {task.text}
              </p>
            );
          })}
        </div>
        <form className="form" onSubmit={addTask}>
          <div className="field">
            <label>Input Task</label>
            <input
              type="text"
              className="todo-input"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <button type="submit" className="ui button primary">
            Add Task
          </button>
        </form>
      </div>
      <button className="ui button primary" onClick={changeTheme}>
        Change theme
      </button>
    </div>
  );
};

export default TodoList;
