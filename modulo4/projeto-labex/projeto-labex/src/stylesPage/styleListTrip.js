import styled from 'styled-components'

export const ContainerPageTrips = styled.div `
  display: flex;
  flex-direction: column;
  
  h2{
    text-align: center;
    margin: 0 0 2em 0;
    
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
export const ContainerAllTrips = styled.div `
  display: flex;
  margin: 0 0 4em 0;
  flex-direction: column;
  align-items: flex-end;
  border: 2px solid #FFFAFA;
  border-radius: 1.5em;
  width: 40vw;
  padding: 1em;
  background-color: rgba(1, 0, 18, 0.8);
  
`
export const DivTrips = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
`
export const Button = styled.button`
  width: 20vw;
  
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`
export const ButtonTrip = styled.button`
  width: 20vw;

  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`
export const DivButtons = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    gap:2em;
    margin: 2em 0;

`
export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: rgba(13, 11, 74, 0.8);
  text-align: center;
  height: 2em;
  padding: .5em;

`