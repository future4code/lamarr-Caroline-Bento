import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { baseUrl } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import * as RoutePages from '../../Rotas/Coodinator'
import styled from 'styled-components'

const ContainerForm = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    margin: 1.3em 0;
    text-align: center;
  }
`
const Form = styled.form `
  display: flex;
  margin: 1em;
  padding: 1.5em;
  width: 30%;
  flex-wrap: wrap;
  border: 2px solid ;
  border-radius: 1em;

  select{
    width: 90%;
    margin: .3em 0;
    padding: .4em ;
    border: none;
    border-radius: 0.5em;
  }
  label{
    margin: .5em 0 0 0;
  }
  input {
    width: 90%;
    margin: .3em 0;
    padding: .4em ;
    border: none;
    border-radius: 0.5em;
  }
`
const Button = styled.button`
  margin:2em 3.5em;
  width: 20%;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: rgba(56, 59, 87, 0.6);
    transition: .5s;
  }
`

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
          
          <Button
          type='onSubmit'
          >
              criar
          </Button>
          <Button onClick={()=>{RoutePages.toBack(navigate)}}>
              voltar
          </Button>
        </Form>
       
      </ContainerForm>
      
    );
  }
  
  export default CreateTripPage;
  