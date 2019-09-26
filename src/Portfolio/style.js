import styled from 'styled-components'

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