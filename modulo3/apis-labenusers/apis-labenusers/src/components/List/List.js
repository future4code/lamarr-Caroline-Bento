import React from 'react';
import styled from 'styled-components'

const ContainerList = styled.div `
    display: flex;
    flex-direction: column; 
    align-items: center;  
    
`


function List (props) {
   
    return (
        <ContainerList>
            <h1>
                labenusers:
            </h1>
            <ul>
                {props.listComponent}
            </ul>
            <button>voltar</button>
        </ContainerList>
    )
}

export default List;