import React from "react";
import "./Todo.css";

function Todo({ prop, todoList, setTodoList }) {
  const onClickdel = () => {
    // const onClickdel = (myId)
    const arr = todoList.filter((e) => {
      return prop.id !== e.id;
      // return myId !== e.id;
    });
    setTodoList(arr);
  };

  return (
    <div className="todo-list">
      <h2 className="title">{prop.title}</h2>
      <div className="content">{prop.content}</div>
      <button className="delbutton" onClick={onClickdel}>
        {/* <button className="delbutton" onClick={onClickdel(prop)}> */}
        삭제
      </button>
      <button className="complbutton">완료</button>
    </div>
  );
}

export default Todo;
