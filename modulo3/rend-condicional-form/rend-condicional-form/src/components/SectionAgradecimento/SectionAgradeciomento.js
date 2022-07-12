import React, {useState}from 'react'


function SectionAgradecimento (props) {

    return (
        <div>
            <h3> Formulário enviado com sucesso!</h3>
            <h1>Agradecemos sua participação, {props.name}</h1>
            <span>Até logo!</span>
        </div>
    )
}


export default SectionAgradecimento;