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
  EmailIcon,
  LinkedinIcon,
  GithubIcon
} from './style'

const About = () => {
  return (
   <div>
     <Section>
      <DivPic>
        <Img src="https://i.imgur.com/pzAOYmB.jpg"/>
      </DivPic>
      <DivAbout>
        <P>Exceptional full stack web developer with a mind to solve complex problems. I have a strong work ethic and like to finish in a timely manner. Always generating new ideas and I'm very good at seeing the pros and cons in them. A good understanding in a variety of web programming languages. Understanding the core concepts and techniques of maintenance and construction of websites. Active listener and can communicate in a clear way.
        </P>
        <DivContact>
          <H2>Contact Me</H2>
          <DivLink>
            {/* <ContactLink><EmailIcon></EmailIcon>Email</ContactLink> */}
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