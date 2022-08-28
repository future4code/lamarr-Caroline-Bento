import styled from 'styled-components'

export const ContainerForm = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    margin: .2em 0;
    text-align: center;
  }
`
export const Form = styled.form `
  display: flex;
  margin: 1em 0 3em 0;
  padding: 1.5em;
  width: 30%;
  flex-wrap: wrap;
  border: 2px solid ;
  border-radius: 1em;

  select{
    width: 90%;
    margin: .3em 0;
    padding: .4em ;
    border: none;
    border-radius: 0.5em;
  }
  label{
    margin: .5em 0 0 0;
  }
  input {
    width: 90%;
    margin: .3em 0;
    padding: .4em ;
    border: none;
    border-radius: 0.5em;
  }
`
export const Button = styled.button`
  width: 10vw;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`
export const DivButton = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 3em;
    margin-top: 1em;
`

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: rgba(13, 11, 74, 0.8);
  text-align: center;
  height: 2em;
  padding: .5em 0 0 0;

`