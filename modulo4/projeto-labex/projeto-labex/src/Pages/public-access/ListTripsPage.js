import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
import useRequestData from '../../hooks/useRequestData';

function ListTripsPage() {
  const navigate = useNavigate();
  
  const [dataPublicTrips, loadingTrips, erroTrip] = useRequestData(`${baseUrl}trips`)

  const tripPublic = dataPublicTrips&&dataPublicTrips.map((trip) => {
    return <ul>{trip.name}</ul>
  })
  return (
      <div>
        <h1>
            Escolha sua viagem dos sonhos!
        </h1>
       <p>
       {loadingTrips&&'calma aí que tá carregando...'}
      </p> 
       <ul>
          {!loadingTrips&&dataPublicTrips&&tripPublic}
       </ul>
      <p>
      {!loadingTrips&&dataPublicTrips&&erroTrip}
      </p>
        

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
  