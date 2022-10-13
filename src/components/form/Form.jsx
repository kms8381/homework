import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/store/store.js";

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const initialState = {
    id: 1,
    title: "",
    content: "",
    done: false,
  };
  const [todo, setTodo] = useState(initialState);

  const onChangeTodo = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ ...todo, id: todos.at(-1).id + 1 }));
    setTodo(initialState);
  };

  return (
    <AddForm onSubmit={onSubmit}>
      <InputGroup>
        <label>제목</label>
        <Text name="title" onChange={onChangeTodo} value={todo.title} />
        <label>내용</label>
        <Text name="content" onChange={onChangeTodo} value={todo.content} />
      </InputGroup>
      <Button>추가하기</Button>
    </AddForm>
  );
};

export default Form;

const AddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100px;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const Text = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const Button = styled.button`
  background-color: rgb(111, 228, 172);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
  margin-left: 70px;
  margin-right: 20px;
`;
