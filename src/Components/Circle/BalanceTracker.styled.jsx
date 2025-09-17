import styled from "styled-components";

export const Container =styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 40px;
`;
export const CircleContainer =styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  align-items: center;
`;
export const Title =styled.h2`
 font-size: 25px;
  font-weight: 600;
  font-family: sans-serif;
`;

export const GeneralCircle = styled.div`
  width: 30vw; /* 30% від ширини вьюпорта */
  max-width: 400px; /* обмеження максимальної величини */
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
export const WeeklyCircle = styled.div`
  width: 30vw; /* 30% від ширини вьюпорта */
  max-width: 400px; /* обмеження максимальної величини */
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: linear-gradient(135deg, #adb7c5, #6e7db8);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  border: 4px solid rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  font-family: sans-serif;
`
