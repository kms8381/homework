import React from "react";
import "./List.css";
import Todo from "../todo/Todo";

function List({ todoList, setTodoList }) {
  const workingList = todoList.filter((item) => item.done === false);
  const doneList = todoList.filter((item) => item.done === true);

  return (
    <div className="list_bottle">
      <h2 className="Working">Working..</h2>
      <div className="list">
        {workingList.map((todo) => (
          <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} />
        ))}
      </div>
      <div className="list_bottle">
        <h2 className="Done">Done..</h2>
        <div className="list">
          {doneList.map((todo) => (
            <Todo todo={todo} todoList={todoList} setTodoList={setTodoList} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default List;
