import styled from "styled-components";
import { FlexBox, FlexColum } from "../../App.Styled";

export const StyledProductWrapper = styled(FlexBox)`
  justify-content: space-between;
`;

export const StyledProductImage = styled.img`
  max-width: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const StyledPaddingDiv = styled.div`
  padding: ${(props) => props.p};
  margin: ${(props) => props.m};
`;
