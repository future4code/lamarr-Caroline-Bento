import React from "react";
import styled from 'styled-components';

const Container = styled.div `
    margin: 1em;
    padding: 0 1vh;
    border: none;
    border-radius: 1vw;
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    max-width: 20em;
    flex-wrap: wrap;
`
const ContainerOuther = styled.div `
    margin: 1em;
    padding: 0 1vh;
    border: none;
    border-radius: 1vw;
    background-color: pink;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    max-width: 20em;
    flex-wrap: wrap;

`

const NameUser = styled.strong `
    padding: 0 0.2vw;
`

function Talk (props) {
    const propsName = props.name
    if (propsName !== 'eu'){
    return (
        <>
                <ContainerOuther>
                    <NameUser>
                        {props.name}:
                    </NameUser>
                    <p> 
                        {props.messageReceived}
                    </p>
                </ContainerOuther>
                
         </>)}else {
         return (
         <>
            { <Container>
                 <NameUser>
                 {props.name}:
                 </NameUser>
                 <p> 
                     {props.messageReceived}
                 </p>
             </Container>}
        </>)}
    ;
}

export default Talk;