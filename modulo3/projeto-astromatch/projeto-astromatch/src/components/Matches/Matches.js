import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { RiDeleteBin6Line } from "react-icons/ri";


const ContainerAllMatches = styled.div `
    color: #000000;
    p {
        text-align: center;
    }
    h3{
        margin:1em;
    }
    button{
        display: flex;
        align-items: center;
        padding: .3em;
        margin: 3em 0 0 2em;
        font-size: 2em;
        background-color: #FFEBCD;
        color: #000000;
        border: none;
        border-radius:.2em;

        span {
            font-size: 0.4em;
        }
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
    
    
    const [matchList, setMatchList] = useState([])
    
    function listMatches(){
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline-bento-lamarr/matches")
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
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline-bento-lamarr/clear')
            .then((response) => {
                props.getProfiles()
                alert("Seus pretendentes estão prontos para serem renovados!")
                console.log(response.data)
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

   
        return <ContainerAllMatches>
        <h4>
            Aqui estão os amores da sua vida em potencial!
        </h4>
        <p>
            Divirta-se (ou não)!
        </p>
        {renderPerson}

        <button onClick = {()=>clearMatches()}>
            < RiDeleteBin6Line/>
            <span>
                Deletar todos matches
            </span>
        </button>
    </ContainerAllMatches>
    }



export default Matches;