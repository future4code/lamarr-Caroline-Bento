import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export const useProtectedPage = (() => {
    const navigate = useNavigate()

    useEffect(() => {
        const token= localStorage.getItem('token')
    
        if (token === null) {
            // alert('Você não tem acesso a essa página. Faça o login e prossiga :)')
            navigate('/login')
        }
    }, [navigate])
})

