import Container from '../container/container'
import Card from '../cards/card'
import { useViagens } from '../../data/viagens'
import './home.css'

export default function Home() {
    const { repositories, loading } = useViagens()
    const viagensDestacadas = repositories.slice(0, 3)

    return(
        <>
            <Container className='Home'>
                <div className="frase_principal">
                    <p className='frase1'>Nessa página você ira encontrar</p>
                    <p className='frase2'> lugares incríveis</p>
                    <p className='frase3'>onde todos deveriam conhecer!</p>
                </div>
            </Container>

            <section className='viagens-destaque'>
                <h1>Veja lugares imperdíveis</h1>
                {
                    !loading && viagensDestacadas.length > 0 ? (
                        <section className='lista'>
                            {
                                viagensDestacadas.map((repo) => (
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
                        <p>Carregando viagens...</p>
                    )
                }
            </section>
        </>
    )
}