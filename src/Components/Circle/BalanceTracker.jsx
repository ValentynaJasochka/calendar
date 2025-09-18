import { Container, CircleContainer, Title, WeeklyCircle, GeneralCircle } from "./BalanceTracker.styled"
export const  BalanceTracker =  () =>{
  return (
   <Container>
    <CircleContainer>
      <Title> General Balance Circle</Title>
      <GeneralCircle></GeneralCircle>
    </CircleContainer>
    <CircleContainer>
      <Title>Weekly Balance Circle</Title>
      <WeeklyCircle></WeeklyCircle>
    </CircleContainer>
   
   </Container>)
}
