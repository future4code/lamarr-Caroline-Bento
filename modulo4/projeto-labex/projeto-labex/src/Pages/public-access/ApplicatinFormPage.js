import React from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import styled from 'styled-components'
import {useForm} from '../../hooks/useForm'
import { baseUrl } from '../../constants/constants';
import axios from 'axios';
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
  margin: 1em 0;
  padding: 1.5em;
  width: 35%;
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
  margin:2em 1em;
  width: 20%;
  cursor: pointer;
  &:hover{
    color: #fff;
    background-color: #0d0b4a;
    transition: .5s;
  }
`

function ApplicationFormPage() {
  const navigate = useNavigate();
  const pathParams = useParams();
  const [form, onChange, clear] = useForm({name:'', age:'', profession:'', country:'', applicationText: ''})
  
  const applicationTrip = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}trips/${pathParams.id}/apply`, form)
    .then((response) => {
      alert('Pronto! Inscrição finalizada e enviada. Boa sorte!')
      console.log(response.message)
    })
    .catch ((error) => {
      alert('Ops... Algo deu errado. Tente novamente, por favor.')
      console.log(error.message)})
      clear()
  }

    return (
      <ContainerForm>
        <h1>
            Inscreva-se para sua viagem dos sonhos
        </h1>
        <Form onSubmit={applicationTrip}>
        
          <label htmlFor="nameUser">
            Nome Completo:
          </label>
          <input 
          id='nameUser'
          name="name"
          type="text"
          value = {form.name}
          onChange={onChange}
          
          required
          />
          <label htmlFor="ageUser">
            Idade: (min. 18 anos)
          </label>
          <input 
          id="ageUser"
          name = "age"
          type= "number"
          min={18}
          value = {form.age}
          onChange={onChange}
          required
          />
          <label htmlFor = "profession">
            Profissão:
          </label>
          <input
          id="profession"
          name="profession"
          type="text"
          value = {form.profession}
          onChange={onChange}
          pattern='^.{6,}$'
          title='Min. de 6 caracteres'
          required
          />
          <label htmlFor = "country">
            País onde mora
          </label>
          <input
          name="country"
          id="country"
          type="text"
          value = {form.country}
          onChange={onChange}
          
          required
          />
          <label htmlFor = "applicationText">
            Diga, em poucas palavras, o por que de ser escolhido:
          </label>
          <input
          name="applicationText"
          id="applicationText"
          value = {form.applicationText}
          onChange={onChange}

          required
          />
        <Button onClick={()=>RoutePages.toBack(navigate)}>
            voltar
        </Button>
        <Button type="submit">
            enviar
        </Button>
        </Form>
      </ContainerForm>
    );
  }
  
  export default ApplicationFormPage;