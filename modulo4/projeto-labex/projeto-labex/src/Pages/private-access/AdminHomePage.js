import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as RoutePages from '../../Rotas/Coodinator'

function AdminHomePage() {
  const navigate = useNavigate();
    return (
      <div>
        <h1>
            Painel administrativo
        </h1>
        <button onClick={()=>{RoutePages.toBack(navigate)}}>
            Voltar
        </button>
        <button onClick={()=>{RoutePages.createTripPage(navigate)}}>
            Criar viagem
        </button>
        <button onClick={()=>{RoutePages.homePage(navigate)}}>
            Sair
        </button>

        <h2>
          Lista de viagens
        </h2>

        <div>
          <h3>
            Viagem 1
          </h3>
          <button onClick={()=>{RoutePages.tripDetailsPage(navigate)}}>
            Ver mais
          </button>
          <button>
            Deletar
          </button>
        </div>
        
        

      </div>
    );
  }
  
  export default AdminHomePage;
  