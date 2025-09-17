import styled from "styled-components";

export const CalendarTable = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* grid-template-rows: repeat(6, 1fr); */
  grid-gap: 1px;
`;
export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 8px;
  gap: 20px;
  min-width: 140px;
  min-height: 70px;
  color: #0a334d;
  border: 2px solid #fbf7f7d3;
  /* background-color: #7b7777d4; */
  /* background-color: ${({isWeekend, today}) => (isWeekend ? "#7b7777d4" : "#d7d2d2d6") } */
  background-color: ${({isWeekend, today}) => {
  if (isWeekend) {
    return "#7b7777d4" 
  } else if (today) {
    return "#ef99bad2" 
  } else {
    return "#d7d2d2d6" 
  }

   } }
`
