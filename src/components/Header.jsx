import { NavLink } from "react-router-dom";

const Header =()=>{

    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-secondary text-light text-uppercase" id="mainNav">
                <div className="container">
                    <h3><NavLink to="/">John Doe</NavLink></h3>
                    <button className="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><NavLink to="/" className="nav-link py-3 px-0 px-lg-3 rounded">ACCUEIL</NavLink></li>
                            <li className="nav-item mx-0 mx-lg-1"><NavLink to="/Service" className="nav-link py-3 px-0 px-lg-3 rounded">SERVICES</NavLink></li>
                            <li className="nav-item mx-0 mx-lg-1"><NavLink to="/Realisation" className="nav-link py-3 px-0 px-lg-3 rounded">REALISATIONS</NavLink></li>
                            <li className="nav-item mx-0 mx-lg-1"><NavLink to="/Blog" className="nav-link py-3 px-0 px-lg-3 rounded">BLOG</NavLink></li>
                            <li className="nav-item mx-0 mx-lg-1"><NavLink to="/MeContacter" className="nav-link py-3 px-0 px-lg-3 rounded">ME CONTACTER</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;

