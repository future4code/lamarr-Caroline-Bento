import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
import {useRequestData} from '../../hooks/useRequestData';
import styled from 'styled-components'

const ContainerPageTrips = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;
    padding: 1em 0;
    background-color: rgba(13, 11, 74, 0.8);
    width: 100%;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
  
`
const ContainerAllTrips = styled.div `
  display: flex;
  margin: 0 0 4em 0;
  flex-direction: column;
  align-items: flex-end;
  border: 2px solid #FFFAFA;
  border-radius: 1.5em;
  width: 40%;
  padding: 1em;
  background-color: rgba(1, 0, 18, 0.8);
  
`
const Button = styled.button`
  
  margin:2em 1em;
  width: 20vw;
  
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`
const ButtonTrip = styled.button`
  
  margin:2em 1em;
  width: 20vw;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: rgba(13, 11, 74, 0.8);
  text-align: center;
  height: 2em;
  padding: .5em;

`
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
        <ButtonTrip onClick={()=>{RoutePages.application(navigate)}}>
            Viaje conosco
        </ButtonTrip>
        
      </ContainerAllTrips>
    )
  })
  console.log(tripList)
  return (
    <ContainerPageTrips>
      <h1>
        Escolha sua viagem dos sonhos!
      </h1>

      <Button onClick={()=>{RoutePages.toBack(navigate)}}>
            voltar
      </Button>
      
      {loadingList && 'Lista de viagens carregando...'}
      <div>
        {!loadingList && dataTripList && tripList}
      </div>

      {!loadingList && !dataTripList && errorTrips}
           
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
      </ContainerPageTrips>
    );
  }
  
  export default ListTripsPage;
  