import styled from "styled-components";

export const StyledButton = styled.div`
  color: ${(props) => props.theme.pallete.white};
  background: ${(props) => props.backGround};
  border-radius: 10px;
  width: ${(props) => props.width};
  padding: 15px;
  text-align: ${(props) => props.alignText};
  margin-top: 10px;
`;
