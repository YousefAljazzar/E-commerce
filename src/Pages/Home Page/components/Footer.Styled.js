import styled from "styled-components";
import { FlexBox, FlexColum } from "../../../App.Styled";

export const StyledFooter = styled(FlexBox)`
  margin: 50px 0;
`;

export const StyledAboutUs = styled(FlexColum)`
  width: 60%;
  padding: 15px 0;
`;

export const StyledIconsWrapper = styled(FlexBox)`
  padding: 15px 0;
`;

export const StyledUnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StyledListItem = styled.li`
  margin-top: ${(props) => props.mt};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
export const StyledShoper = styled(FlexBox)`
  border-top: 1px solid black;
  padding: 25px 0px;
`;
export const StyledLanguge = styled.div`
  display: flex;
  width: 10%;
  justify-content: flex-end;
  align-items: center;
`;
export const StyledCurrncy = styled.div`
  display: flex;
  width: 10%;
  justify-content: flex-end;
  align-items: center;
`;
