import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
function TripDetailsPage() {
  useProtectedPage()
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    // const id = 
    axios.get(
      `${baseUrl}trip/`, {
      headers: {
        auth: token
      }
    }
    )
      .then((response) => {
        console.log(response.data)
      }
      ).catch((error) => {
        console.log(error.response)
      })
  }, [])
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
  