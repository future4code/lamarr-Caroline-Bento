import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import GlobalStyles from './Global'
import { RiUserHeartLine } from "react-icons/ri";
import axios from 'axios'
import Profiles from './components/Profiles/Profiles';
import Matches from './components/Matches/Matches';


const Container = styled.div `
  display: flex;
  margin: 2em 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
`
const Header = styled.div `
  display:flex;
  align-items: center;
  gap: 5em;
    h1 {
      font-size: 2.5em;
    }
    button{
      font-size: 2.4em;
      background: none;
      border: none;
      color: #FFEBCD;
    }
`
function App() {

const [chooseProfile, setChooseProfile] = useState([])
const [upClick, setUpClick] = useState(0)



function getProfiles () {
  const urlGet = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline-bento-lamarr/person"
  const getUsers = axios.get(urlGet)
  
  getUsers
    .then((response) => {
      setChooseProfile(response.data.profile)
    
      console.log('atualizou')
    })
    .catch((error) => {
      alert("Tente novamente. Erro")
      console.log(error.data)
    })
}

useEffect(() => {getProfiles()}, [])


function clickProfiles () {
  setUpClick(!upClick)
}

if (upClick) {
  return (
    <Container>

        <Header>
          <h1>
            AstroMatch
          </h1>
          <button onClick={clickProfiles}>
            <RiUserHeartLine />
          </button>
        </Header>
        
        <Matches
          getProfiles={getProfiles}
        />


        <GlobalStyles />
      </Container>
  )
}
else {
  return (
    <div>
      <Container>

        <Header>
          <h1>
            AstroMatch
          </h1>
          <button onClick={() => clickProfiles()}>
            <RiUserHeartLine />
          </button>
        </Header>
        
        {chooseProfile && <Profiles
          profile={chooseProfile}
          getProfiles={getProfiles}
        />
        }


        <GlobalStyles />
      </Container>

      
    </div>
  )
}



  
    
}
 


export default App;
