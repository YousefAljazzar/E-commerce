import styled from "styled-components";
import { FlexBox, FlexColum } from "../../../App.Styled";

export const StyledImageWrapper = styled(FlexColum)`
  width: 48%;
`;

export const StyledProudctImage = styled.img`
  width: ${(props) => props.width};
  max-width: 100%;
  margin-top: 20px;
`;

export const StyledDel = styled.del`
  color: #a7a7a7;
  font-size: ${(props) => props.fontSize};
  margin: 0px 10px;
`;

export const StyledExpiredWrapper = styled(FlexColum)`
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  padding: 24px 0px;
`;

export const MySpan = styled.span`
  color: red;
  font-weight: 600;
`;
export const StyledTimerWrapper = styled(FlexColum)`
  margin: 18px 0px;
  margin-left: ${(props) => props.ml};
`;
export const StyledTime = styled.div`
  background-color: #f5f5f5;
  border-radius: 50%;
  padding: 13px;
  font-weight: 600;
  font-size: 28px;
`;

export const StyledPargraph = styled.p`
  font-size: 12px;
  color: #3e3e59;
`;
export const StyledCounter = styled(FlexBox)`
  background: #f5f5f5;
  margin-top: 10px;
  width: 80%;
`;
export const StyledCounterClick = styled.div`
  cursor: pointer;
  padding: 18px;
  font-size: 20px;
`;
