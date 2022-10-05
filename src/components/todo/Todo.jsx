import React from "react";
import "./Todo.css";

function Todo({ todo, todoList, setTodoList }) {
  const onClickdel = () => {
    const arr = todoList.filter((i) => {
      return todo.id !== i.id;
    });
    setTodoList(arr);
  };

  const onClickEdit = () => {
    const newTodos = todoList.map((item) => {
      if (item.id === todo.id) {
        item.done = !item.done;
        return item;
      } else {
        return item;
      }
    });
    setTodoList(newTodos);
  };

  return (
    <div className="todo-list">
      <h2 className="title">{todo.title}</h2>
      <div className="content">{todo.content}</div>
      <div className="btn">
        <button className="delbutton" onClick={onClickdel}>
          {/* <button className="delbutton" onClick={onClickdel(prop)}> */}
          삭제
        </button>
        <button onClick={onClickEdit} className="complbutton">
          {todo.done === false ? "완료" : "취소"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
