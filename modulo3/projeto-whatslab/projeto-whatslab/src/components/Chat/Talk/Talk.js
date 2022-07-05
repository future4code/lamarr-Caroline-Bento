import React from "react";
import styled from 'styled-components';


const Container = styled.div `
    margin: 2em;
    padding: 0 2vh;
    border: none;
    border-radius: 1vw;
    background-color:#F0FFFF;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`

const NameUser = styled.strong `
    padding: 0 0.8vw;
`

function Talk (props) {
    
    return (
        <Container>
            <NameUser>
               {props.name}:
            </NameUser>
            <p> 
                {props.messageReceived}
            </p>

        </Container>
    );
}

export default Talk;