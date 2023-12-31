import styled from "styled-components";

export const FooterAll = styled.footer`
  padding:2.5rem;
  background-color:#652F87;
  /* border-top: 1px solid #FFF; */

 
`

export const FooterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom:2rem;
  margin-left:10%;
  @media(max-width: 430px){
    margin-left:0;
    flex-direction:column;
    }

`;

export const ColumnOne = styled.div`
  flex: 1;
 
`;
export const ColumnTwo = styled.div`
  margin-top:1rem;
  flex: 1;
`;
export const ColumnThree = styled.div`
  flex: 1;
`;
export const TextFooter =styled.p`
    color: ${({theme}) => theme.colors.third};

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.60;

    width: 250px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;

    margin-top:1rem;
`

export const TittleFooter = styled.h2`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgb(211, 210, 210);

    margin-bottom:1rem;

    @media(max-width: 430px){
      font-size: 18px;
    }
`

export const ContactTopic = styled.a`
    color: rgb(211, 210, 210);
    display: grid;
    grid-template-columns: 24px 1fr;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;

    @media(max-width: 430px){
      font-size: 13px;
    }

    

`
export const IconBox = styled.span`
align-items:center;
@media(max-width: 430px){
     width:60%; 
    }
`
export const SubFooter = styled.div`
/* background-color: ${({theme}) => theme.colors.primary}; */

white-space:nowrap;
display:flex;
justify-content:space-between;
margin-left:10%;

@media(max-width: 430px){
    margin-left:0;
    flex-direction:column;
    }


`
export const Cnpj = styled.div`
justify-content:flex-end;
margin-right:25%;
`
export const MediaSection = styled.div`
    display:flex;
    margin-top:2rem;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
`
export const MediaIcons = styled.a`
`