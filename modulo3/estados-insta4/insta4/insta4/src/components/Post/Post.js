import React, {useState} from 'react';
import styled from "styled-components";
import {IconeComContador} from '../IconeComContador/IconeComContador';
import iconeCoracaoBranco from '../../img/favorite-white.svg';
import iconeCoracaoPreto from '../../img/favorite.svg';
import iconeComentario from '../../img/comment_icon.svg';
import {SecaoComentario} from '../SecaoComentario/SecaoComentario';

const PostContainer = styled.div `
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  margin-left: 40vw;

`
const PostHeader = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`
const PostFooter = styled.div `
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
const UserPhoto = styled.img `
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const UserName = styled.p `

`
const PostPhoto = styled.img `
  width: 100%;
`

function Post(props){

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentario, setComentario] =useState("")

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if(curtido) {
      setnumeroCurtidas(numeroCurtidas-1)
    } else {
      setnumeroCurtidas(numeroCurtidas+1)
    }
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} texto={comentario} onChangeComentario={alterarComentario}/>
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  const alterarComentario = (event) => {
    setComentario(event.target.value)
  }

  let iconeCurtida

  if(curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let componenteComentario

  if(comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
  }

  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.photoUser} alt={'Imagem do usuario'}/>
        <UserName>{props.nameUser}</UserName>
      </PostHeader>

      <PostPhoto src={props.postUser} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post