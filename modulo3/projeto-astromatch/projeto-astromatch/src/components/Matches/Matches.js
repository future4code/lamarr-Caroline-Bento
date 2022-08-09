import React, {useEffect} from 'react';
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
    const getMatches = axios.get(matchesUrl)
    const putMatches =  axios.put(matchesClearUrl)

    
    function personMatch () {
        
        getMatches
        .then((response) => { 
            props.setMatchList(response.data.matches)
            console.log(response.data.matches)
        })
        .catch((error) => {
            console.log("Deu ruim aqui", error.data)
        })
        
    }

    useEffect (() => {
        personMatch()
    }, [props.upList])

    function clearMatches () {
       putMatches
            .then((response) => {
                alert("Seus pretendentes estão prontos para serem renovados!")
                console.log(response.data)
                props.setUpList(props.upList + 1)
            })
            .catch((error) => {
            
                console.log(error.data)
            })
    }
    
    function listPersonMatch (person, index) {
        return (
            <ContainerMatches key={index}>
                <img src={person.photo}
                alt={person.name}/>
                <span>
                    {person.name}, {person.age}
                </span>
                
            </ContainerMatches>
        )
    }

    const renderPerson = props.matchList.map(listPersonMatch)

    
    return (
        <ContainerAllMatches>
            {renderPerson}
            <button onClick = {clearMatches}>
                <RiDeleteBin6Line/>
            </button>
        </ContainerAllMatches>
    )

}


export default Matches;