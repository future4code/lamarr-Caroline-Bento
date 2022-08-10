import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'


function ListTripsPage() {
  const navigate = useNavigate();
    
  return (
      <div>
        <h1>
            Escolha sua viagem dos sonhos!
        </h1>
        <button onClick={()=>{RoutePages.toBack(navigate)}}>
            voltar
        </button>
        <button onClick={()=>{RoutePages.application(navigate)}}>
            Viaje conosco
        </button>
      </div>
    );
  }
  
  export default ListTripsPage;
  