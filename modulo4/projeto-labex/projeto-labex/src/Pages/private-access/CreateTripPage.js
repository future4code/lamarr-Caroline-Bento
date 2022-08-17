import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { baseUrl } from '../../constants/constants';
import { useForm } from '../../hooks/useForm';
import * as RoutePages from '../../Rotas/Coodinator'
function CreateTripPage() {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({name:'', planet:'', date:'', description: '', durationInDays: ''})
  const createTrips = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}trips`, form)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.message))

    clear()
  }
    return (
      <div>
        <h1>
          Crie uma nova viagem
        </h1>
        <form onSubmit={createTrips}>
          <label htmlFor='name'>
            Viagem:
          </label>
          <input 
          type='text' 
          name='name'
          id='name'
          value={form.name}
          onChange={onChange}
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
          
          <button type='onSubmit'>
              criar
          </button>
        </form>
        <button onClick={()=>{RoutePages.toBack(navigate)}}>
              cancelar
          </button>
       
      </div>
      
    );
  }
  
  export default CreateTripPage;
  