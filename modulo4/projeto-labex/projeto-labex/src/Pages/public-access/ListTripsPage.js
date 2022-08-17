import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
import {useRequestData} from '../../hooks/useRequestData';

function ListTripsPage() {
  const navigate = useNavigate();
  const [dataTripList, loadingList, errorTrips] = useRequestData(`${baseUrl}trips`)
 
  const tripList = dataTripList && dataTripList.trips.map((trip) =>{
    return (
      <li key={trip.id}>{trip.name}</li>
    )
  })
  console.log(tripList)
  return (
    <div>
      <h1>
        Escolha sua viagem dos sonhos!
      </h1>

      {loadingList && 'Lista de viagens carregando...'}
      <ul>
        {!loadingList && dataTripList && tripList}
      </ul>

      {!loadingList && !dataTripList && errorTrips}
     


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
  