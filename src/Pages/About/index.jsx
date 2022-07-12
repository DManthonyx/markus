import React from 'react';

import {  
  Section,
  DivPic,
  DivAbout,
  DivContact,
  DivLink,
  ContactLink,
  Img,
  H2,
  P,
  LinkedinIcon,
  GithubIcon
} from './style'

const About = () => {
  return (
   <div>
     <Section>
      <DivPic>
        <Img src='https://i.imgur.com/pzAOYmB.jpg'/>
      </DivPic>
      <DivAbout>
        <P>My coding journey started back in 2016 when I was reading a news paper about tech and how mobile apps have made people become millionaires overnight. Since reading that article I was having all sorts of mobile app ideas. At the moment I was currently incarcerated and trying to figure out questions to life that no one seemed to have a solution for. Growing up I was the kid that played dominoes and chess while listening to the older adults in my family talk. I knew right from wrong, but my current mind set told me what was the purpose of doing right in a wrong world. After causing hurt and pain not only to myself but my loved ones, I had to re-examine my thought process and how I wanted to live my life. So I started going to college and taking a lot of community self-help groups and got the opportunity to learn how to code while incarcerated. On this path of self discovery I learned a lot about myself. I learned that I'm far from perfect and that life is a journey of growth and development. I learned that I could love and smile while not being weak. Most importantly I seen the global impact of doing right when wrong can easily be done.
        <br />After serving my debt to society I was back with my love ones. I quickly enrolled into General Assembly and took their 3 month intensive Software Engineer Immersive course. In those 3 months I learned a lot and became a full stack software engineer. I completed four projects that I'm very proud of. I was able to get a betting understanding of JavaScript and learn about Python. I graduated from GA and started attending hackathons and tech events. Imposter syndrome was something that I felt in the beginning of going to these events. The dev community was very helpful and didn't judge me for what I didn't know. One thing that I appreciated from these hackathons was that the devs were very helpful in solving each others bugs. I soon won a hackathon and thats when I actually felt like a dev. Fast forwarding to today I reflect back and acknowledge my blessings. I'm proud of the process and where I'm at.
        <br /> Today I will say that I'm an exceptional full stack web developer with a mind to solve real life complex problems. I have a strong work ethic and like to finish in a timely manner. Always generating new ideas and I'm very good at seeing the pros and cons in them. A good understanding in a variety of web programming languages. Understanding the core concepts and techniques of maintenance and construction of websites. I'm an Active listener and can communicate in a clear way.
        </P>
        <DivContact>
          <H2>Contact Me</H2>
          <DivLink>
            <ContactLink target="_blank" href='https://www.linkedin.com/in/demarkus-matthews-a12051172/'><LinkedinIcon></LinkedinIcon></ContactLink>
            <ContactLink target="_blank" href='https://github.com/DManthonyx?tab=repositories'><GithubIcon></GithubIcon></ContactLink>
          </DivLink>
        </DivContact>
      </DivAbout>
     </Section>
   </div>
  )
}

export default About