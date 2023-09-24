import styled from "styled-components";
import { Container, FlexBox } from "../App.Styled";

export const NavbarCompont = styled.div`
  padding: 20px;
  background-color: #f7f7f7;

  `;

export const ContainerNav = styled(Container)`
  margin: 0 auto;
  width: 80%;
`;

export const Icons = styled.div`
  width: 150px;
`;
export const Navitembar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UnOrder = styled.ul`
  display: flex;
  flex-wrap: wrap;

`;

export const ListUl = styled.li`
  margin-right: 80px;
  font-size: 18px;
`;
export const Number = styled.span`
  background-color: ${(props) => props.theme.pallete.black};
  color: ${(props) => props.theme.pallete.white};
  padding: 3px 8px;
  border-radius: 31px;
`;

export const FlexBoxitem = styled(FlexBox)`
  align-items: center;
  gap: 25px;
  font-size: 19px;
  
`;
export const IconBag = styled(FlexBox)`
  align-items: center;
  gap: 15px;
`;
