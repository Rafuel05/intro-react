import { useState, useEffect } from "react"




// 4- custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method,
                headers:{
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        } 
        else if(method === 'DELETE'){
            setConfig({
                method,
                headers:{
                    'Content-type' : 'application/json'
                }
            })
            setMethod(method)
            setCallFetch(data) // apenas para DELETE precisamos do ID
        }
    }

    // useEffect para GET
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (error) {
                setError("Houve um erro ao carregar os dados!")
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    // useEffect para POST e DELETE
    useEffect(() => {
        const httpRequest = async () => {
            if(method === 'POST'){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(true) // apenas um trigger para recarregar
            } 
            else if(method === 'DELETE') {
                const deleteUrl = `${url}/${callFetch}`
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(true) // apenas um trigger para recarregar
            }
        }

        if(method && config) {
            httpRequest()
        }
    }, [config, method])

    return {data, httpConfig, loading, error}
}