import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'

function ApplicationFormPage() {
  const navigate = useNavigate();

    return (
      <div>
        <h1>
            Preencha o formulário
        </h1>
        <button onClick={()=>RoutePages.toBack(navigate)}>
            voltar
        </button>
        <button>
            enviar
        </button>
      </div>
    );
  }
  
  export default ApplicationFormPage;