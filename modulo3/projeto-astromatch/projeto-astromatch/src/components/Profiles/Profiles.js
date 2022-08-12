import React, {useEffect} from 'react';
import styled from 'styled-components'
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import axios from 'axios';

const ContainerProfiles = styled.div `
    width: 25em;
    height:50%;
    margin: 1em; 
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 45em;
    border: solid 1em #FFEBCD;
    border-radius: 5%;
    background-color: #FFEBCD; 
    color: black;
    


    img{
        max-width: 85%;
        max-height: 65%;
        border-radius: 5%;
        
    }
   
`
const NameAge = styled.span`
    margin: 1em 0.2em;
    font-size: 2em;
    justify-items: flex-start;

    
`

const Bio = styled.span `
    flex-wrap: wrap;
    width: 80%;
    font-size: 1em;
    
`

const ButtonCheck = styled.button `
    background: none;
    border: none;
    font-size: 5em;
    color: #008000; 
`
const BoxButtons = styled.div `
    display: flex;
    margin: 3em;
    align-items: flex-end;
    
    gap: 5em;
   

`

const ButtonNoCheck = styled.button `
    background: none;
    border: none;
    font-size: 5.6em;
    color: #B22222;  
`

function Profiles (props) {
    const choosePersonUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline-bento-lamarr/choose-person"
    const id = props.profile.id

    function likePerson() {
        const body = {
            'id': id,
            'choice': true
        }
        axios.post(choosePersonUrl, body)
            .then((response) => {
                props.getProfiles()
                console.log(response.data.isMatch)
                console.log(props.controlMatch)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    

    function deslikePerson () {
        const body = {
            'id': id,
            'choice': false
        }
        axios.post(choosePersonUrl, body)
            .then((response) => {
                console.log("Certo, vamos para o próximo perfil, porque a madame é exigente!")
                console.log(response.data.isMatch)
                props.getProfiles() 
            })
            .catch ((error) => {
                console.log("Deu ruim", error.data)
            })
    }
    console.log(props.profile[0])
    

    return (
        <ContainerProfiles>

            <img
                src={props.profile.photo}
                alt="Foto do perfil do possível amor da sua vida."
            />
            <NameAge>
                {props.profile.name}, {props.profile.age}
            </NameAge>
            
            
            <Bio>
                {props.profile.bio}
            </Bio>
            

            <BoxButtons>
                <ButtonCheck onClick={() => likePerson()}>
                    <FaCheckCircle />
                </ButtonCheck>
                <ButtonNoCheck onClick={() => deslikePerson()}>
                    <RiCloseCircleFill />
                </ButtonNoCheck>
            </BoxButtons>
        </ContainerProfiles>
    )

}


export default Profiles;