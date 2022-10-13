import styled from "styled-components";
function Layout({ children }) {
  return <Style>{children}</Style>;
}

export default Layout;

const Style = styled.div`
  min-width: 800px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;
