import React from 'react';
import Chat from './components/Chat/Chat';
import styled from 'styled-components'

const BackgroundChat = styled.div `

`

function App() {
  return (
    <BackgroundChat>
        <Chat/>
        
    </BackgroundChat>
  );
}

export default App;
