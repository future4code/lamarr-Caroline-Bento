import React, {useState} from 'react';
import Post from './components/Post/Post';
import fefePerfil from './img/img-o.jpg';
import nandoPerfil from './img/img-o-nando.jpg'
import fefePost from './img/post-fefe.jpg';
import nandoPost from './img/post-o-nando.jpg'
import styled from 'styled-components'

const Form = styled.form `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em;
  gap: 0.8em;
    
  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 1em;
    border-radius: 0.5em;
    border: none;
    background-color: #F0F8FF;
    font-family: verdana;
  }

  button {
    padding: 1em;
    border-radius: 0.5em;
    border: none;
    background-color: #5F9EA0;
    color: white;
    font-family: verdana;
  }
`

function App() {
  const [inputName, setInputName] = useState('');
  const [inputPhoto, setInputPhoto] = useState('');
  const [inputPost, setInputPost] = useState('');
  const [usersInsta4, setUsersInsta4] = useState ([
    {name:'paulinha', photoUser:'https://picsum.photos/50/50', post:'https://picsum.photos/200/150'},
    {name:'fefe0208', photoUser: fefePerfil, post:fefePost},
    {name:'oNando', photoUser:nandoPerfil, post:nandoPost},
  ]);
  
  const handleInputName = (e) => {
    setInputName(e.target.value)
  }
  const handleInputPhoto = (e) => {
    setInputPhoto(e.target.value)
  }
  const handleInputPost = (e) => {
    setInputPost(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault();

    const newPerson = {name: inputName, photoUser: inputPhoto, post: inputPost}
    const newPersonAdd= [...usersInsta4, newPerson];
    setUsersInsta4(newPersonAdd)

  }

  
  const arrayUsers = usersInsta4.map((user, index) => {
    return (
      <Post key={index}
         nameUser = {user.name}
         photoUser= {user.photoUser}
         postUser = {user.post}
      />)
    })
    
    return (
      <div className = "Container">
        <Form>
          <label>Name:</label>
          <input 
          placeholder = "Username here..." 
          type ="text"
          value = {inputName}
          onChange = {handleInputName}
          />
          <label>Profile photo:</label>
          <input 
          placeholder = "Profile photo here..." 
          type ='text'
          value = {inputPhoto}
          onChange = {handleInputPhoto}
          />
          <label>Post:</label>
          <input 
          placeholder = "Post here..." 
          type ='text'
          value = {inputPost}
          onChange = {handleInputPost}
          />
          <button onClick={addPerson}>add</button>
        </Form>

        {arrayUsers}
        {console.log(usersInsta4)}
      </div>
    )
}


export default App;
