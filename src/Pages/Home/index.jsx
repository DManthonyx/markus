import React from 'react';

import { 
  Link,
  DivLink,
  DivImg,
  Img,
  MainTxt,
  H1Main,
  PMain,
  SecOne,
  Button,
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
          {/* <DivLink>
            <Button>
              <Link exact to="/about">portfolio</Link>
            </Button>
            <Button>
              <Link>skills</Link>
            </Button>
            <Button>
              <Link exact to="/about">about</Link>
            </Button>
          </DivLink> */}
        </MainTxt>
      </SecOne>
    </div>
  )
}

export default Home