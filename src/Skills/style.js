import styled from 'styled-components'

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
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

