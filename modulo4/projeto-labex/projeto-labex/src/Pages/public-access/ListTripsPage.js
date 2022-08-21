import React from 'react';
import {useNavigate} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
import {useRequestData} from '../../hooks/useRequestData';
import styled from 'styled-components'

const ContainerPageTrips = styled.div `
  
  h1{
    text-align: center;
    padding: 1em 0;
  }
`
const ContainerAllTrips = styled.div `
  margin: 0 0 4em 1em;
  border: 2px solid #FFFAFA;
  width: 80%;
  padding: 1em;
  
`
const Button = styled.button`
  
  margin:2em 1em;
  width: 15%;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #0d0b4a;
    transition: .5s;
  }
`
const ButtonTrip = styled.button`
  
  margin:2em 1em;
  width: 15%;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #0d0b4a;
    transition: .5s;
  }
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #0d0b4a;
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
  