import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const DivImg = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  @media (max-width: 550px) {
    width: 40%;
  }
`

export const Img = styled.img`
  width: 65%;
  @media (max-width: 550px) {
    width: 75%;
  }
`

export const MainTxt = styled.div`
  width: 50%;
  @media (max-width: 550px) {
    width: 59%;
  }
`

export const DivLink = styled.div`
  
`

export const H1Main = styled.h1`
  font-size: 4em;
  margin: 0px;
  @media (max-width: 820px) {
    font-size: 3em;
  }
  @media (max-width: 670px) {
    font-size: 2.5em;
  }
`

export const PMain = styled.p`
  font-size: 2em;
  @media (max-width: 820px) {
    font-size: 1.5em;
  }
  @media (max-width: 550px) {
    font-size: 1em;
  }
`

export const SecOne = styled.section`
display: flex;
justify-content: center;
margin-top: 60px;
`

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin: 15px;
  text-transform: uppercase;
  color: black;
  &:nth-child(1) {
   
  }
`
export const Button = styled.button`
  width: 17%;
  margin: 4px;
  border-radius: 5px;
  font-weight: bold;
  &:nth-child(1) {
   margin-left: 3px;
  }
  &:hover {
    background: rgba(245, 195, 3, 1);
    border: rgba(245, 195, 3, 1);
    transform: scale(1.1);
    position: relative;
  }
`

export const Small = styled.small`
  font-size: 20px;
  position: relative;
  left: 3px;
`