import React from "react";
import { NavLink } from "react-router-dom";
import icone from "../Assets/arrow_Footer.png"

const Footer =()=>{
    return(
    <>
        <div className="App3">
            <section className="mainRoute4">
                <div id="col">
                    <h2>John Doe</h2>
                    <p>40 rue laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                    <div className="reseaux">
                        <NavLink to="/GitHub" className="footer-link"><i className="fa-brands fa-github"></i></NavLink>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div id="col">
                <h3>Liens utiles</h3> 
                    <p><img src={icone} alt="flèche" /><NavLink to='/' className="footer-link">Accueil</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to='/' className="footer-link">A propos</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to='/Service' className="footer-link">Services</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to='/MeContacter' className="footer-link">Me contacter</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to='/MentionsLegales' className="footer-link">Mentions légales</NavLink></p>
                </div>
                <div id="col">
                    <h3>Mes dernières réalisations</h3>
                    <p><img src={icone} alt="flèche" /><NavLink to='/Realisation' className="footer-link">Fresh food</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to='/Realisation' className="footer-link">Restaurant Akira</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to='/Realisation' className="footer-link">Espace bien-être</NavLink></p>
                </div>
                <div id="col">
                    <h3>Mes dernières réalisations</h3>
                    <p><img src={icone} alt="flèche" /><NavLink to="/Blog" className="footer-link">Coder son site en HTML/CSS</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to="/Blog" className="footer-link">Vendre ses produits sur le web</NavLink></p>
                    <p><img src={icone} alt="flèche" /><NavLink to="/Blog" className="footer-link">Se positionner sur Google</NavLink></p>
                </div>
            </section>
                <div className="App-groupe4">
                    <p>© Designed by John Doe</p>
                </div>
            </div>
                <div className='scroll-top'>
                    <a href="#mainNav"><i className="fa-solid fa-circle-up"></i></a>
                </div>
    </> 
    )
}
export default Footer;