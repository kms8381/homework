import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/store/store";
import { useNavigate } from "react-router-dom";

function Todo({ todo, todoList, setTodoList }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickDel = (id) => {
    dispatch(deleteTodo(id));
  };

  const onClickEdit = (id) => () => {
    dispatch(editTodo(id));
  };

  return (
    <TodoList>
      <button
        onClick={() => {
          navigate(`/detail/${todo.id}`);
        }}
      >
        상세페이지
      </button>
      <h2 className="title">{todo.title}</h2>
      <Content>{todo.content}</Content>
      <Button>
        <DeleteButton onClick={() => onClickDel(todo.id)}>삭제</DeleteButton>
        <EditButton onClick={onClickEdit(todo.id)}>
          {todo.done === false ? "완료" : "취소"}
        </EditButton>
      </Button>
    </TodoList>
  );
}

export default Todo;

const TodoList = styled.div`
  border-radius: 12px;
  padding: 0px 24px 24px;
  width: 310px;
  height: 200px;
  border: 5px solid rgb(96, 231, 177);
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Content = styled.div`
  font-size: medium;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DeleteButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  width: 45%;
  background-color: #fff;
  border: 3px solid red;
  padding: 7px 0;
`;

const EditButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  width: 45%;
  background-color: #fff;
  border: 3px solid rgb(19, 169, 91);
`;
