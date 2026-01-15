import { useState, useEffect } from "react"

export function useViagens() {
    const [repositories, setRepositories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const buscarRepositorios = async () => {
            try {
                const response = await fetch('./lugares.json')
                const data = await response.json()
                setRepositories(data)
            } catch (error) {
                console.error('Erro ao buscar viagens:', error)
            } finally {
                setLoading(false)
            }
        }
        buscarRepositorios()
    }, [])

    return { repositories, loading }
}
