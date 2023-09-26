import React from 'react';
import {Topics,TextTopic,TextSpanOne,TextSpanTwo} from './style.jsx';
import TopicTitle  from './TopicTitle.jsx';
import {ThirdContainer} from "../../../styles/styles.jsx"
import iconPuzzle from '../../../assets/iconPuzzle.svg'
import iconLamp from '../../../assets/iconLamp.svg'
import iconArrow from '../../../assets/iconArrow.svg'
import iconHead from '../../../assets/iconHead.svg'
import inconUmbrella from '../../../assets/Umbrella.svg'
function Topic (){
    return(
      <ThirdContainer>
        <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconHead} alt="" />
            </span>
            <div>
              <TopicTitle children = 'Aprendizagem' color='#6FC0DC'></TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>A bagagem de conhecimento, <TextSpanOne>não apenas na mente do funcionário</TextSpanOne>, mas também na memória organizacional</TextTopic>
            </div>
          </Topics>
        
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic' src={iconArrow} alt="" />
            </span>
            <div>
            <TopicTitle children = 'Interações' color='#652f87'></TopicTitle>
            </div>
            <div className='textDiv'>
              <TextTopic>Aprendizagem coletiva por meio das <TextSpanTwo>interações entre os próprios funcionários.</TextSpanTwo></TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
                <img className='ImgTopic'src={iconPuzzle} alt="" />
            </span>
              <div>
              <TopicTitle children = 'Comunicação' color='#6FC0DC'></TopicTitle>
              </div>
            <div className='textDiv'>
              <TextTopic>Cultura Organizacional, Liderança Inovadora e <TextSpanOne>Aprimoramento da comunicação do time.</TextSpanOne></TextTopic>
            </div>
          </Topics>
          <Topics>
            <span className='ImgWrapper'>
              <img className='ImgTopic'  src={inconUmbrella} alt="" />
            </span>
              <div>
                <TopicTitle children = 'Interações' color='#652f87'>Inovação</TopicTitle>
              </div>
            <div className='textDiv'>
              <TextTopic>Incentivo à <TextSpanTwo>cultura de inovação da empresa.</TextSpanTwo></TextTopic>
            </div>
          </Topics>
          
        </ThirdContainer>
    )
}
export default Topic








