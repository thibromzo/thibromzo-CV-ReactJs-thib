import React from "react";
import image1 from "../Assets/hero-bg.jpg"
import john from "../Assets/john-doe-about.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';

const Accueil =()=>{
    return(
    <>
      <section id="slider" className="bg-info1 text-light text-center">
        <img src={image1} alt="img1" id="img1"/>
        <h1	className="titre mb-3">Bonjour, je suis John Doe</h1>
        <h2 className="sous-titre">Développeur web fullstack</h2> 
        <a href="#titre" id='button' className="btn btn-primary">En savoir plus</a>
      </section>
      <section id="accueil" className="p-4">
			<div className="containerContact" id="aPropos">
        <div className="row">
          <div className="col-md-8">
            <h3 id="titre">A propos</h3>
            <p>Passionné par l'informatique et les nouvelles</p>
            <p>technologies, j'ai suivi une formation d'intégrateur-</p>
            <p>développeur web au CEF. Au cours de cette formation,</p>
            <p>j'ai pu acquérir des bases solides pour travailler dans le</p>
            <p>domaine du développement web.</p>
            <br />
            <p>Basé à Lyon, je suis en recherche d'une alternance au</p>
            <p>sein d'une agence digitale pour consolider ma formation</p>
            <p>de développeur web full stack.</p>
            <br />
            <p>J'accorde une attention particulière à la qualité du code</p>
            <p>que j'écris et je respecte les bonnes pratiques du web.</p>
          </div>				
          <div className="col-md-4">
          <img src={john} alt="img2" id="img2"/>
          <h3>Mes compétences</h3>
          <p>HTML5 90%</p>
          <ProgressBar variant="danger" now={90} className="progressBar"/>
          <p>CSS3 80%</p>
          <ProgressBar variant="info" now={80} className="progressBar"/>
          <p>JAVASCRIPT 70%</p>
          <ProgressBar variant="warning" now={70} className="progressBar"/>
          <p>PHP 60%</p>
          <ProgressBar variant="success" now={60} className="progressBar"/>
          <p>REACT 50%</p>
          <ProgressBar now={50} className="progressBar"/>
          </div>
        </div>
		  </div>
		  </section>
    </>
    )
}

export default Accueil;