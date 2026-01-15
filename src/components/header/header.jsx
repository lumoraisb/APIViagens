import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div id="titulo-imagem">                   
                    <img src="https://cdn-icons-png.flaticon.com/512/6557/6557822.png" alt="" className='imagem_header'/>
                    <h1 className='titulo'> Lugares imperdíveis para se viajar!</h1>
                </div>
                
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/viagens">Viagens</Link>
                        <Link to="/sobre">Sobre</Link>
                    </ul>
                </nav>
            </header>

        </>
    )
}