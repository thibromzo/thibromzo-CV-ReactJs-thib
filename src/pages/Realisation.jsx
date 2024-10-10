import React from "react";
import Banner from "../Assets/banner.jpg";
import FreshFood from "../Assets/portfolio/fresh-food.jpg";
import RestoAkira from "../Assets/portfolio/restaurant-japonais.jpg"
import EBienEtre from"../Assets/portfolio/espace-bien-etre.jpg";

const Realisation =()=>{
    return(
<div className="appRoute">
    <img src={Banner} alt="" />
    <div className="appTitre">
      <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <p id="trait">________________________</p>  
    </div>
    

    <main className="mainRoute2">
        <div id="col2">
            <img src={FreshFood} alt="FreshFood" />
            <h2>Fresh food</h2>
            <p>Réalisation d'un site avec commande en</p>
            <p>ligne.</p>
            <p className="btn btn-outline-primary">Voir</p>
            <div className="realisation">
                <p>Site réalisé avec PHP et MySQL</p>
            </div>  
        </div>
        <div id="col2">
            <img src={RestoAkira} alt="RestoAkira" />
            <h2>Restaurant Akira</h2>
            <p>Réalisation d'un site vitrine.</p>
            <p className="btn btn-outline-primary">Voir</p>
            <div className="realisation">
                <p>Site réalisé avec WordPress</p>
            </div>
        </div>
        <div id="col2">
            <img src={EBienEtre} alt="EBienEtre" />
            <h2>Espace bien-être</h2>
            <p>Réalisation d'un site vitrine pour un practicien</p>
            <p>de bien-être.</p>
            <p className="btn btn-outline-primary">Voir</p>
            <div className="realisation">
                <p>Site réalisé en HTML/CSS</p>
            </div>
        </div>
    </main>
</div>
    )
}
export default Realisation;