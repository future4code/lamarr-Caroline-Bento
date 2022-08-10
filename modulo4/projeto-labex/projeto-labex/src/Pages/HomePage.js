import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../Rotas/Coodinator'
import styled from 'styled-components'

const ContainerHome = styled.div `

`
const TitleSite = styled.h1 `
  font-family: 'Source Code Pro', monospace;
  font-style: italic;
  font-size: 3em;
  margin: 0 0 1em 0;
`


function HomePage() {
  const navigate = useNavigate();
  

  
    return (
      <ContainerHome>
        <TitleSite>
          LabeX
        </TitleSite>
        <h1>
            Página inicial
        </h1>
        <button onClick={()=>{RoutePages.tripList(navigate)}}>
            Lista de viagens
        </button>
        <button onClick={()=>{RoutePages.loginPage(navigate)}}>
            Área administrativa
        </button>
      </ContainerHome>
    );
  }
  
  export default HomePage;
  