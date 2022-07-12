import React from 'react';

import { 
  DivImg,
  Img,
  MainTxt,
  H1Main,
  PMain,
  SecOne,
  Small
} from './style'

const Home = () => {
  return (
    <div>
      <SecOne>
        <DivImg>
          <Img src="https://i.imgur.com/LttW85S.jpg" />
        </DivImg>
        <MainTxt>
          <H1Main>Full Stack<br /> Life Developer</H1Main>
          <PMain>"Debugging our Life" 
            <br /> 
            <Small>De'Markus Matthews</Small>
          </PMain>
        </MainTxt>
      </SecOne>
    </div>
  )
}

export default Home