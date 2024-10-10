import React from "react";
import imgFond from "../Assets/contact-bg.jpg"

const MeContacter =()=>{
    return(
		<section id="contact" className="p-4">
			<img src={imgFond} alt="img-contact" />
			<div className="containerContact">
				<h2 className="text-uppercase text-center">Me contacter</h2>
				<p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
				<p id="trait">________________________</p>  
				<div className="row">
					<div className="col-md-8">
						<h3>Formulaire de contact</h3>
						<form action="index.html" method="post" id="myForm">
							<div className="mb-3">
							<input type="text" className="form-control" placeholder="Votre nom" id="nom" required/>
						</div>
							<div className="mb-3">
							<input type="email" className="form-control" placeholder="Votre adresse email" id="email" required/>
						</div>
							<div className="mb-3">
							<input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required/>
						</div>
						<div className="mb-3">
						<input type="sujet" className="form-control" id="sujet" placeholder="Sujet" required/>
						</div>
							<div className="mb-3">
								<textarea rows="4" cols="50" className="form-control" placeholder="Votre message" id="message" required></textarea>
							</div>
							<button type="submit" className="btn btn-primary">Envoyer</button>
						</form>
					</div>				
					<div className="col-md-4">
						<h3>Mes coordonnées</h3>
						<address id="coordonnees">
							<p><i className="fas fa-map-marker"></i> 40 Rue Laure Diebold, 69009 Lyon, France</p>
							<p><i className="fas fa-mobile-alt"></i> 06 20 30 40 50</p>
						</address>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304924359!2d4.796403977010047!3d45.7786619710808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1718716001033!5m2!1sen!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</section>
    )
}

export default MeContacter;