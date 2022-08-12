import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { RiDeleteBin6Line } from "react-icons/ri";


const ContainerAllMatches = styled.div `
    color: #000000;
    button{
        font-size: 3em;
        background: none;
        color: #FFEBCD;
        border: none;
        display: flex;
        justify-items: flex-end;
        align-items: flex-end;
    }
    
`

const ContainerMatches = styled.div `
    background-color: #FFEBCD; 
    width: 15em;
    display: flex;
    flex-direction: column;
    border: 2em solid #FFEBCD;
    margin: 1em 0;
    border-radius: 5%;
`

function Matches (props) {
    const matchesUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline-bento-lamarr/matches"
    const matchesClearUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline-bento-lamarr/clear'
   
    const putMatches =  axios.put(matchesClearUrl)

    const [matchList, setMatchList] = useState([])
    
    function listMatches(){
        axios.get(matchesUrl)
        .then((response) => {
            setMatchList(response.data.matches)
            console.log(response.data.matches)
            
        })
        .catch((error) => {
            console.log("Deu ruim aqui. Erro:", error.message)
        })

    }
    useEffect(() => {listMatches()}, [])

    function clearMatches () {
       putMatches
            .then((response) => {
                alert("Seus pretendentes estão prontos para serem renovados!")
                console.log(response.data)
                props.getProfiles()
            })
            .catch((error) => {
            
                console.log(error.data)
            })
    }
    
  

    const renderPerson = matchList && matchList.map((person)=>{
        return (
            <ContainerMatches key={person.id}>
                <img 
                    src={person.photo}
                    alt={person.name}
                />
                <p>
                    {person.name}, {person.age}
                </p>
                
            </ContainerMatches>
        )
    })



    
    return (
        <ContainerAllMatches>

            {renderPerson}

            <button onClick = {()=>clearMatches()}>
                deletar
            </button>
        </ContainerAllMatches>
    )

}


export default Matches;