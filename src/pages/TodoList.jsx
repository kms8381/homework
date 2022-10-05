import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import Form from "../components/form/Form";
import Header from "../components/header/Header";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    //추가 버튼 눌렀을 때 저장 값 설정
    { id: 1, title: "물먹기", content: "물먹기2", done: false }, //useState 객체로 설정
    { id: 2, title: "밥먹기", content: "밥먹기2", done: true },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodoList={setTodoList} todoList={todoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
};

export default TodoList;
