import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useRequestData} from '../../hooks/useRequestData'
import * as RoutePages from '../../Rotas/Coodinator'
import styled from 'styled-components'

const ContainerAdmin = styled.div `
  h1, h2 {
    margin: 1em 0 1em 3em;
  }
`
const ListTrip = styled.div `
  margin: 0 0 4em 5em;
  border: 2px solid #FFFAFA;
  width: 80%;
  padding: 1em;
  button{
    margin:2em 8em;
    width: 20%;
    cursor: pointer;
    &:hover{
      color: #fff;
      background-color: #0d0b4a;
      transition: .5s;
    }
  }
`
const Button = styled.button`
  
  margin:2em 4em;
  width: 20%;
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
  padding: .5em 0 0 0;

`

function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate();
  const [dataTripList, loadingList, errorTrips] = useRequestData(`${baseUrl}trips`)
 
  const tripList = dataTripList && dataTripList.trips.map((trip) => {
    return (
      <ListTrip key={trip.id}>
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
        <button onClick={() => { RoutePages.tripDetailsPage(navigate) }}>
          Ver mais
        </button>
        <button>
          Deletar
        </button>
        
      </ListTrip>
    )
  })

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get(
      `${baseUrl}trips`, {
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
    <ContainerAdmin>
      <h1>
        Painel administrativo
      </h1>
      <Button onClick={() => { RoutePages.toBack(navigate) }}>
        Voltar
      </Button>
      <Button onClick={() => { RoutePages.createTripPage(navigate) }}>
        Criar viagem
      </Button>
      <Button onClick={() => { RoutePages.homePage(navigate) }}>
        Sair
      </Button>

      <h2>
        Lista de viagens:
      </h2>

      <div>
      {loadingList && 'Lista de viagens carregando...'}
      <div>
        {!loadingList && dataTripList && tripList}
      </div>

      {!loadingList && !dataTripList && errorTrips}
        
        <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
      </div>



    </ContainerAdmin>
  );
}

export default AdminHomePage;
