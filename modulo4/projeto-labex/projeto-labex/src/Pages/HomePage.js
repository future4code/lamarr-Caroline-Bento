import React from 'react';
import { useNavigate } from 'react-router-dom'
import * as RoutePages from '../Rotas/Coodinator'
import styled from 'styled-components'


const ContainerHome = styled.div`
display: flex;
flex-direction:column;
align-items: center;

  
  main{
    margin: 3em 0 0 0;
    text-align: center;
    
    h1{
      margin: 1em 0 1em 0;
    }
    h2{
      margin: 1em 0 1em 0;
    }
}
  `
const Button = styled.button`
  flex-wrap: wrap;
  margin:2em 1em 0 0;
  width: 50%;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`

const Header = styled.header`
    height: 14vh;
    margin: 0;
    padding: 1em 0;
    text-align: center;
    background-color:rgba(13, 11, 74, 0.8);
`
const TitleSite = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-style: italic;
  font-size: 3em;
  margin: 0 0 1em 0;
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: rgba(13, 11, 74, 0.8);
  text-align: center;
  height: 2em;
  padding: .5em;
`

function HomePage() {
  const navigate = useNavigate();



  return (
    <ContainerHome>
      <Header>
        <TitleSite>
          LabeX
        </TitleSite>
      </Header>
      <main>
        <h1>
          Página inicial
        </h1>
        <h2>
          Seja bem vinde à agência de viagem sem fronteiras!
        </h2>
        <Button onClick={() => { RoutePages.tripList(navigate) }}>
          Lista de viagens
        </Button>
        <Button onClick={() => { RoutePages.loginPage(navigate) }}>
          Área administrativa
        </Button>
      </main>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </ContainerHome>
  );
}

export default HomePage;
