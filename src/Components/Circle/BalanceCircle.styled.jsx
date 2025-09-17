import styled from "styled-components";

export const Circle = styled.div`
  width: 50vw; /* 30% від ширини вьюпорта */
  max-width: 700px; /* обмеження максимальної величини */
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  border: 4px solid rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  font-family: sans-serif;
`;
