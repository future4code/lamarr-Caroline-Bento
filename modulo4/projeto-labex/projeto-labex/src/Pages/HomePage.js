import React from 'react';
import { useNavigate } from 'react-router-dom'
import * as RoutePages from '../Rotas/Coodinator'
import {ContainerHome, Header, TitleSite, Button, Footer} from '../stylesPage/styleHome'

function HomePage() {
  const navigate = useNavigate();



  return (
    <ContainerHome>
      <Header>
        <TitleSite>
          LabeX.
        </TitleSite>
        <p>
          Sua viagem dos sonhos está aqui.
        </p>
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
        <p>Todos os direitos reservados. Copyright © 2022.</p>
      </Footer>
    </ContainerHome>
  );
}

export default HomePage;
