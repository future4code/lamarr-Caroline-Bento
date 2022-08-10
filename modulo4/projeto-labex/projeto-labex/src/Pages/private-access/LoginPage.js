import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as RoutePages from '../../Rotas/Coodinator'

function LoginPage() {
  const navigate = useNavigate();
    return (
      <div>
        <h1>
            Login de usuário administrativo
        </h1>
       
        <button onClick={()=>{RoutePages.toBack(navigate)}}>
            voltar
        </button>
        <button onClick={()=>{RoutePages.adminHomePage(navigate)}}>
            entrar
        </button>
      </div>
    );
  }
  
  export default LoginPage;
  