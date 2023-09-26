import styled, { css }from 'styled-components';
import ReactPlayer from 'react-player'



const VideoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-right:4rem;
  width:100%;
  height:100%;
  @media(max-width: 1440px){
    margin-right:0rem;
    margin-top:1.2rem;

    }
      @media(max-width: 1024px){
    margin-top:1.8rem;

      }
      @media(max-width: 900px){
        margin-top:1rem;
        margin-bottom:1rem;

      }
      @media(max-width: 425px){
       justify-content: center;
       
    }
    
      
`;

export const VideoContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  
  width:100%;
  height:100%;
    @media (max-width:1600px){
      width:${({ widthQuerry1366 }) => widthQuerry1366 || '900'}px!important;
        height: ${({ heightQuerry1366 }) => heightQuerry1366 || '505'}px!important;
    }
    @media(max-width: 900px){
      width:${({ widthQuerry }) => widthQuerry || '250'}px!important;
        height: ${({ heightQuerry }) => heightQuerry || '250'}px!important;

    }
    
  
    .react-player{
    justify-content:center;
    box-shadow:1px;
    border-radius: 1.5rem;
    overflow: hidden;

    width: ${({ width }) => width || ''}px;
    height: ${({ height }) => height || ''}px;
    @media (max-width:2560px){
      
       }
      @media (max-width:1600px){
        width:${({ widthQuerry1366 }) => widthQuerry1366 || '1000'}px!important;
        height: ${({ heightQuerry1366 }) => heightQuerry1366 || '500'}px!important;
       }
    @media (max-width:900px){
        width:${({ widthQuerry }) => widthQuerry || '250'}px!important;
        height: ${({ heightQuerry }) => heightQuerry || '250'}px!important;

    }
  }
 

`;

const VideoPlayer = ({ url,width,height,widthQuerry,heightQuerry,widthQuerry1366,heightQuerry1366, ...props }) => {
  return (
        <VideoWrapper>  
          <VideoContainer widthQuerry={parseInt(widthQuerry)} heightQuerry={parseInt(heightQuerry)} widthQuerry1366={parseInt(widthQuerry1366)} heightQuerry1366={parseInt(heightQuerry1366)} >  
            <ReactPlayer 
            className ='react-player' 
            url={url} 
            width= {parseInt(width)}
          
            height={parseInt(height)}
            controls 
            {...props}
            ></ReactPlayer>
           </VideoContainer>
      </VideoWrapper>
  );
};

export default VideoPlayer;