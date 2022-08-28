import styled from 'styled-components'

export const ContainerHome = styled.div`
display: flex;
flex-direction:column;
align-items: center;

  
  main{
    margin: 3em 0 0 0;
    text-align: center;
    
    h1{
      margin: 0em 0 1em 0;
    }
    h2{
      margin: 0em 0 1em 0;
    }
}
  `
export const Button = styled.button`
  flex-wrap: wrap;
  margin:4em 1em 0 0;
  width: 20%;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`

export const Header = styled.header`
    height: 18vh;
    margin: 0;
    padding: 1em 0;
    text-align: center;
    border-bottom:2px solid;
    p{
        font-weight: 500;
        font-size: 1em;
    }
    
`
export const TitleSite = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-size: 3em;
  margin: 0 0 .3em 0;
`
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  text-align: center;
  height: 2em;
  padding: .5em;
  background-color: rgba(13, 11, 74, 0.4);
`

