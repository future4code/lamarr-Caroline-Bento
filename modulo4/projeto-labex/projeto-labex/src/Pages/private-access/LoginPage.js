import React from 'react';
import {useNavigate} from 'react-router-dom';
import * as RoutePages from '../../Rotas/Coodinator'
import axios from 'axios'
import {useForm} from '../../hooks/useForm'
import { baseUrl } from '../../constants/constants';
import {ContainerForm, Form, Button, Footer} from '../../stylesPage/styleLogin'
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
        <p>Todos os direitos reservados. Copyright © 2022.</p>
      </Footer>
      </ContainerForm>
    );
  }
  
  export default LoginPage;
  