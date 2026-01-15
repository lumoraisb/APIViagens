import Card from "../../../components/cards/card.jsx"
import '../viagens/viagens.css'
import { useViagens } from "../../../data/viagens.js"

function Viagens() {
    const { repositories, loading } = useViagens()

    return (
        <section className='viagens'>
            <h2>Viagens</h2>
            {
                !loading && repositories.length > 0 ? (
                    <section className='lista'>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    destino={repo.Destino}
                                    descricao={repo.Descrição}
                                    pontosTuristicos={repo.pontosTuristicos}
                                    capa={repo.capa}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando Viagens...</p>
                )
            }
        </section>
    )
}

export default Viagens
