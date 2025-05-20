import React, { useState, useEffect } from "react";

import Img1 from "../assets/anuncio/anuncio1.avif";
import Img2 from "../assets/anuncio/anuncio2.webp";
import Img3 from "../assets/anuncio/anuncio3.avif";
import Img4 from "../assets/anuncio/anuncio4.jpg";
import Img5 from "../assets/anuncio/anuncio5.jfif";



import "./cardText.css";

const CardComNav = (props) => {
    const [index, setIndex] = useState(0);
  const imagens = [Img1, Img2, Img3];

  const [index2, setIndex2] = useState(0);
  const imagens2 = [ Img4, Img5];



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex2((prevIndex) => (prevIndex + 1) % imagens2.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="container">

      {/* Navegação lateral */}
      <nav className="side-nav">
        <img
          src={imagens[index]}
          alt={`Imagem de estudo ${index + 1}`}
          className="carousel-img"
        />

        <img
          src={imagens2[index2]}
          alt={`Imagem de estudo ${index2 + 1}`}
          className="carousel-img"
        />

       
       
      </nav>

      {/* Card principal */}

      <nav className="main-nav" id={props.id}>
        
          <h2 className="title">{props.titulo}</h2>

        <div className="card">

        <img src={props.img} alt="Imagem fixa" className="static-img" />
          <div className="card-content">

            <p className="card-text">{props.texto}</p>
            <br />
            <p className="card-text">{props.texto2}</p>
            <br />
            <p className="card-text">{props.texto3}</p>

          </div>

        </div>
      </nav>
    </div>
    </>
  );
};

export default CardComNav;












