import React from "react";
import styled from "styled-components";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";

function List({ todoList, setTodoList }) {
  const todos = useSelector((state) => state.todos.todos);
  console.log("리스트", todos);

  const workingList = todos.filter((item) => item.done === false);
  const doneList = todos.filter((item) => item.done === true);

  return (
    <ListBottle>
      <h2 className="Working">Working..</h2>
      <div className="List">
        {workingList.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </div>
      <ListBottle>
        <h2 className="Done">Done..</h2>
        <div className="List">
          {doneList.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </div>
      </ListBottle>
    </ListBottle>
  );
}
export default List;

const ListBottle = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;

  .List {
    width: 100%;
    height: auto;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
`;
