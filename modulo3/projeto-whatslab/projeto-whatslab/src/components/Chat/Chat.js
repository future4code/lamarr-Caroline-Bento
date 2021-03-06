import React, {useState} from 'react';
import styled from 'styled-components'
import Talk from './Talk/Talk'
const Container = styled.div `
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    align-items: flex-end;

`
const ChatContainer = styled.div `
    display: flex;
    flex-direction: column-reverse;
    border: 2px solid;
    width: 100%;
    min-height: 100vh;
    background-color: #F5F5DC;
    
    
`
const Balloon = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content:  flex-end;
    height: 100%; 
    
`
const BalloonOuther = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%; 
    
`


const Box = styled.div `
    display: flex;
    align-items: flex-end;
    height: 100%;
    padding: 1em 0;
   

`

const Sender = styled.div `
   margin: 0 1vw;
   
   `
const Message = styled.div `
    width: 80%;
    
    `
const Label = styled.label `
    
    `
const Input = styled.input `
    padding: 1em;
    margin-right: 6em;
    width: 90%;
    border-radius: 0.8em;
    border: none;
`
const Submit = styled.button `
    margin-right: 1vw;
    padding: 1em;
    border-radius: 0.8em;
    border: none;
    background-color:#DCDCDC; 
    cursor: pointer;
   
`
const Conteudo = styled.div `

`



function Chat(){
    const [senderName,setSanderName] = useState('');
    const [namesSender, setNewMessageSander] = useState([]);
    const [message,setMessage] = useState('');
    const [nameBalloon,setNameBalloon] = useState();

    
    function handleMessage () {
        const newMessage = { 
            name: senderName,
            msg: message,
            time: new Date().toLocaleTimeString('pt-br', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }) 
        }
        setNewMessageSander(prevState =>[...prevState, newMessage])
    };
    
    return (
        <Container>
            <Conteudo>

            </Conteudo>
            <ChatContainer>
           
            
            <Box>
                
                <Sender>
                    <Label htmlFor="sender"></Label>
                    <Input 
                    type="text" 
                    id="sender"
                    placeholder='Sender name...'                  
                    onChange= {event => setSanderName(event.target.value)}/>
                </Sender>
                <Message>
                    <Label htmlFor="message"></Label>
                    <Input type="text" 
                    id="message" 
                    placeholder='Type a message here...'
                    onChange={event => setMessage(event.target.value)}/>
                </Message>
                <Submit type='button' onClick={handleMessage}>
                    Enviar
                </Submit>
            </Box>
            
            <Balloon>

                {
                    namesSender.map(messageSending => (
                    <Talk 
                    key={messageSending.time}
                    name={messageSending.name}  
                    messageReceived={messageSending.msg}   
                    />) )
                }
            </Balloon>

            </ChatContainer>
            <Conteudo>
                
            </Conteudo>
        </Container>
    );
}

export default Chat;