import styled from 'styled-components'

export const ContainerAdmin = styled.div `
  header{
    display: flex;
    flex-direction: column;
    h1 {
      width: 100%;
      text-align: center;
      padding: 1em 0 1em 0;
      background-color: rgba(13, 11, 74, 0.8);
      }
      div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 2em 0 0 0;
        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          
        }

      }
    }
    h2{
      margin:2em 0;
      width: 100%;
      text-align: center;
      padding: 1em 0 1em 0;
      background-color: rgba(13, 11, 74, 0.8);
    }


`
export const ListTrip = styled.div `
  border: 2px solid #FFFAFA;
  border-radius: 1.5em;
  padding: 1em;
  background-color: rgba(1, 0, 18, 0.8);
  width: 35vw;;
  button{
    margin: 1em 1em 0 0;
    width: 15vw;
    cursor: pointer;
    &:hover{
      color: #fff;
      background-color: rgba(56, 59, 87, 0.6);
      transition: .5s;
    }
  }
`
export const DivListTrips = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3em;
    align-items: center;
    justify-items: center;
    margin-bottom: 3em;
`
export const Button = styled.button`
  
  width: 15vw;
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
  padding: .5em 0 0 0;

`