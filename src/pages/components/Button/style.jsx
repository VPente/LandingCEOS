import styled from "styled-components";

export const ButtonOne = styled.button` 
    width: 20%;
    padding: 24px;
    font-weight: 700;
    
    background: rgb(108, 174, 203);
    color: rgb(255, 255, 255);
    
    border-radius: 5px;
    margin: 12px 0 0px;
    border: none;

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 16px;
    @media (max-width:900px){
        width: 60%;
    padding: 15px;


       }
&:hover{
        filter: brightness(0.9);
    }
`

export const ButtonTwo = styled.button`
    width: 20%;
    padding: 16px;
    font-weight: 700;
    
    background:${({theme}) => theme.colors.primary};
;
    color: #ffffff;
    
    border-radius: 5px;
    margin: 12px 0 0px;
    border: 3px solid "black";

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 16px;

    display:flex;
    justify-content:center;

    @media(max-width: 900px){
        width:60%;
        padding: 16px;
        
    }

&:hover{
    filter: brightness(0.9);
}
`
export const ButtonThree = styled.button`
    width: 35%;
    padding: 16px;
    font-weight: 700;
    
    background:${({theme}) => theme.colors.primary};


    color: #ffffff;

    border-radius: 5px;
    margin: 12px 0 0px;
    border: 3px solid "black";

    cursor: pointer;
    transition: filter 0.2s;

    font-size: 16px;
    
    margin-top:15.75rem;
    display:flex;
    justify-content:center;
    @media (max-width:1600px){
        margin-top:6rem;
       }
       @media(max-width: 900px){
        margin-top:4rem;
        width: 50%;
        padding: 14px;


        
    }
    

&:hover{
    filter: brightness(0.9);
}
`