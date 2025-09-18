import { Container, Navigation } from "./Layout.styled";
// import {  Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Container>
      <header>
        <div>
          <Navigation>
            <li></li>
            <li></li>
            <li></li>
          </Navigation>
        </div>
      </header>
      <main>

        {/* <Outlet /> */}</main>
    </Container>
  );
};
