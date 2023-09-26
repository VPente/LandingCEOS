import { useRef, useEffect, useState } from 'react';
import { Wrapper } from '../components/Wrapper';
import Topic from '../components/topic/Topic';
import Footer from '../components/Footer/footer';
import {Button} from '../components/Button/Button';
import { Header, Main, Input, Title ,TitleTwo,TitleTwoBack,TitleWrapper,TitleTwoBack2, TitleThree, TitleStrong, TitleAbout,SubTitleAbout, SubTitle,  TopicHeader, BtnWrapper, ImgsWrapper,ImgSpanOne,ImgSpanTwo, BarImg, AboutWrapper } from '../../styles/styles';
import { FirstContainer, SecondContainer, FourthContainer, MidWrapper } from '../../styles/styles';
import { ButtonOne, ButtonTwo, ButtonThree } from '../components/Button/style';
import VideoPlayer from '../components/VideoPlayer/Player.jsx';
import firmamentLogo from '../../assets/firmament-logo.svg';
import bar from '../../assets/Rectangle.svg';
import test from '../../assets/ceos-print.jpg'
import test2 from '../../assets/testee.png'
export function Home() {
  return (
    <Wrapper>
      <Main>
        <Header>
          <img className ='firmamentImg'src={firmamentLogo} alt="" />
        </Header>
        <FirstContainer>
          <Title>Solução tecnológica no <TitleStrong>gerenciamento de conhecimento </TitleStrong>para ações estratégicas</Title>
          <SubTitle>Conheça a CÉOS, Plataforma de Gestão do Conhecimento Corporativo</SubTitle>
          <Button url="https://api.whatsapp.com/send?phone=++554898442525&text=Olá, gostaria de informações de como a educação corporativa poderá se aplicar na empresa que atuo!" Children = 'Quero Conhecer' component={ButtonOne} ></Button>
        </FirstContainer>
        <SecondContainer>
        <VideoPlayer url ='https://www.youtube.com/watch?v=6U-TUOvLBGE' width={'1000'} height={'565'} widthQuerry={'350'}heightQuerry={'200'} ></VideoPlayer>
       
        </SecondContainer>
        <TitleWrapper>
        <TitleTwo>
          <TitleTwoBack>Comunicação</TitleTwoBack>, <TitleTwoBack>Aprendizagem</TitleTwoBack> e Construção Coletiva de <TitleTwoBack>Novos Conhecimentos</TitleTwoBack> que provem a <TitleTwoBack2>Inovação Corporativa!</TitleTwoBack2>
        </TitleTwo>
        </TitleWrapper>
        <TopicHeader>
          <BarImg  src = {bar} hideOnSmallScreen={true}/>
          <TitleThree>Benefícios de contar com a CÉOS:</TitleThree>
          <BarImg src = {bar} hideOnSmallScreen={true}/>
        </TopicHeader>
        <Topic/>
        <BtnWrapper>
          <Button url="https://firmament.com.br/" Children = 'Clique para conhecer' component={ButtonTwo} ></Button>
        </BtnWrapper>
        <FourthContainer>
          <MidWrapper>
          <AboutWrapper>
            <TitleAbout>Invista no gerenciamento de conhecimento para ações estratégicas e, incentive ainda, o engajamento entre funcionários. </TitleAbout>
            <SubTitleAbout>Entre em contato e saiba como esta solução se aplica na sua empresa!</SubTitleAbout>
            <Button url="https://firmament.com.br/contact" Children = 'Entrar em Contato' component={ButtonThree} ></Button>
          </AboutWrapper>
         <ImgsWrapper>
          <ImgSpanOne><img className='imgApp' src={test} alt="" /></ImgSpanOne>
          <ImgSpanTwo><VideoPlayer url ='https://www.youtube.com/watch?v=3tUtU7-AO2A' width={'700'} height={'370'} widthQuerry={'300'}heightQuerry={'180'} widthQuerry1366 = {'400'}heightQuerry1366={'230'}></VideoPlayer></ImgSpanTwo>
         </ImgsWrapper>
         
         </MidWrapper>
        </FourthContainer>
        <div>
          <Footer/>
        </div>
      </Main>
    </Wrapper>
  );
}
