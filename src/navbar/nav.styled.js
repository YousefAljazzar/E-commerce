import styled from "styled-components";
import { Container, FlexBox} from "../App.Styled";


export const NavbarCompont  =styled.div`
margin-top: 15px;
padding: 20px;

`

export const ContainerNav = styled(Container)`
margin: 0   auto;
width: 80%;
`

export const Icons = styled.div`
width: 12%;
`
export const  Navitembar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`


export const  UnOrder = styled.ul`
  display: flex;

`

export const ListUl = styled.li`
      margin-right: 80px;
      font-size: 18px;

`
export const Number =styled.span`

background-color: ${props => props.theme.pallete.black};
color: ${props => props.theme.pallete.white};
padding: 3px  8px;
border-radius: 31px;



`

export const FlexBoxitem = styled(FlexBox)`
align-items: center;
gap: 20px;
font-size: 19px;


`
export const IconBag = styled(FlexBox)`
align-items: center;
gap: 10px;



`
