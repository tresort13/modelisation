import React,{useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css';
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";

const useState = React.useState

function FormCalibrageHypothese(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });   
      
const inputRef = useRef(null);
const [fichier,setFichier] = useState();
const[CalibrageInputFields,setCalibrageInputFields] = useState({infoCalibrage :{
    
  droit_taxe_importation:"",
  droit_taxe_exportation:"",
  accises:"",
  impot_revenu_personne_physique:"",
  impot_revenu_societe_non_petroliere:"",
  impot_revenu_societe_petroliere:"",
  autre_impot_direct:"",
  tva_brut:"",
  impot_bien_service :"",
  autre_impot_indirect :"",
  recette_administrative:"",
  petrol_mine:"",
  dons_budgetaire:"",
  dons_projet:"",
  impot_revenu_societe_petroliere_coefficient:""
}});
//const pib_annee_fiscale_2022= Number(Number((props.impotDGIInfo[2].annee_fiscale_2021) * (1 + Number(props.impotTauxCroissance)))).toFixed()
const [message,setMessage] = useState("Methode Calibrage des Hypotheses");
const [couleur,setCouleur] = useState("text-warning");
const navigate = useNavigate();
const [modalShow, setModalShow] = React.useState(false);
const [modalShow2, setModalShow2] = React.useState(false);
const resetFileInput = () => {
    // 👇️ reset input value
    inputRef.current.value = null;
  };
const submitManifest = (e)=>
{
    e.preventDefault()
    setModalShow2(true)
             props.dataDonneeMethodeCalibrage()
             props.dataDonneeDroitTaxeImportation( 3500800 * (Number(CalibrageInputFields.infoCalibrage.droit_taxe_importation) / 100))
             props.dataDonneeDroitTaxeExportation( 2581344 * (Number(CalibrageInputFields.infoCalibrage.droit_taxe_exportation) / 100))
             props.dataDonneeAccise(4250000 * (Number(CalibrageInputFields.infoCalibrage.accises) / 100))
             props.dataDonneeImpotRevenuPersonnePhysique(3450000 * (Number(CalibrageInputFields.infoCalibrage.impot_revenu_personne_physique) / 100))
             props.dataDonneeRevenuSocieteNonPetroliere(Number(CalibrageInputFields.infoCalibrage.impot_revenu_societe_non_petroliere))
             props.dataDonneeRevenuSocietePetroliere( 3500800 * (Number(CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere) / 100))
             props.dataDonneeAutreImpotDirect( 3500800 * (Number(CalibrageInputFields.infoCalibrage.autre_impot_direct) / 100))
              props.dataDonneeTvaBrut( 2581344 * (Number(CalibrageInputFields.infoCalibrage.tva_brut) / 100))
              props.dataDonneeImpotsBienService( 3500800 * (Number(CalibrageInputFields.infoCalibrage.impot_bien_service) / 100))
              props.dataDonneeAutreImpotIndirect( 2581344 * (Number(CalibrageInputFields.infoCalibrage.autre_impot_indirect) / 100))
              props.dataDonneeRecetteAdministrative( 2581344 * (Number(CalibrageInputFields.infoCalibrage.recette_administrative) / 100))
              props.dataDonneePetrolMine( 2581344 * (Number(CalibrageInputFields.infoCalibrage.petrol_mine) / 100))
              props.dataDonneeDonsBudgetaire(4250000 * (Number(CalibrageInputFields.infoCalibrage.dons_budgetaire) / 100))
              props.dataDonneeDonsProjets(3450000 * (Number(CalibrageInputFields.infoCalibrage.dons_projet) / 100))
              props.dataDonneedataDonneeRevenuSocietePetroliereCoefficient(Number(CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere_coefficient))
                
               navigate('/methode_calibrage_info')
            
    resetFileInput()
}

const inputChanged = (event)=>
    {
        const cred = CalibrageInputFields.infoCalibrage;
        cred[event.target.name] = event.target.value;
        setCalibrageInputFields({infoCalibrage:cred})
    }
return (
<>
<Header username={props.username}/>
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:50,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
<Form>

    <Row className='justify-content-center'>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.droit_taxe_importation} name="droit_taxe_importation"  onChange={e=>inputChanged(e)} type="text" placeholder="Droit et taxe à l'importation (%)" autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="droit_taxe_importation_base_calcul"   type="text"   required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.droit_taxe_exportation} name="droit_taxe_exportation"   type="text" placeholder="Droit et taxe à l'exportation" required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="droit_taxe_exportation_base_calcul"   type="text"   required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.accises} name="droit_taxe_exportation" placeholder='Accises'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="droit_taxe_exportation_base_calcul"   type="text"   required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_personne_physique} name="impot_revenu_personne_physique" placeholder='Impôts sur le revenu personnes physiques'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="impot_revenu_personne_physique_base_calcul" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_societe_non_petroliere} name="impot_revenu_societe_non_petroliere" placeholder='Impôts sur le revenu des sociétés et des entreprises non pétrolières'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="impot_revenu_societe_non_petroliere_base_calcul" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere} name="impot_revenu_societe_petroliere" placeholder='Impôts sur le revenu des sociétés pétrolières'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="impot_revenu_societe_petroliere_base_calcul" type="text" required/>
         </Form.Group>
        </Col>

        <Col xs = {2}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere_coefficient} name="impot_revenu_societe_petroliere_coefficient" placeholder='Coefficient'  type="text"  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.autre_impot_direct} name="autre_impot_direct" placeholder='Autres impôts directs'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="autre_impot_direct_base_calcul" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.tva_brut} name="tva_brut" placeholder='TVA Brute'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="tva_brut_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_bien_service} name="tva_brut" placeholder='Impôts sur les biens et services'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="impot_bien_service_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.autre_impot_indirect} name="autre_impot_indirect" placeholder='Autres impôts indirects'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="autre_impot_indirect_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.recette_administrative} name="recette_administrative" placeholder='Recettes administratives (DGRAD)'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="recette_administrative_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.petrol_mine} name="petrol_mine" placeholder='Pétrole et mines (royalties et taxes)'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="petrol_mine_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_budgetaire} name="dons_budgetaire" placeholder='Dons budgétaires'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="dons_budgetaire_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_projet} name="dons_projet" placeholder='Dons projets'  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {5}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  name="dons_projet_base_calcule" type="text" required/>
         </Form.Group>
        </Col>
    </Row>



  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>submitManifest(e)}>
        Executer
        </Button>
        </Link>

        </Col>
    </Row>

</Form>
</Container>}
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<Footer />
</>
    )
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Echec Execution
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Message : </h4>
          <p className='text-danger'><b>Désolé le chargement des données a echoué</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Veuillez Patienter...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ClipLoader color={"#ff8c00"} loading={true} size={150} /> 
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default FormCalibrageHypothese;
