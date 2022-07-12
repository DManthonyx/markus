import React from 'react';

import { projects } from '../../Const'

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
        {projects.map(project => 
          <Project>
            <Title>{project.title}</Title>
            <Img src={project.img}/>
            <TechBox>
              <P>{project.desc}</P>
              <P>{project.techStack}</P>
              <DivButton>
                <ContactLink target="_blank" href={project.website}><WebIcon></WebIcon></ContactLink>
                <ContactLink target="_blank" href={project.github}><GithubIcon></GithubIcon></ContactLink>
              </DivButton>
            </TechBox>
          </Project>
        )}
      </Section>
    </div>
  )
}

export default Portfolio