import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import Login from './components/Login/Login'
import List from './components/List/List'


const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25em;
    max-height: 50em;
    color: #fff;
    background-color: gray;
`

function App() {

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [listData, setListData] = useState ([])
    
    const deleteItem = (id) => {
        
        axios.delete(url + '/' + id, headers) 
        .then(()=>{
            setListData()
            alert ('Usuário deletado')
            
        }).catch(()=>{
            alert ('Tente novamente, você consegue!')
            console.log ("deu ruim demais uai")
        });
      
    }

    
    const listComponent = listData.map((item, index) => {
        return (
            <div key={index}>
                {item.name}
                
                <button
                    onClick={(e) => {
                        deleteItem(item.id)
                    }}
                >
                    deletar usuário
                </button>
                
            </div>
        )
    })
   
    
    useEffect (()=> {
        getLabenUsers()
    }, [])
    
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const headers = {
        headers: {
            Authorization: 'carol-bento-lammar'
        }
    }
    const body = {
        'name': inputName,
        'email': inputEmail
    }

    const listUsers = (e) => {
        e.preventDefault();
        axios.post(url, body, headers).then(() => {
            alert ('Usuário adicionado.')
            getLabenUsers()
    }).catch((error) => {
        alert('Digite informações válidas.')
    })
    }

    const getLabenUsers = () => {
        axios.get(url,headers).then(response => {
            setListData(response.data)
            console.log(response.data)
        }).catch(
            (error) => {
                console.log (error.response)}
            )
    }


    const handleUpdateName = (e) =>{
        setInputName(e.target.value)
    }
    
    const handleUpdateEmail = (e) =>{
        setInputEmail(e.target.value)
    }


    /* tentativa de trocar de pagina */
    const loadingList = (e) =>{
        e.preventDefault()
        return (
        <List 
        listComponent={listComponent}/>
        )

    }
    
    return (
        <Container>     
            <Login
            listUsers={listUsers}
            handleUpdateName={handleUpdateName}
            handleUpdateEmail={handleUpdateEmail}
            loadingList={loadingList}
            />     
            <List 
             listComponent={listComponent}/>
        
        </Container>
    )
}

export default App;