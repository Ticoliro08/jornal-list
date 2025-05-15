

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "./header.css";



function Header() {
    const [temaEscuro, setTemaEscuro] = useState(() => {
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
    });

    const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar a visibilidade do menu

    useEffect(() => {
        // Atualiza o estilo do corpo com base no tema
        document.body.style.backgroundColor = temaEscuro ? 'black' : 'white';

        // Armazena a preferência no localStorage
        localStorage.setItem('temaEscuro', temaEscuro);
    }, [temaEscuro]);

    const MouseEnter = () => {
        setMenuAberto(true); // Abre o menu ao passar o mouse
    };

    const MouseLeave = () => {
        setMenuAberto(false); // Fecha o menu ao sair com o mouse
    };

    return (
        <>
            <header className="headerBox">
                <h1><Link to='/'>Projeto de História do Século XX</Link></h1>
          



                <button 
                    className="menuButton" 
                    onMouseEnter={MouseEnter} 
                    onMouseLeave={MouseLeave}
                >
                    <i className='bx bx-menu'></i>
                </button>
            </header>
            
            {menuAberto && (
                <nav className="menu" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                   
                   <ul>
                    <li><Link to="/canudos">Guerra de Canudos</Link></li>
                    <li><Link to="/contestado">Guerra do Contestado</Link></li>
                    <li><Link to="/primeira-guerra">Primeira Guerra Mundial</Link></li>
                    <li><Link to="/revolucao-russa">Revolução Russa</Link></li>
                    <li><Link to="/fascismo">Fascismo Italiano</Link></li>
                    <li><Link to="/crise-1929">Crise de 1929</Link></li>
                    <li><Link to="/revolucao-1930">Revolução de 1930</Link></li>
                </ul>

                </nav>
            )}
        </>
    );
}

export default Header;