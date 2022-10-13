import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const todos = useSelector((state) => state.todos.todos);
  const params = useParams();
  const id = parseInt(params.id);

  console.log(todos[id - 1]);
  const navigate = useNavigate();
  const arr = todos.filter((arr) => arr.id == id);
  console.log("arr", arr[0].title);
  return (
    <BigBox>
      <Box>
        <div>
          <div>ID:{params.id}</div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
        </div>
        <h2>{arr[0].title}</h2>
        <div>{arr[0].content}</div>
      </Box>
    </BigBox>
  );
}

export default Detail;
const BigBox = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
