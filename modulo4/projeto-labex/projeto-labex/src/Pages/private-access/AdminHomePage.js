import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useRequestData} from '../../hooks/useRequestData'
import * as RoutePages from '../../Rotas/Coodinator'
import styled from 'styled-components'

const ContainerAdmin = styled.div `
  header{
    display: flex;
    flex-direction: column;
    h1 {
      width: 100%;
      text-align: center;
      padding: 1em 0 1em 0;
      background-color: rgba(13, 11, 74, 0.8);
      }
      div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 2em 0 0 0;
        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          
        }

      }
    }
    h2{
      margin:2em 0;
      width: 100%;
      text-align: center;
      padding: 1em 0 1em 0;
      background-color: rgba(13, 11, 74, 0.8);
    }
  main {
    display: flex;
    width: 30vw;

    div{
       
    
    }

  }

`
const ListTrip = styled.div `
  border: 2px solid #FFFAFA;
  border-radius: 1.5em;
  padding: 1em;
  background-color: rgba(1, 0, 18, 0.8);
  
  button{
    margin: 1em 1em 0 0;
    width: 10vw;
    cursor: pointer;
    &:hover{
      color: #fff;
      background-color: rgba(56, 59, 87, 0.6);
      transition: .5s;
    }
  }
`
const Button = styled.button`
  
  width: 15vw;
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
       <div>
          <button onClick={() => { RoutePages.tripDetailsPage(navigate) }}>
              Ver mais
          </button>
          <button>
              Deletar
          </button>
        </div>
        
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
     <header>
       <h1>
        Painel administrativo
      </h1>
      <div>
        <Button onClick={() => { RoutePages.toBack(navigate) }}>
          Voltar
        </Button>
        <Button onClick={() => { RoutePages.createTripPage(navigate) }}>
          Criar viagem
        </Button>
        <Button onClick={() => { RoutePages.homePage(navigate) }}>
          Sair
        </Button>
      </div>
     </header>
      <h2>
        Lista de viagens:
      </h2>
    <main>
      {loadingList && 'Lista de viagens carregando...'}
      <div>
        {!loadingList && dataTripList && tripList}
      </div>

      {!loadingList && !dataTripList && errorTrips}
      </main>
      <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
      



    </ContainerAdmin>
  );
}

export default AdminHomePage;
