import styled from "styled-components";
import { FlexColum } from "../../../App.Styled";

export const StyledLastestDiv = styled(FlexColum)`
  justify-content: ${(props) => props.justify};
  text-align: left;
  margin: 100px 0;
`;
