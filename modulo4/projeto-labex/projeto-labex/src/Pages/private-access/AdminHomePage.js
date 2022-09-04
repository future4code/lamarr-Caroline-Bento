import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import {useRequestData} from '../../hooks/useRequestData'
import * as RoutePages from '../../Rotas/Coodinator'
import {ListTrip, ContainerAdmin, DivListTrips, Button, DivButton, Footer} from '../../stylesPage/styleAdmin'

function AdminHomePage() {
  useProtectedPage()

  const navigate = useNavigate();
  const [dataTripList, loadingList, errorTrips, getTrips] = useRequestData(`${baseUrl}trips`)
  

  const deleteTrip = (id, name) => {

    const token = localStorage.getItem("token")

    if (window.confirm(`Você tem certeza que quer deletar a viagem ${name}?`)) {
        axios.delete(`${baseUrl}trips/${id}`, {
          headers:{
              auth: token
          }
      }) 
        .then((response) => {
            console.log(response.data)
            alert(`Viagem ${name} deletada`)
            getTrips()
        })
        .catch((error) => {
            console.log(error.message)
            alert("Algo deu errado")
        })
    }
}
    const tripDetails = (id) => {
      localStorage.setItem("id", id)
      navigate(`/admin/trip/${id}`)
    }

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
       <DivButton>
          <button onClick={() => tripDetails(trip.id)}>
              Ver mais
          </button>
          <button onClick={() => deleteTrip(trip.id, trip.name)}>
              Deletar
          </button>
        </DivButton>
        
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
      <DivListTrips>
        {!loadingList && dataTripList && tripList}
      </DivListTrips>

      {!loadingList && !dataTripList && errorTrips}
      </main>
      <Footer>
        <p>Todos os direitos reservados. Copyright © 2022.</p>
      </Footer>
      



    </ContainerAdmin>
  );
}

export default AdminHomePage;
