import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
function CreateTripPage() {
  const navigate = useNavigate()
    return (
      <div>
        <h1>
          Crie uma nova viagem
        </h1>
        <button onClick={()=>{RoutePages.toBack(navigate)}}>
            cancelar
        </button>
        <button>
            criar
        </button>
      </div>
      
    );
  }
  
  export default CreateTripPage;
  