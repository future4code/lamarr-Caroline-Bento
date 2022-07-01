import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../img/logo-Labzap.jpg';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    
`
 const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Titulo = styled.h1`
    font-size: 2em;
`

const Img = styled.img `
    width: 5%;
    height: 10%;
`
const Main = styled.main `
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    
    `
const Conteudo = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    margin-top: 65vh
    `
const ConteudoLaranja = styled.div `
    background-color: orange;
    height: 100%;
    padding:100% 0;
`

const Input = styled.input `
    margin:1em;
    padding: 0.3em;
    width: 45%;
    border-radius: 0.5em;
    border: 1px solid;
    
`
const InputRemetente = styled.input `
    margin:0 1em;
    padding: 0.3em;
    width: 20%;
    border-radius: 0.5em;
    border: 1px solid
`
const Label = styled.label `
    font-weight: 400;
`
const Button = styled.button `
    font-weight: 700;
    padding: 0.5em;
    border: none;
    border-radius: 0.5em;
    background-color: orange;
    cursor: pointer;
`
const Footer = styled.footer `
    background-color: gray;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;

    p{
        font-weight: 600;
    }
    
`


function LabZap() {
    
    return (
        <Container>
            <Header> 
                <Img src={logo}  alt="logo LabZap" />
                <Titulo>LabZap</Titulo>
            </Header>
            <Main>
                <ConteudoLaranja></ConteudoLaranja>
                <Conteudo>
                <Label for="remetente">Remetente: </Label>
                <InputRemetente type="text" id="rementente"></InputRemetente>
                <Label for="mensagem">Msg:</Label>
                <Input type="text" id="mensagem"></Input>
                <Button type="submit" id="enviar">Enviar mensagem</Button>
                </Conteudo>
                <ConteudoLaranja></ConteudoLaranja>
            </Main>
            <Footer>
                <p>
                    Copyright ® 2022 Caroline Ávila All rigths reserved.
                    R. Paos Leme, 215, Conjunto 820 Pinheiros, CEP 05424-150.
                </p>
            </Footer>
        </Container>
    )
}

export default LabZap;