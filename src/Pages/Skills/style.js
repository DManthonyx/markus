import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 100px;
  &:nth-child(1) {
    margin-top: 50px;
  }
  @media (max-width: 720px) {
    padding: 20px 0px;
    margin-bottom: 50px;
  }
`

export const Skill = styled.div`
  width: 125px;
  height: 125px;
  padding: 22px;
  @media (max-width: 500px) {
    padding: 8px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

