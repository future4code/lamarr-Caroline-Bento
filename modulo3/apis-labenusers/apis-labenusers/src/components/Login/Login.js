import React from 'react';
import styled from 'styled-components'
const ContainerForm = styled.div `
    
    
    form {
        display: flex;
        flex-direction: column;
        
        gap: 0.5em;
         input {
            width: 100%;
            padding: 1em;
         }
         button {
            width:40%;
            
            


         }
    }
`

function Login (props) {

    return (
        <ContainerForm>
            <h1>
                Cadastre-se aqui!
            </h1>
            <form>
                <input 
                    type="text" 
                    placeholder="Diga como quer ser chamade"
                    value= {props.inputName}
                    onChange={props.handleUpdateName}
                />
                <input 
                    type="email" 
                    placeholder="Seu email favorito"
                    value={props.inputEmail}
                    onChange={props.handleUpdateEmail}
                />
                <button onClick={props.listUsers}>
                    Enviar
                </button>
               
               {/* tentativa de trocar de pagina */}
               <button onClick={props.loadingList}>
                    Todos os Usuários
                </button>
                
                
            </form>
        </ContainerForm>
    )
}

export default Login;