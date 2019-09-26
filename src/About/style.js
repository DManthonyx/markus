import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Email } from 'styled-icons/material/Email'
import { Linkedin } from 'styled-icons/icomoon/Linkedin'
import { GithubSquare} from 'styled-icons/fa-brands/GithubSquare'

export const Section = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

// export const H1 = styled.h1`
//   word-spacing: 4px;
//   width: 100%;
//   text-align: center;
//   font-size: 4em;
//   margin-bottom: 50px;
//   margin-top: 16px;
//   display: none;
//   @media (max-width: 950px) {
//     display: block;
//   }
// `
export const H2 = styled.h2`

`

export const DivAbout = styled.div`
  width: 48%;
  @media (max-width: 800px) {
    width: 71%;
  }
`

export const DivContact = styled.div`

`

export const DivPic = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
`

export const DivLink = styled.div`
  display: flex;
  @media (max-width: 800px) {
    padding-bottom: 20px;
  }
`

export const ContactLink = styled.a`
  text-decoration: none;
  margin-right: 50px;
`


export const P = styled.p`
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 1.2em;
`

export const Img = styled.img`
  width: 325px;
  height: 350px;
`

export const EmailIcon = styled(Email)`
  color: black;
  width: 35px;
  &:hover {
    color: #f5c303;
    transform: scale(1.3)
  }
`

export const LinkedinIcon = styled(Linkedin)`
  color: black;
  width: 35px;
  &:hover {
    color: #f5c303;
    transform: scale(1.3)
  }
`

export const GithubIcon = styled(GithubSquare)`
  color: black;
  width: 35px;
  &:hover {
    color: #f5c303;
    transform: scale(1.3)
  }
`