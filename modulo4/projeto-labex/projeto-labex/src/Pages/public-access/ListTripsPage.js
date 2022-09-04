import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
import {useRequestData} from '../../hooks/useRequestData';
import {ContainerPageTrips,Header, TitleSite, ContainerAllTrips, DivTrips, Button, ButtonTrip, DivButtons, Footer } from '../../stylesPage/styleListTrip'
function ListTripsPage() {
  const navigate = useNavigate();
  const [dataTripList, loadingList, errorTrips] = useRequestData(`${baseUrl}trips`)
 
  const tripList = dataTripList && dataTripList.trips.map((trip) => {
    return (
      <ContainerAllTrips key={trip.id}>
        <h3>
          {trip.name}
        </h3>
        <h4>
          Planeta: {trip.planet} 
        </h4>
        <span>
          Duaração: {trip.durationInDays} dias
        </span>
        <span>
          Data de partida: {trip.date}
        </span>
        <span>
          {trip.description}
        </span>
        
        
      </ContainerAllTrips>
    )
  })
  console.log(tripList)
  return (
    <ContainerPageTrips>
      <Header>
        <TitleSite>
          LabeX.
        </TitleSite>
        
      </Header>
      
    <DivButtons>

      <Button onClick={()=>{RoutePages.toBack(navigate)}}>
            voltar
      </Button>
      <ButtonTrip onClick={()=>{RoutePages.application(navigate)}}>
            inscreva-se aqui!
      </ButtonTrip>
      
    </DivButtons>

      <h2>Viagens disponíveis:</h2>
            
      {loadingList && 'Lista de viagens carregando...'}
      <DivTrips>
        {!loadingList && dataTripList && tripList}
      </DivTrips>

      {!loadingList && !dataTripList && errorTrips}
      
      
      <Footer>
        <p>Todos os direitos reservados. Copyright © 2022.</p>
      </Footer>
      </ContainerPageTrips>
    );
  }
  
  export default ListTripsPage;
  