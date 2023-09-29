import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
  
    * {
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif !important;
    }
    body {
      margin: 0;
    }
    h1{
      font-size: 45px;
    }
    p{
      margin: 2px;
      padding: 2px;
    }
    img{
      max-width: 100%;
    }
  li{
    list-style: none;

  }
  
    a{
      text-decoration: none;
      color: #000;
    }
`;

export const theme = {
  pallete: {
    black: "#000",
    white: "#fff",
  },
};

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.items};
  width: ${(props) => props.width};
  padding: ${(props) => props.p};
  height: ${(props) => props.height};
`;

export const FlexColum = styled(FlexBox)`
  flex-direction: column;
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.ml};
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  justify-content: ${(props) => props.items};
`;

export const Typography = styled.p`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin-left: ${(props) => props.marginLeft};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: ${(props) => props.height};
`;
export const StyledImage = styled.img`
  max-width: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
