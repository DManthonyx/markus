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
        <Img src='https://i.imgur.com/pzAOYmB.jpg'/>
      </DivPic>
      <DivAbout>
        <P>My coding journey started back in 2016 when I was reading a news paper about tech and how mobile apps have made people millionaires overnight. Since reading that article I was having all sorts of mobile app ideas and how I could help change the world with tech. At the moment I was currently incarcerated and trying to figure out questions to life it seems that no one has the solution for. Growing up I was the kid that played dominoes and chess while listening to the older adults in my family talk. I knew right from wrong, but my current intelligence told me what was the purpose of doing right in a wrong world. After causing hurt and pain not only to myself but my loved ones around me, I had to re-examine my thought process and how I wanted to live my life. So I started going to college and taking a lot of community-help groups. My favorite group was AVP(Alternative to Violence Program) parenting. I was 21 and seeing grown men cry and not just any grown men but men of all ethnicities that were labeled society's worst with no heart. Seeing that in a environment where it is a weakness that could be exploited was a moment I wish a lot of people could see. On this path of self discovery I learned a lot about myself. I learned that I'm far from perfect. Learned that life is a journey of growth and development. I learned that I could love and smile and not be weak. Most importantly I seen the global impact of doing right when wrong can easily be done.

        </P>
        <P>Some time after while at Ironwood State Prison C-yard The Last Mile was introduced. My first thought was that everything happens for a reason. This was a blessing and a opportunity that couldn't be missed. I was soon accepted into the program not knowing what to expect. I remember reading articles about San Quentin and the success of the program. I just knew that I was excited to learn and build. The first languages I was introduced to was HTML and CSS. I thought this was going to be something from the Matrix but it wasn't ahah. I quickly fell in love with the simplicity of HTML and CSS and seeing it upload in the browser. I then dived into JavaScript and knew that this was for me. This was getting more on the Matrix side but I still loved the challenge.

        </P>
        <P>After serving my debt to society I was back with my loved ones. I quickly followed the foot steps of a lot of TLM alumni and attending General Assembly. I enrolled in their 3 month intensive Software Engineer Immersive course. In those 3 months I learned a lot. I completed four projects that I'm very proud of. I was able to get a betting understanding of JavaScript and learn about Python. I graduated from GA and started attending hackathons and tech events. Imposter syndrome was something that I felt in the beginning of going to these events. The dev community was very helpful and didn't judge me for what I didn't know. One thing that I appreciated from the hackathons was that the devs were very helpful in solving each others bugs. I soon won a hackathon and thats when I actually felt like a dev. Fast forwarding to today I reflect back and acknowledge my blessings. I'm proud of my process where I'm at. Today is a new day where I learn something new, build and give back.</P>
        <P>Exceptional full stack web developer with a mind to solve real life complex problems. I have a strong work ethic and like to finish in a timely manner. Always generating new ideas and I'm very good at seeing the pros and cons in them. A good understanding in a variety of web programming languages. Understanding the core concepts and techniques of maintenance and construction of websites. Active listener and can communicate in a clear way.

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