import styled from "styled-components";
import { ImClock } from "react-icons/im";

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
  color: #021622;
  border: 2px solid #fbf7f7d3;
  /* background-color: #7b7777d4; */
  background-color: ${(props) => {
    if (props.isWeekend) {
      return props.theme.colors.darkgrey;
    } else if (props.today) {
      return props.theme.colors.darkpink;
    } else {
      return props.theme.colors.lightgrey;
    }
  }};
`;
export const TimeIcon = styled(ImClock)`
  color: ${(props) => props.theme.colors.navy};
`;
