import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import * as RoutePages from '../../Rotas/Coodinator'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/constants';
import axios from 'axios';
import { useRequestData } from '../../hooks/useRequestData'
import { ContainerForm, Form, DivButton, Button, Footer } from '../../stylesPage/styleApplication'

function ApplicationFormPage() {
  const navigate = useNavigate();
  const pathParams = useParams();
  const [form, onChange, clear] = useForm({ name: '', age: '', profession: '', country: '', applicationText: '' })


  const applicationTrip = (e) => {
    e.preventDefault()

    axios.post(`${baseUrl}trips/${pathParams.id}/apply`, form)
      .then((response) => {
        alert('Pronto! Inscrição finalizada e enviada. Boa sorte!')
        console.log(response.message)
      })
      .catch((error) => {
        alert('Ops... Algo deu errado. Tente novamente, por favor.')
        console.log(error.message)
      })
    clear()
  }
  const [dataTrip] = useRequestData(
    `${baseUrl}trips`
  );
  const tripsSelect = dataTrip && dataTrip.trips.map((data) => {
    return <option key={data.id} value={data.id}>{data.planet} - {data.name}</option>
  })

  return (
    <ContainerForm>
      <h1>
        Inscreva-se para sua viagem dos sonhos
      </h1>
      <Form onSubmit={applicationTrip}>
        <label htmlFor="select">
          Escolha sua viagem:
        </label>
        <select id='select'>
          <option>Escolha uma opção</option>
          {tripsSelect}
        </select>

        <label htmlFor="nameUser">
          Nome Completo:
        </label>
        <input
          id='nameUser'
          name="name"
          type="text"
          value={form.name}
          onChange={onChange}

          required
        />
        <label htmlFor="ageUser">
          Idade: (min. 18 anos)
        </label>
        <input
          id="ageUser"
          name="age"
          type="number"
          min={18}
          value={form.age}
          onChange={onChange}
          required
        />
        <label htmlFor="profession">
          Profissão:
        </label>
        <input
          id="profession"
          name="profession"
          type="text"
          value={form.profession}
          onChange={onChange}
          pattern='^.{3,}$'
          title='Min. de 6 caracteres'
          required
        />
        <label htmlFor="country">
          País onde mora
        </label>
        <input
          name="country"
          id="country"
          type="text"
          value={form.country}
          onChange={onChange}

          required
        />
        <label htmlFor="applicationText">
          Diga, em poucas palavras, o por que de ser escolhido:
        </label>
        <input
          name="applicationText"
          id="applicationText"
          value={form.applicationText}
          onChange={onChange}

          required
        />
        <DivButton>
          <Button onClick={() => RoutePages.toBack(navigate)}>
            voltar
          </Button>
          <Button type="submit">
            enviar
          </Button>
        </DivButton>
      </Form>
      <Footer>
        <p>Todos os direitos reservados. Copyright © 2022.</p>
      </Footer>
    </ContainerForm>
  );
}

export default ApplicationFormPage;