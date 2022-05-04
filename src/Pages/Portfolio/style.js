import styled from 'styled-components'
import { Web } from '@styled-icons/material/Web'
import { GithubSquare} from '@styled-icons/fa-brands/GithubSquare'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 780px) {
    margin-bottom: 50px;
  }
`

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-bottom: 20px;
  border-bottom: 3px solid #f5c303;
  @media (max-width: 511px) {
    width: 94%;
  }
`

export const Title = styled.h2`
  font-size: 2.5em;
  margin: 0px;
  letter-spacing: 1px;
`

export const Img = styled.img`
  width: 75%;
  height: 400px;
  @media (max-width: 780px) {
    width: 100%;
  }
`

export const TechBox = styled.div`
  width: 75%;
  @media (max-width: 780px) {
    width: 100%;
  }
`

export const P = styled.p`
  font-size: 1em;
  letter-spacing: 1px;
  line-height: 25px;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const ContactLink = styled.a`

`

export const WebIcon = styled(Web)`
  color: black;
  width: 45px;
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