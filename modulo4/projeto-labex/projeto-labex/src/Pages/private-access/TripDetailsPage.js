import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import * as RoutePages from '../../Rotas/Coodinator'
import {baseUrl} from '../../constants/constants'
import {ContainerTrip, Header, TripSelect, DivTrip, DivCandidate, DivAllCandidates, Button, DivButton, Footer } from '../../stylesPage/styleTripDetails'

function TripDetailsPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const pathParams = useParams()
  const [tripDetails, setTripDetails] = useState([])
 

  useEffect(() => {
      axios.get(`${baseUrl}trip/${pathParams.id}`,
      {
          headers: {
              auth: localStorage.getItem("token")
          }
      }).then(response => {
          setTripDetails([response.data.trip])
          console.log(response.data.trip)
          })
  }, [])

  const header = {
      headers: {          
          'auth': localStorage.getItem("token")
      }
  }

  const tripRender = tripDetails && tripDetails.map((item, index) => {

      const decideCandidate = (id, choice) => {
          const body = {"approve": choice}

          axios.put(`${baseUrl}trips/${pathParams.id}/candidates/${id}/decide`,
          body, header)
          .then(response =>{
              {body.approve ? alert('Candidate aprovade!') : alert('Candidate reprovade!')}
              console.log(response.data)
          }).catch(error => {
              console.log(error.response.data.message)
              alert("Algo deu errado. Tente de novo.")
          })
      }

      return (
          <TripSelect key={index}>
              <h3>{item.name}</h3>
              <p>Destino: {item.planet}</p>
              <p>Duração: {item.durationInDays} dias</p>
              <h2>Inscritos:</h2>
              <DivAllCandidates>
              {item.candidates.map((item, index) =>
                
                  <DivCandidate key={index}>
                    <h3>{item.name}</h3> 
                    <p>idade: {item.age} anos</p>
                    <p>profissão: {item.profession}</p>
                    <p>país: {item.country}</p>
                    <p>motivo: {item.applicationText}</p>
                    <DivButton>                    
                      <Button onClick={()=>decideCandidate(item.id, true)}>Aprovar</Button>
                      <Button onClick={()=>decideCandidate(item.id, false)}>Reprovar</Button>
                    </DivButton>  
                  </DivCandidate>
               )}
              </DivAllCandidates>
              <h2>Aprovados:</h2>
              <DivAllCandidates>
              {item.approved.map((item, index) =>
                  
                  <DivCandidate key={index}>
                    <h3>{item.name}</h3> 
                    <p>idade: {item.age} anos</p>
                    <p>profissão: {item.profession}</p>
                    <p>país: {item.country}</p>
                  </DivCandidate>
              )}
             </DivAllCandidates>
          </TripSelect>
      )
  })

  return (
      <ContainerTrip>
        <Header>
          <h1>Detalhes da viagem</h1>
          <Button onClick={()=>{RoutePages.toBack(navigate)}}>
            voltar
         </Button>
        </Header>
          <DivTrip>
              {tripRender}
          </DivTrip>
      <Footer>
        <p>Todos os direitos reservados. Copyright © 2022.</p>
      </Footer>
      </ContainerTrip>
  );
       
   

  }
  
  export default TripDetailsPage;
  