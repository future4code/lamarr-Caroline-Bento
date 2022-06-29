import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import fefePerfil from './img/img-o.jpg';
import nandoPerfil from './img/img-o-nando.jpg'
import fefePost from './img/post-fefe.jpg';
import nandoPost from './img/post-o-nando.jpg'

function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'fefe0208'}
            fotoUsuario={fefePerfil}
            fotoPost={fefePost}
          />
          <Post
            nomeUsuario={'oNando'}
            fotoUsuario={nandoPerfil}
            fotoPost={nandoPost}
          />
  </div>
  
)

}


export default App;
