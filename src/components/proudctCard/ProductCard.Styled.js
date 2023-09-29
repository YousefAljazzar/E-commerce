import styled from "styled-components";
import { FlexBox, FlexColum } from "../../App.Styled";

export const StyledProudctCardWrapper = styled(FlexBox)`
  height: 30vh;
  margin: 15px 0px;
  border-radius: 3px;
  border: 2px solid #eeee;
  padding: 15px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledProudctCardContent = styled(FlexColum)`
  width: 40%;
  padding: 25px;
  margin-left: 30px;
  height: 28vh;
`;
