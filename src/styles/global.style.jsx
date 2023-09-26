import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    
    
}


.firmamentImg{
    margin-left:0.3rem;
}

.ImgWrapper{
    display:flex;
    justify-content:center;
    margin-top:2rem;
    height:6rem;
    width:200px;
    }

.textDiv{
    display:flex;
    justify-content:center;
    align-items:center;
    }
`
