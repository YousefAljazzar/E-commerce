import styled from "styled-components";
import { FlexBox, FlexColum } from "../../../App.Styled";

export const TrandingDiv = styled(FlexColum)`
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
`;
export const TrandingImageWrapper = styled.div`
  width: 50%; /* Adjust this as needed */
  display: flex;
  justify-content: flex-end;
`;
