import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useRequestData} from '../../hooks/useRequestData'
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
function TripDetailsPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const {id} = useParams()
 
  

  const [detailTrip, loading, errorTrip] = useRequestData(`${baseUrl}trip/${id}`)
  useEffect(() => {
    const token = localStorage.getItem('token')
   
    axios.get(
      `${baseUrl}trip/${id}`, {
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

  const listDatailTrip =   detailTrip && detailTrip.trip.map((trip) => {
    return (
      <div key={trip.id}>
        <h3>
          {trip.name}
        </h3>
        <h4>
          {trip.planet} 
        </h4>
        <p>
          {trip.durationInDays}
        </p>
        <p>
          {trip.date}
        </p>
        <p>
          {trip.description}
        </p>
      </div>
    )
  })
    return (
      <div>
        <h1>
            Detalhes de viagens
        </h1>
        
        {loading && 'Carregando viagem...'}
        <div>
          {!loading && detailTrip && listDatailTrip}
        </div>
        {!loading && !detailTrip && errorTrip}

        <button onClick={()=>{RoutePages.toBack(navigate)}}>
          Ver menos
        </button>
      </div>
    );
  }
  
  export default TripDetailsPage;
  