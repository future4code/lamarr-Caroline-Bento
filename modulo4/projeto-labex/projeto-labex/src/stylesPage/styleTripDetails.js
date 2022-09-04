import styled from 'styled-components'

export const ContainerTrip = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 3em ;
    h2{
        text-align: center;
        margin: .5em 0 ;
    }
`
export const Header = styled.header `
    text-align: center;
    margin: 2em 0;

`

export const TripSelect = styled.div `
    border: 2px solid;
    border-radius: 1em;
    padding: 2em;
    width: 70vw;
    h3{
        text-align: center;
    }
`
export const DivTrip = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivAllCandidates = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    align-items: center;
    justify-items: center;
`
export const DivCandidate = styled.div `
   
    border: 1px solid;
    border-radius: 1em;
    padding: 1em;
    width: 30vw;  
    
`
export const Button = styled.button `
    width: 15vw;
    margin-top: 1em;
    font-size: .9em;
    cursor: pointer;
     &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`
export const DivButton = styled.div `
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