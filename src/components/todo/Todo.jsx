import React from "react";
import "./Todo.css";

function Todo({ list }) {
  const onClickDel = (e) => {
    //버튼을 누를 때 마다
    e.preventDefault();
    console.log(list.id);
  };

  return (
    <div className="todo-list">
      <div>{list.title}</div>
      <div>{list.content}</div>
      <button onClick={onClickDel}>삭제</button>
      <button>취소</button>
    </div>
  );
}

export default Todo;
