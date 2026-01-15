import './sobre.css'

function Sobre() {
    return( <>
        <section className="sobre">
            <h1>Sobre o projeto</h1>

            <p>
                Este projeto foi desenvolvido por <strong>Luiza Morais</strong> com o objetivo
                de praticar e consolidar conhecimentos em <strong>Front-end</strong>,
                especialmente no consumo e uso de <strong>APIs</strong>.
            </p>

            <p>
                A aplicação simula um site de viagens, apresentando destinos e informações
                de forma organizada e visualmente agradável. Durante o desenvolvimento,
                foram aplicados conceitos como:
            </p>

            <ul>
                <li>Consumo de APIs</li>
                <li>Componentização com React</li>
                <li>Organização de rotas</li>
                <li>Estilização com CSS</li>
                <li>Estruturação de páginas (Home, Viagens e Sobre)</li>
            </ul>   
            <p>
                Este projeto faz parte do meu processo de aprendizado e evolução na área de
                desenvolvimento web, servindo como base para estudos futuros e aprimoramento
                contínuo.
            </p>
        </section>
        <img src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f493.gif" alt="" />
        </>
    )
}

export default Sobre