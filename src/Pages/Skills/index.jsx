import React from 'react';

import { skillImages } from '../../Const';
import {  
  Section,
  Skill,
  Img
} from './style';

const renderImages = () => {
  return skillImages.map(images =>
    <Section>
      {images.map(img => <Skill><Img src={img} /></Skill>)}
    </Section>
  )
}

const Skills = () => {

  return (
    <div>
      {renderImages()}
    </div>
  )
}

export default Skills;