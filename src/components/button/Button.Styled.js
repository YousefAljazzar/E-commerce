import styled from "styled-components";

export const StyledButton = styled.div`
  color: ${(props) => props.theme.pallete.white};
  background: ${(props) => props.backGround};
  border-radius: 10px;
  width: 25%;
  padding: 15px;
`;
