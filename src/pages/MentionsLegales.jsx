import chevronUp from "../Assets/chevron-up-solid.svg"
import chevronDown from "../Assets/chevron-down-solid.svg"

const MentionsLegales =()=>{

function onClick(){
    this.setState({
        display:block
    })
} 
    return(
    <>      
        <h1 className="appTitre">MENTIONS LEGALES</h1>
        <p id="trait">________________________</p>  
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Editeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3>JOHN DOE</h3>
                <i className="fas fa-map-marker"></i> 40 Rue Laure Diebold
                <br />69009 Lyon, France
                <br /><i className="fas fa-mobile-alt"></i> 06 20 30 40 50
                <br /><i className="fa-solid fa-envelope"></i> john.doe@gmail.com
              </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Hébergeur
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h3>Always Data</h3>
                91 rue du Faubourg Saint Honoré
                <br />75008 Paris
                <br />
                <i className="fa-solid fa-globe"></i> www.alwaysdata.com
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Crédits
              </button>
          </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h3>Crédits</h3>
                Site développé par John Doe, étudiant du CEF.
                Les images libres de droit sont issues du site <a href="https://pixabay.com/">Pixabay</a>.
              </div>
            </div>
        </div>
        </div>
    </>
    )
}
export default MentionsLegales;

