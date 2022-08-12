import {useEffect, useState} from 'react'
import axios from 'axios'

const useRequestData = (url) => {
    const [dataRequest, setDataRequest] = useState(undefined)
    const [loading,setLoading] = useState(undefined)
    const [erroRequest, setErroRequest] = useState(undefined)

    useEffect (() => {
        setLoading(true)
        axios.get(url)
            .then(response => {
                setLoading(false)
                setDataRequest(response.data)
            })
            .catch((error) => {
                setLoading(false)
                setErroRequest(error)
            })
    }, [url])

    return [dataRequest, erroRequest, loading ]
}

export default useRequestData;