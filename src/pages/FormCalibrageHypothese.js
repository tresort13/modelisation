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
      
const[CalibrageInputFields,setCalibrageInputFields] = useState({infoCalibrage :{
    
  droit_taxe_importation:"",
  droit_taxe_exportation:"",
  accises:"",
  accises_base_calcul:"",
  impot_revenu_personne_physique:"",
  impot_revenu_societe_non_petroliere:"",
  impot_revenu_societe_petroliere:"",
  autre_impot_direct:"",
  tva_brut:"",
  impot_bien_service :"",
  impot_bien_service_base_calcul:"",
  autre_impot_indirect :"",
  autre_impot_indirect_base_calcul:"",
  recette_administrative:"",
  petrol_mine:"",
  dons_budgetaire:"",
  dons_budgetaire_base_calcul:"",
  dons_projet:"",
  dons_projet_base_calcul:"",
  impot_revenu_societe_petroliere_coefficient:""
}});
//const pib_annee_fiscale_2022= Number(Number((props.impotDGIInfo[2].annee_fiscale_2021) * (1 + Number(props.impotTauxCroissance)))).toFixed()
const [message,setMessage] = useState("Methode Calibrage des Hypotheses");
const [couleur,setCouleur] = useState("text-warning");
const navigate = useNavigate();
const [modalShow, setModalShow] = React.useState(false);
const [modalShow2, setModalShow2] = React.useState(false);

const submitManifest = (e)=>
{
    e.preventDefault()
    setModalShow2(true)
             
             props.dataDonneeDroitTaxeImportation( Number(props.donneeTotalImportationApprocheDepense) * (Number(CalibrageInputFields.infoCalibrage.droit_taxe_importation) / 100))
             props.dataDonneeDroitTaxeExportation( Number(props.donneeTotalExportationApprocheDepense) * (Number(CalibrageInputFields.infoCalibrage.droit_taxe_exportation) / 100))
             props.dataDonneeAccise(Number(CalibrageInputFields.infoCalibrage.accises_base_calcul) * (Number(CalibrageInputFields.infoCalibrage.accises) / 100))
             props.dataDonneeImpotRevenuPersonnePhysique(Number(props.donneeTotalRevenuSalaire) * (Number(CalibrageInputFields.infoCalibrage.impot_revenu_personne_physique) / 100))
             props.dataDonneeRevenuSocieteNonPetroliere(Number(props.donneeTotalApprocheProductionNonPetrolier) * Number(CalibrageInputFields.infoCalibrage.impot_revenu_societe_non_petroliere))
             props.dataDonneeRevenuSocietePetroliere( Number(props.donneeTotalApprocheProductionPetrolier) * (Number(CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere_coefficient) / 100) * (Number(CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere) / 100))
             props.dataDonneeAutreImpotDirect( Number(props.donneeTotalApprocheProductionAutreImpotDirect) * (Number(CalibrageInputFields.infoCalibrage.autre_impot_direct) / 100))
              props.dataDonneeTvaBrut( Number(props.donneeTotalProductionApproche) * (Number(CalibrageInputFields.infoCalibrage.tva_brut) / 100))
              props.dataDonneeImpotsBienService( Number(CalibrageInputFields.infoCalibrage.impot_bien_service_base_calcul) * (Number(CalibrageInputFields.infoCalibrage.impot_bien_service) / 100))
              props.dataDonneeAutreImpotIndirect( Number(CalibrageInputFields.infoCalibrage.autre_impot_indirect) * (Number(CalibrageInputFields.infoCalibrage.autre_impot_indirect) / 100))
              props.dataDonneeRecetteAdministrative( Number(props.donneeTotalRevenuApproche) * (Number(CalibrageInputFields.infoCalibrage.recette_administrative) / 100))
              props.dataDonneePetrolMine( Number(props.donneeTotalApprocheProductionPetrolMine) * (Number(CalibrageInputFields.infoCalibrage.petrol_mine) / 100))
              props.dataDonneeDonsBudgetaire(Number(CalibrageInputFields.infoCalibrage.dons_budgetaire_base_calcul) * (Number(CalibrageInputFields.infoCalibrage.dons_budgetaire) / 100))
              props.dataDonneeDonsProjets(Number(CalibrageInputFields.infoCalibrage.dons_projet_base_calcul) * (Number(CalibrageInputFields.infoCalibrage.dons_projet) / 100))
                
               navigate('/methode_calibrage_info')
            
   
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
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:50}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
<Form>
    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Droit et taxe à l'importation </u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.droit_taxe_importation} name="droit_taxe_importation"  onChange={e=>inputChanged(e)} type="text" placeholder="Droit et taxe à l'importation (%)" autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalImportationApprocheDepense) + " (Base de calcul)"}  name="droit_taxe_importation_base_calcul"   type="text"   disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Droit et taxe à l'exportation </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.droit_taxe_exportation} name="droit_taxe_exportation"   type="text"  onChange={e=>inputChanged(e)} placeholder="Droit et taxe à l'exportation (%)" required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalExportationApprocheDepense) + " (Base de calcul)"}  name="droit_taxe_exportation_base_calcul"   type="text"   disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Accises </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.accises} name="accises" placeholder='Accises (%)'  type="text"  onChange={e=>inputChanged(e)}  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.accises_base_calcul}   name="accises_base_calcul"  placeholder='Veuillez entrer la base de calcul' onChange={e=>inputChanged(e)}  type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Impôts sur le revenu personnes physiques </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_personne_physique} name="impot_revenu_personne_physique" placeholder='Impôts sur le revenu personnes physiques (%)'  onChange={e=>inputChanged(e)}  type="text" required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalRevenuSalaire) + " (Base de calcul)"}  name="impot_revenu_personne_physique_base_calcul" type="text" disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Impôts sur le revenu des sociétés et des entreprises non pétrolières </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_societe_non_petroliere} name="impot_revenu_societe_non_petroliere" placeholder='Impôts sur le revenu des sociétés et des entreprises non pétrolières (%)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalApprocheProductionNonPetrolier) + " (Base calcul)"} name="impot_revenu_societe_non_petroliere_base_calcul" type="text" disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Impôts sur le revenu des sociétés pétrolières </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere} name="impot_revenu_societe_petroliere" placeholder='Impôts sur le revenu des sociétés pétrolières (%)'  onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalApprocheProductionPetrolier) + " (Base de calcul)"}  name="impot_revenu_societe_petroliere_base_calcul" type="text" disabled/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_revenu_societe_petroliere_coefficient} name="impot_revenu_societe_petroliere_coefficient" placeholder='Coefficient (Decimal)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Autres impôts directs </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.autre_impot_direct} name="autre_impot_direct" placeholder='Autres impôts directs (%)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalApprocheProductionAutreImpotDirect) + " (Base de calcul)"}  name="autre_impot_direct_base_calcul" type="text" disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> TVA Brute </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.tva_brut} name="tva_brut" placeholder='TVA Brute (%)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalProductionApproche) + " (Base de calcul)"}  name="tva_brut_base_calcule" type="text" disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Impôts sur les biens et services </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_bien_service} name="impot_bien_service" placeholder='Impôts sur les biens et services (%)'  onChange={e=>inputChanged(e)} type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control  value={CalibrageInputFields.infoCalibrage.impot_bien_service_base_calcul} name="impot_bien_service_base_calcul" type="text"  onChange={e=>inputChanged(e)} placeholder='Veuillez entrer la base de calcul' required/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Autres impôts indirects </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.autre_impot_indirect} name="autre_impot_indirect" placeholder='Autres impôts indirects (%)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.autre_impot_indirect_base_calcul}  name="autre_impot_indirect_base_calcul"  onChange={e=>inputChanged(e)} type="text" placeholder='Veuillez entrer la base de calcul' required/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Recettes administratives (DGRAD) </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.recette_administrative} name="recette_administrative" placeholder='Recettes administratives (%)'  onChange={e=>inputChanged(e)}  type="text" required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalRevenuApproche) + " (Base de calcul)"} name="recette_administrative_base_calcule" type="text" disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Pétrole et mines (royalties et taxes) </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.petrol_mine} name="petrol_mine" placeholder='Pétrole et mines (royalties et taxes) - (%)'  onChange={e=>inputChanged(e)}  type="text" required />
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={new Intl.NumberFormat().format(props.donneeTotalApprocheProductionPetrolMine) + " (Base de calcul)"}  name="petrol_mine_base_calcule" type="text" disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Dons budgétaires </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_budgetaire} name="dons_budgetaire" placeholder='Dons budgétaires (%)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_budgetaire_base_calcul}  name="dons_budgetaire_base_calcul" onChange={e=>inputChanged(e)} placeholder='Veuillez entrer la base de calcul' type="text" required/>
         </Form.Group>
        </Col>
    </Row>

    <Row>
      <hr className='text-warning'></hr>
      <p className='text-warning'><b><u> Dons projets </u></b> </p>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_projet} name="dons_projet" placeholder='Dons projets (%)'  onChange={e=>inputChanged(e)}  type="text"  required/>
         </Form.Group>
        </Col>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_projet_base_calcul}  name="dons_projet_base_calcul" onChange={e=>inputChanged(e)} placeholder='Veuillez entrer la base de calcul'  type="text" required/>
         </Form.Group>
        </Col>
    </Row>



  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={(e)=>submitManifest(e)}>
        Executer
        </Button>
        </Link>

        </Col>
    </Row>

</Form>
</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
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
