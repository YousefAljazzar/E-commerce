import styled from "styled-components";
import { FlexBox, FlexColum } from "../../App.Styled";

export const StyledHero = styled(FlexBox)`
  color: ${(props) => props.theme.pallete.black};
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroDiv = styled(FlexColum)`
  background: ${(props) => props.backGrond};
  width: ${(props) => props.desktopWidth};
  text-align: left;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: ${(props) => props.mobileWidth};
    text-align: center;
  }
`;
export const HeroContent = styled(FlexColum)`
  @media (max-width: 768px) {
    width: ${(props) => props.mobileWidth};
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
  }
`;
