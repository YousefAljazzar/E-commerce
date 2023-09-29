import styled from "styled-components";
import { FlexColum } from "../../App.Styled";

export const StyledShopHeader = styled(FlexColum)`
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(191, 234, 255, 1) 48%,
    rgba(255, 138, 138, 1) 100%
  );
  height: 48vh;
  margin-bottom: 15px;
`;

export const StyledShopHeaderContent = styled(FlexColum)`
  width: 50%;
  text-align: center;
`;
