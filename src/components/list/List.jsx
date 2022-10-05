import React from "react";
import Todo from "../todo/Todo";

function List({ todoList, setTodoList }) {
  //App.js에서 todoList를 받아와서
  // console.log("여기는 리스트:", todoList.id);
  return (
    <div>
      <h2 className="Working">Working..</h2>
      <div className="list">
        {todoList.map((prop) => (
          //map 함수를 사용해 todoList만큼 반복,
          <Todo prop={prop} todoList={todoList} setTodoList={setTodoList} />
          //Todo라는 파일에 list라는 이름으로 list 값을 보내준다.
        ))}
      </div>
      <h2 className="Done">Done..</h2>
      <div></div>
    </div>
  );
}
export default List;
