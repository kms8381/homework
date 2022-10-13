import styled from "styled-components";
const Header = () => {
  return (
    <main>
      <Container>
        <div>My Todo List</div>
        <div>React</div>
      </Container>
    </main>
  );
};

export default Header;

const Container = styled.div`
  align-items: center;
  border: 2px solid rgb(9, 234, 178);
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  gap: 20px;
`;
