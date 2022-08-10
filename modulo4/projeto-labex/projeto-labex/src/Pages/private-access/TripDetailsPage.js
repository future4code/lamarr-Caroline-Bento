import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
function TripDetailsPage() {
  const navigate = useNavigate()
    return (
      <div>
        <h1>
            Detalhes de viagens
        </h1>
        <button onClick={()=>{RoutePages.toBack(navigate)}}>
          Ver menos
        </button>
      </div>
    );
  }
  
  export default TripDetailsPage;
  