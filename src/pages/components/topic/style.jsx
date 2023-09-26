import styled from "styled-components";


export const Topics = styled.div`
    /* border: solid 1px white; */
    /* width:24rem;
    height:24rem; */
    display:flex;
    align-items:center;
    margin-top:1rem;
    margin-right:20px;
    margin-left:20px;
    flex-direction:column;
@media(max-width: 900px){
        
        width:80%;
        height:250px;
        border-radius:20px;
        align-items:center;
        flex-direction:column;
        
        
        box-shadow: rgba(255, 196, 0, 0.4) 0px 0px 0px 2px, rgba(255, 187, 0, 0.65) 0px 4px 6px -1px, rgba(255, 166, 0, 0.08) 0px 1px 0px inset; 
        margin-top:1.5rem;
      }
      .ImgWrapper{
        display:flex;
        justify-content:center;
        align-items:center;
        @media(max-width: 900px){
            margin-top:2rem;
        }

    }
    .ImgTopic{
        width:140px;
        height:140px;
        display:flex;
        justify-content:center;
        align-items:center;

        @media(max-width: 900px){
            width:75px;
            height:75px;
        }

    }
`

export const TextTopic = styled.p`
    color: ${({theme}) => theme.colors.primary};

text-align:center;
font-size:1.4rem;
@media(max-width: 1600px){
        font-size:1.2rem!important;
        

        
    }

@media(max-width: 900px){
        font-size:12px!important;
        text-wrap: wrap!important;
        text-align:center;
        /* margin-right:1rem;
        margin-left:1rem; */

        
    }
    
`
export const TextSpanOne = styled.span`
color: ${({theme}) => theme.colors.fourth};
font-size:1.4rem;
font-weight:700;
@media(max-width: 1600px){
        font-size:1.2rem!important;
        
    }
@media(max-width: 900px){
        font-size:12px!important;
    }

`
export const TextSpanTwo = styled.span`
color: ${({theme}) => theme.colors.primary};
font-size:1.4rem;
font-weight:700;
@media(max-width: 1600px){
        font-size:1.2rem!important;
        
    }
@media(max-width: 900px){
        font-size:12px!important;
    }
`
 
  