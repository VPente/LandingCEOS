import styled from "styled-components";
import CeosLog from '../assets/ceosLG.svg'
// import CeosLog from '../assets/ceos-log.svg'

import BG from '../assets/BGCeos.png'

export const Header = styled.header`
    padding:1rem;

    align-items: start;
    display: flex;
    box-shadow:1px;
    border-bottom: 1px solid  ${({theme}) => theme.colors.primary};;
`

export const Main = styled.div`
    display: block;
    flex-direction: column;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/noisy-grid.png");

   


    /* background: linear-gradient(0.5turn, #3F51B5 20%, #2196F3 , #9C27B0 ); */
    /* background: rgb(63,81,181);
    background: linear-gradient(180deg, rgba(63,81,181,1) 3%, rgba(33,150,243,1)60%, rgba(156,39,176,1) 88%); */
    
`

export const Input = styled.input`
    width: 50%;
    padding: 24px;
    display: flex;
    background: #e6e6e6db;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    //margin:5rem 30rem 5rem 35rem;
    width:45%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align:center;
    @media (max-width:1600px){
        width:60%;

       }
    @media (max-width:1024px){
        width:85%;
        font-size: 45px;
       }
    @media (max-width:900px){
        width:100%;
        font-size: 30px;
       }
    `
export const TitleTwo = styled.h1`
color: ${({theme}) => theme.colors.primary};
font-weight: 400;

font-size: 64px;
font-style: normal;
line-height: normal;
margin-top:2rem;
width:85%;

@media(max-width: 1600px){
    font-size: 45px!important;

}
@media(max-width: 1024px){
    font-size: 40px!important;
}

@media(max-width: 900px){
    font-size: 20px!important;
    text-align: start;
    margin-bottom:10px;
margin-top:10px;
    

  }


`

export const TitleTwoBack = styled.span`
color: ${({theme}) => theme.colors.primary};

font-size: 64px;

font-style: normal;
font-weight: 400;
line-height: normal;
background-color: rgb(137, 216, 250, 0.5);

/* background: rgb(232, 182, 58, 0.4);
background-size:10px 10px; */
@media(max-width: 1600px){
    font-size: 45px!important;
}
@media(max-width: 1024px){
    font-size: 40px!important;
}

@media(max-width: 900px){
    font-size: 20px!important;
    text-align: justify;

    }
`
export const TitleTwoBack2 =styled.span`
font-weight: 600;
font-size: 64px;
font-style: normal;
line-height: normal;
@media(max-width: 1600px){
    font-size: 50px!important;
@media(max-width: 900px){
    font-size: 22px!important;
    text-align: normal;
    margin-bottom:10px;
    

  }
}

`
export const TitleWrapper = styled.section`
display:flex;
align-items:center;
justify-content:center;
margin-left:3rem;
margin-top:2rem;
@media (max-width:900px){
    margin-left:0px;

       }

`
export const TitleThree = styled.h1`
     color: ${({theme}) => theme.colors.primary};

    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    white-space:nowrap;
    @media(max-width: 1600px){
    font-size: 40px;

}
    @media (max-width:900px){
        font-size: 22px;
        margin-top:1rem;
        white-space:wrap;
       }
   

    
`
export const TitleStrong = styled.strong`

    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    @media (max-width:900px){
        font-size: 30px;


       }
    
    `
export const SubTitle = styled.h2`
        color: ${({theme}) => theme.colors.primary};

    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.80;
    margin-bottom:2.5rem;
    @media (max-width:900px){  
        font-size: 20px;
        line-height: normal;
        text-align:center;
        width:95%;
       }
`
export const FirstContainer = styled.section`
    margin: 20px 0 25px;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-image: url(${CeosLog}) ;
    background-repeat:no-repeat;
    background-size:500px;  
    background-position:15% 15%;
    @media (max-width:1600px){
        background-size:400px;  
        background-position:10% 4%;

       }
       @media (max-width:1024px){
        background-size:300px;  
        background-position:5% 4%;

       }
       @media (max-width:900px){
        background-size:150px;  
        font-size: 30px;
       }
   

    


`
export const SecondContainer = styled.section`
    display:flex;
    align-items: center;
    flex-direction: column;
    /* background-image: url('../../public/images/lines.svg');
    background-size: 100rem 20rem;
    background-origin:border-box; */
    /* background-position-x:center;
    background-position-y:97%;
    background-size: 200vh; */
    background: url(${BG});
    
    background-repeat: no-repeat;
    background-size:100% 100%;
    background-position:46% 30%;
    
    padding:1rem 5rem 1rem 5rem;

    @media (max-width:900px){
        background-size:cover;
        background-position:cover;
        padding:1rem 1rem 1rem 1rem;
        margin-bottom:2rem;
        


       }

`
export const ThirdContainer = styled.section`
    display:flex;
    justify-content:space-around;
    margin: 2rem 4rem 2rem 3rem;
    @media(max-width:1600px) {
        margin-left:20px;
        margin-right:20px;
        


    }
    @media(max-width: 900px){
        margin: 0;
        align-items:center;
        flex-direction:column;
        width: auto;

   
      }
    
`

export const FourthContainer = styled.section`
    border: 1px solid #FFF;
    margin-top:4rem;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/white-diamond.png");
    @media(max-width: 900px){
        
    margin-top:1rem;
    padding-bottom:5rem;

}

`
export const MidWrapper = styled.div`
width: 900px;
height: 80vh;
display:flex;
@media (max-width:1600px){
    height: 90vh;

       }
    @media(max-width: 900px){
    flex-direction:column-reverse;
    width: 100%;
    height: 110vh;
    
}



`
export const AboutWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:2rem;
margin-left:220px;
@media (max-width:1600px){
    margin-left:50px;
       }
       @media(max-width: 900px){
        margin-left:20px;
        margin-top:0px;


}

`
export const TitleAbout = styled.h1`
    color: ${({theme}) => theme.colors.primary};
    font-size: 45px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    width: 980px;
    margin-bottom:4rem;
    @media (max-width:1600px){
        width: 100%;
        font-size: 35px;

       }
       @media (max-width:1024px){
        font-size: 35px;
        width: 75%;

       }
       @media(max-width: 900px){
        font-size:25px;
        width: 350px;
}
    
    
`
export const SubTitleAbout = styled.h2`
    color: ${({theme}) => theme.colors.primary};
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.70;
    margin-top:50px;
    width: 700px;
    @media (max-width:1600px){
        font-size: 20px;
        width:90%;

       }
       @media (max-width:1024px){
        font-size:18px;
        width: 52%;
       }
       @media(max-width: 900px){
        font-size:15px;
        width: 350px;
}

`
export const ImgsWrapper = styled.div`
    /* width: 56.25rem;
    height: 37.5rem; */
    width:25%;
    height:80%;
    position:absolute;
    right:10%;
    display:flex; 
    margin-top:2rem;
    flex-direction:column;
    margin-left:2rem;
    @media (max-width:1440px){
        
       }
    @media(max-width: 900px){
        position:relative;
        width:100%;
        height:60vh;
        left:0px;
        margin-left:0rem;
        top:10px;
        
}

    .imgApp{
        width: 100%;
        height: 100%;
        border-radius:5px;
        @media (max-width:1600px){

}

}
`
export const ImgSpanOne = styled.div`
       position:absolute;
       left:10%;
       width:500px;
       height:300px;
       z-index:1;
       @media (max-width:1600px){
            width:330px;
            height:250px;
            left:35%;
        }
       @media(max-width: 900px){
            width:250px;
            height:200px;
            position:absolute;
            left:30%;
        



}
    
       
`
export const ImgSpanTwo = styled.div`
       position:absolute;
       top:40%;
       right:30%;
       width:650px;
       height:350px;
       z-index:2;
       @media (max-width:1600px){
            width:350px;
            height:250px;
            right:10%;
            top:10.4rem;
       }
       @media(max-width: 900px){
        width:200px;
        height:200px;
        position:absolute;
        left:70px;
;
        

}
   

  


`
export const BarImg = styled.img`
        width:30%;
        margin:20px; 
        @media(max-width: 1600px){
           width:20%;
        }
        @media(max-width: 900px){
            display: ${(props) => (props.hideOnSmallScreen ? 'none' : 'inline-block')};
            margin:0px; 
            

        
    }
`

export const TopicHeader = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10rem;
    @media(max-width: 900px){

    //remove the space that is remaing 
    margin-top:1rem;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:2rem;
    width:100%;
        

    }
    
        
    
`
export const BtnWrapper = styled.section`
display:flex;
justify-content:flex-end;
margin-right:10%;
@media(max-width: 900px){
    justify-content:center;
    margin:0 auto;
    margin-top:1rem;
    
    }

`