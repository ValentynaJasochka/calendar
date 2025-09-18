import { styled } from "styled-components";
// import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 1280px;
  padding: 20px;
  margin: 0 auto;
`;
export const Navigation = styled.ul`
  width: 100%;
  height: 30px;
  background-color: ${(props)=> props.theme.colors.lightgrey};
  display: flex;
  gap: 40px;
`;
