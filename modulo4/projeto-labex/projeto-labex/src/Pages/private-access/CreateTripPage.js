import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { baseUrl } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import * as RoutePages from '../../Rotas/Coodinator'
import {ContainerForm, Form, Button, DivButton, Footer} from '../../stylesPage/styleCreateTrip'

function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({name:'', planet:'', date:'', description: '', durationInDays: ''})
  const createTrips = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    axios.post(`${baseUrl}trips`, form, {
      headers: {
        auth: token
      }})
      .then((response) => {
        alert('Viagem criada com sucesso!')
        console.log(response.data)})

      .catch((error) => {
        alert('Algo deu errado ao criar a viagem.')
        console.log(error.message)})

    clear()
  }
    return (
      <ContainerForm>
        <h1>
          Crie uma nova viagem
        </h1>
        <Form onSubmit={createTrips}>
          <label htmlFor='name'>
            Viagem:
          </label>
          <input 
          type='text' 
          name='name'
          id='name'
          value={form.name}
          onChange={onChange}
          pattern='^.{4,}$'
          title='Min. de 4 caracteres'
          required
          >
          </input>
          <label htmlFor='planet'>
            Planeta:
          </label>
          <input 
          type='text' 
          name='planet'
          id='planet'
          value={form.planet}
          onChange={onChange}
          required
          >
          </input>
          <label htmlFor='date'>
            Data:
          </label>
          <input 
          type= 'date' 
          name='date'
          id='date'
          value={form.date}
          onChange={onChange}
          min={2022}
          required
          >
          </input>
          <label htmlFor='description'>
            Descrição:
          </label>
          <input 
          type= 'text' 
          name='description'
          id='description'
          value={form.description}
          onChange={onChange}
          required
          >
          </input>
          <label htmlFor='durationInDays'>
            Duração da viagem:
          </label>
          <input 
          type= 'text' 
          name='durationInDays'
          id='durationInDays'
          value={form.durationInDays}
          onChange={onChange}
          required
          >
          </input>
          <DivButton>
            <Button
            type='onSubmit'
            >
                criar
            </Button>
            <Button onClick={()=>{RoutePages.toBack(navigate)}}>
                voltar
            </Button>
          </DivButton>
        
        </Form>
        <Footer>
          <p>Todos os direitos reservados. Copyright © 2022.</p>
        </Footer>
      </ContainerForm>
      
    );
  }
  
  export default CreateTripPage;
  