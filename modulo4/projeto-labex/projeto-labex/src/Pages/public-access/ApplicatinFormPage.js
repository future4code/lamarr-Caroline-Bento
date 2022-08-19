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
        <form>
          <label htmlFor="nameUser">
            Nome
          </label>
          <input 
          name="nameUSer"
          type="text"
          />
          <label htmlFor="ageUser">
            Idade
          </label>
          <input 
          name = "ageUser"
          type= "number"
          min={18}
          />
        </form>
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