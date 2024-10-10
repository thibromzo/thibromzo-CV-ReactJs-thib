import React from "react";
import Banner from "../Assets/banner.jpg";
import coder from "../Assets/blog/coder.jpg";
import croissance from "../Assets/blog/croissance.jpg";
import google from "../Assets/blog/google.jpg";
import screens from "../Assets/blog/screens.jpg";
import SEO from "../Assets/blog/seo.jpg";
import technos from "../Assets/blog/technos.png";

const Blog =()=>{
    return(
        <div className="appRoute">
            <img src={Banner} alt="Bannière" />
            <h1 className="appTitre">BLOG</h1>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
            <p id="trait">________________________</p>  
        <div className="mainRoute2">
            <div id="col3">
                <img src={coder} alt="coder" />
                <h2>Coder son site </h2>
                <h2>en HTML/CSS</h2>
                <p>Some quick example text to build on the</p>
                <p>card title and make up the bulk of the card's</p>
                <p>content.</p>
                <p id="bouton2" className="btn btn-primary">Lire la suite</p>
                <div className="realisation">
                    <p>Publié le 22 août 2022</p>
                 </div>
            </div>
            <div id="col3">
                <img src={croissance} alt="croissance" />
                <h2>Vendre ses produits</h2>
                <h2>sur le web</h2>
                <p>Some quick example text to build on the</p>
                <p>card title and make up the bulk of the card's</p>
                <p>content.</p>
                <p id="bouton2" className="btn btn-primary">Lire la suite</p>
                <div className="realisation">
                    <p>Publié le 20 août 2022</p>
                </div>
            </div>
            <div id="col3">
                <img src={google} alt="google" />
                <h2>Se positionner sur</h2>
                <h2>Google</h2>
                <p>Some quick example text to build on the</p>
                <p>card title and make up the bulk of the card's</p>
                <p>content.</p>
                <p id="bouton2" className="btn btn-primary">Lire la suite</p>
                <div className="realisation">
                    <p>Publié le 1 août 2022</p>
                </div>
            </div>
            <div id="col3">
                <img src={screens} alt="screens" />
                <h2>Coder en responsive</h2>
                <h2>design</h2>
                <p>Some quick example text to build on the</p>
                <p>card title and make up the bulk of the card's</p>
                <p>content.</p>
                <p id="bouton2" className="btn btn-primary">Lire la suite</p>
                <div className="realisation">
                    <p>Publié le 31 juillet 2022</p>
                </div>
            </div>
            <div id="col3">
                <img src={SEO} alt="SEO" />
                <h2>Techniques de</h2>
                <h2>référencement</h2>
                <p>Some quick example text to build on the</p>
                <p>card title and make up the bulk of the card's</p>
                <p>content.</p>
                <p id="bouton2" className="btn btn-primary">Lire la suite</p>
                <div className="realisation">
                    <p>Publié le 30 juillet 2022</p>
                </div>
            </div>
            <div id="col3">
                <img src={technos} alt="technos" />
                <h2>Apprendre à coder</h2>
                <p>Some quick example text to build on the</p>
                <p>card title and make up the bulk of the card's</p>
                <p>content.</p>
                <p id="bouton2" className="btn btn-primary">Lire la suite</p>
                <div className="realisation">
                    <p>Publié le 12 juillet 2022</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Blog;