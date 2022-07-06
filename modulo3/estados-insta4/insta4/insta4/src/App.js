import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import fefePerfil from './img/img-o.jpg';
import nandoPerfil from './img/img-o-nando.jpg'
import fefePost from './img/post-fefe.jpg';
import nandoPost from './img/post-o-nando.jpg'



function App() {

  const usersInsta4 = [
    {name:'paulinha', photoUser:'https://picsum.photos/50/50', post:'https://picsum.photos/200/150'},
    {name:'fefe0208', photoUser: fefePerfil, post:fefePost},
    {name:'oNando', photoUser:nandoPerfil, post:nandoPost},
  ]
  
  const arrayUsers = usersInsta4.map((user, index) => {
    return (
      <Post key={index}
         nameUser = {user.name}
         photoUser= {user.photoUser}
         postUser = {user.post}
      />)
    })
    
    return (
      <div className="Container">
        {arrayUsers}
        {console.log(usersInsta4)}
      </div>
    )
}


export default App;
