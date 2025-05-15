import React, { useState, useEffect } from "react";

import Img1 from "../assets/anuncio/anuncio1.avif";
import Img2 from "../assets/anuncio/anuncio2.webp";
import Img3 from "../assets/anuncio/anuncio3.avif";
import Img4 from "../assets/anuncio/anuncio4.jpg";



import "./cardText.css";

const CardComNav = () => {
  const imagens = [Img1, Img2, Img3, Img4];
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      {/* Navegação lateral */}
      <nav className="side-nav">
        <img
          src={imagens[index]}
          alt={`Imagem de estudo ${index + 1}`}
          className="carousel-img"
        />

       
       
      </nav>

      {/* Card principal */}
      <nav className="main-nav">
        <div className="card">
        <img src={Img1} alt="Imagem fixa" className="static-img" />

          <div className="card-content">

            <p className="card-text">
              Aprender inglês pode ser simples e prático. Com nosso sistema de
              flashcards personalizados, você estuda vocabulário com exemplos
              reais e traduzidos, facilitando a memorização e a aplicação no dia
              a dia. Seja você iniciante ou avançado, desenvolva suas
              habilidades no seu ritmo, com conteúdos adaptados para você.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, cumque, voluptates, quia quisquam voluptatibus

              voluptatibus, cumque, voluptates, quia quisquam voluptatibus

              voluptatibus, cumque, voluptates, quia quisquam voluptatibus
              voluptatibus, cumque, voluptates, quia quisquam voluptatibus
              Aprender inglês pode ser simples e prático. Com nosso sistema de
              flashcards personalizados, você estuda vocabulário com exemplos
              reais e traduzidos, facilitando a memorização e a aplicação no dia
              a dia. Seja você iniciante ou avançado, desenvolva suas
              habilidades no seu ritmo, com conteúdos adaptados para você.
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, cumque, voluptates, quia quisquam voluptatibus

              voluptatibus, cumque, voluptates, quia quisquam voluptatibus

              voluptatibus, cumque, voluptates, quia quisquam voluptatibus
              voluptatibus, cumque, voluptates, quia quisquam voluptatibus

            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardComNav;












