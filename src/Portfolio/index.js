import React from 'react';

import {  
  Section,
  Project,
  TechBox,
  P,
  Img,
  Title,
  DivButton,
  ContactLink,
  WebIcon,
  GithubIcon
} from './style'


const Portfolio = () => {
  return (
    <div>
      <Section>
        <Project>
          <Title>SoberLiving</Title>
          <Img src="https://i.imgur.com/9E5ZjG9.png"/>
          <TechBox>
            <P>A project I built while at General Assembly. A web app/platform that list all the sober living homes/treatment centers. Purpose is to serve both victims of addiction and businesses by providing a user friendly website that locates facilities in their area. Also for the business to better market themselves.</P>
            <P>Technologies used: React, Postgres, Flask, Google Maps,</P>
            <DivButton>
              <ContactLink target="_blank" href="https://sober-living-react.herokuapp.com/"><WebIcon></WebIcon></ContactLink>
              <ContactLink target="_blank" href="https://github.com/DManthonyx/react-sober-living"><GithubIcon></GithubIcon></ContactLink>
            </DivButton>
          </TechBox>
        </Project>
        <Project>
          <Title>Dipn N Sipn</Title>
          <Img src="https://i.imgur.com/a1f8xyn.png"/>
          <TechBox>
            <P>My last project I built while at General Assembly. This is a social drinking adventure website. Is a mobile view app that serves the user by generating random locations specifically 3 at a time being based on there location first and than what ever city he/she would like to go bar hoping in. Making the night a bit easier by picking the location and making a adventure.</P>
            <P>Technologies used: React, Firebase, Google Maps, Yelp</P>
            <DivButton>
              <ContactLink target="_blank" href="https://dipn-n-sipn.firebaseapp.com/"><WebIcon></WebIcon></ContactLink>
              <ContactLink target="_blank" href="https://github.com/DManthonyx/DipnSipn"><GithubIcon></GithubIcon></ContactLink>
            </DivButton>
          </TechBox>
        </Project>
        <Project>
          <Title>FortNite Mania</Title>
          <Img src="https://i.imgur.com/n0RwIUS.png"/>
          <TechBox>
            <P>My first Full-Stack website. This project was pair pogramming. Would like to give credit and thanks to Dennis Tran for working hard and making this experience a pro-active constructive learning experience. This A youtube for FortNite, where users can create an account to post their videos and show off their skills and see how many comments and likes that they receive. Has Also is mobile view/ fully responsive</P>
            <P>Technologies used: JavaScript, EJS, Node, Express, Mongoose</P>
            <DivButton>
              <ContactLink target="_blank" href="https://fornite-mania.herokuapp.com/?fbclid=IwAR2XH0AXVpsy5YWBGNKP5mUNmVbcd2ORU3Os8pXKaW8w-7SooyOfO3xGB6o
              "><WebIcon></WebIcon></ContactLink>
              <ContactLink target="_blank" href="https://github.com/DManthonyx/CRUD-app-project"><GithubIcon></GithubIcon></ContactLink>
            </DivButton>
          </TechBox>
        </Project>
        <Project>
          <Title>SlotMachine</Title>
          <Img src="https://i.imgur.com/GaIvUx1.png"/>
          <TechBox>
            <P>My first static website ever created while attending General Assembly. A simple but fun and interactive slot machine game. Cost 2 dollars to play and having 3 different options to select from, which is 20 50 100. 20 being the easiest and 100 being the hardest. Can win by getting either all bars which is the jack pot and thats double the pay and all the same fruit or 2 of the same fruit and one bar is the only way to win.</P>
            <P>Technologies used: JavaScript,HTML5, CSS3</P>
            <DivButton>
              <ContactLink target="_blank" href="https://pages.git.generalassemb.ly/dmanthonyx/slotMachine/"><WebIcon></WebIcon></ContactLink>
              <ContactLink target="_blank" href="https://github.com/DManthonyx/slotMachinee"><GithubIcon></GithubIcon></ContactLink>
            </DivButton>
          </TechBox>
        </Project>
      </Section>
    </div>
  )
}

export default Portfolio