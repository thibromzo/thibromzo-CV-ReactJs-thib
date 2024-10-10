import React from "react";
import Banner from "../Assets/banner.jpg";
import { useState } from "react";

const blue = { color: "#0d6efd" }; // Déclaration des couleurs
const paleBlue = { color: "#cde1f8" };

const Service =()=>{

    const [color, setColor] = useState(blue); // useState("couleur de base") 

    return(
        <div className="appRoute">
            <img src={Banner} alt="Bannière" id="banner" />
            <h1 className="appTitre">MON OFFRE DE SERVICES</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
            <p id="trait">________________________</p>  

            <div className="mainRoute2">
                <div className="card">
                    <div className="card-body">
                        <i className="fa-solid fa-desktop" onMouseOver={() => setColor(paleBlue)} onMouseOut={() => setColor(blue)} style={color}></i> {/* Application de la fonction au onMouseOver et onMouseOut avec la propriété color */}                 
                        <h4 className="card-title">UX DESIGN</h4>
                        <p className="card-text">L'UX Design est une méthode de</p>
                        <p className="card-text">conception centrée sur l'utilisateur. Son but</p>
                        <p className="card-text">est d'offrir une expérience de navigation</p>
                        <p className="card-text">optimale à l'internaute.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                    <i className="fa-solid fa-file-code" onMouseOver={() => setColor(paleBluelue)} onMouseOut={() => setColor(blue)} style={color}></i>
                        <h4 className="card-title">DEVELOPPEMENT WEB</h4>
                        <p className="card-text">Le développement de site web repose sur</p>
                        <p className="card-text">l'utilisation des langages HTML, CSS,</p>
                        <p className="card-text">Javascript et PHP</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <i className="fa-solid fa-magnifying-glass-dollar" onMouseOver={() => setColor(blue)} onMouseOut={() => setColor(black)} style={color}></i>
                        <h4 className="card-title">REFERENCEMENT</h4>
                        <p className="card-text">Le référencement naturel d'un site, aussi</p>
                        <p className="card-text">appelé SEO, consiste à mettre des</p>
                        <p className="card-text">techniques en oeuvre pour améliorer sa</p>
                        <p className="card-text">position dans les résultats des moteurs de</p>
                        <p className="card-text">recherche.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;