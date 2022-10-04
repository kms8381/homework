import React, { useState } from "react";
import "./App.css";
import List from "./components/list/List";

let num = 3;
function App() {
  const [todoTitle, setTodoTitle] = useState(); //제목값 state 설정

  const [todoContent, setTodoContent] = useState(""); //내용에 들어가는 값 설정

  const [todoList, setTodoList] = useState([
    //추가 버튼 눌렀을 때 저장 값 설정
    { id: 1, title: "물먹기", content: "물먹기2", done: "false" }, //useState 객체로 설정
    { id: 2, title: "밥먹기", content: "밥먹기2", done: "false" },
  ]);

  const onChangeTitle = (e) => {
    //제목에 새로운 값이 입력 될 때 마다
    const changTitle = e.target.value; //그 값을 changTitle라는 변수에 저장하고
    setTodoTitle(changTitle); //TodoTitle에 changTitle를 추가 시킨다.
  };

  const onChangeContent = (e) => {
    // 내용에 새로운 값이 입력 될 때 마다
    const changContent = e.target.value; //그 값을 changContent 라는 변수에 저장하고
    setTodoContent(changContent); //TodoContent에 changContent를 추가 시킨다.
  };

  const onClickList = (e) => {
    //버튼을 누를 때 마다
    e.preventDefault(); //창이 새로고침 되면서 데이터가 날라가는걸 방지(새로고침 막아줌)
    const newTodo = {
      id: num,
      title: todoTitle,
      content: todoContent,
      done: false,
    };
    //newTodo라는 변수에 객체를 저장한다.
    setTodoList([...todoList, newTodo]); //기존에 저장 돼 있던 todoList에 nuwTodo를 추가한다.
    num = num + 1;
  };

  return (
    <main>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <form className="add-form">
        <div className="input-group">
          <label>제목</label>
          <input type="text" onChange={onChangeTitle} value={todoTitle} />
          <label>내용</label>
          <input type="text" onChange={onChangeContent} value={todoContent} />
          <button onClick={onClickList}>추가하기</button>
        </div>
        <List todoList={todoList} />
        {/* <List todoList={todoList} /> / List라는 이름을 가진 파일에
    todoList라는 이름으로 todoList(리스트 값)을 보내준다. */}
      </form>
    </main>
  );
}

export default App;
