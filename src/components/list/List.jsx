import React from "react";
import Todo from "../todo/Todo";

function List({ todoList }) {
  //App.js에서 todoList를 받아와서
  console.log("여기는 리스트:", todoList);
  return (
    <div>
      {todoList.map((list) => (
        //map 함수를 사용해 todoList만큼 반복
        <Todo list={list} />
        //Todo라는 파일에 list라는 이름으로 list 값을 보내준다.
      ))}
    </div>
  );
}
export default List;
