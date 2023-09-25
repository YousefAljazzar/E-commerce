import styled from "styled-components";
import { FlexBox, FlexColum } from "../../App.Styled";

export const StyledHero = styled(FlexBox)`
  color: ${(props) => props.theme.pallete.black};
  justify-content: space-between;
`;

export const HeroDiv = styled(FlexColum)`
  background: ${(props) => props.backGrond};
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  justify-content: center;
`;
export const HeroContent = styled.div``;
