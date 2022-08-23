import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as RoutePages from '../../Rotas/Coodinator'
import axios from 'axios'
import {useForm} from '../../hooks/useForm'
import { baseUrl } from '../../constants/constants';
import styled from 'styled-components'

const ContainerForm = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;
    padding: 1em 0;
    background-color: rgba(13, 11, 74, 0.8);
    width: 100%;
  }
`
const Form = styled.form `
  display: flex;
  margin: 8em 0 1em 0;
  padding: 1.5em;
  width: 30%;
  flex-wrap: wrap;
  border: 2px solid ;
  border-radius: 1em;
  background-color: rgba(1, 0, 18, 0.8);
 
  label{
    margin: .5em 0 0 0;
  }
  input {
    width: 90%;
    margin: .3em 0;
    padding: .4em;
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
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: rgba(13, 11, 74, 0.8);
  text-align: center;
  height: 2em;
  padding: .5em;

`
function LoginPage() {
  const navigate = useNavigate();
  const [form,onChange,clear] = useForm({ email: '', password: '' });
  const loginUser = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}login`, form)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        navigate('/admin/trip/list')
        console.log(response.message)})
      .catch((error) => {
        alert('email não cadastrado. Por favor, confira os dados inseridos.')
        console.log(error.message)
      })

    clear()
  }
    return (
      <ContainerForm>
        <h1>
            Login de usuário administrativo
        </h1>
       
        <Form onSubmit={loginUser}>
          <label htmlFor='email'>
            E-mail:
          </label>
          <input
            name='email'
            id='email'
            value={form.email}
            type='email'
            onChange={onChange}
            required
          >
          </input>
          <label htmlFor='password'>
            Password:
          </label>
          <input
            name='password'
            id='password'
            value={form.password}
            type='password'
            pattern='^.{3,}$'
            title='Mínimo de 3 caracteres.'
            onChange={onChange}

            required
          >
          </input>
          <Button type='submit' >
            entrar
          </Button>
        <Button onClick={()=>{RoutePages.toBack(navigate)}}>
            voltar
        </Button>
        </Form>
        <Footer>
        <p>Todos os direitos reservados.</p>
      </Footer>
        
      </ContainerForm>
    );
  }
  
  export default LoginPage;
  