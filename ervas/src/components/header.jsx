import { useEffect, useRef, useState } from "react";
import "./header.css";

function Header() {
   

    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef(null);

  

    // Fecha o menu se clicar fora
    useEffect(() => {
        const handleClickFora = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                iconRef.current &&
                !iconRef.current.contains(event.target)
            ) {
                setMenuAberto(false);
            }
        };

        document.addEventListener("mousedown", handleClickFora);
        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, []);

    const toggleMenu = () => {
        setMenuAberto((prev) => !prev);
    };

    return (
        <>
            <header className="headerBox">
                <h1>Ervas Medicinais</h1>
                <i
                    ref={iconRef}
                    onClick={toggleMenu}
                    className="bx bx-menu"
                ></i>
            </header>

            {menuAberto && (
                <nav className="menu" ref={menuRef}>
                    <ul>
                        <a href='#topic1'><li>O que é</li></a>
                        <a href='#topic2'><li>Eugenia Uniflora</li></a>
                        <a href='#topic3'><li>Citrus Sinensis</li></a>
                        <a href='#topic4'><li>Ocimum Basilicum</li></a>
                        <a href='#topic5'><li>Peumus Boldus</li></a>
                        <a href='#topic6'><li>Matricaria Chamomilla</li></a>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Header;
