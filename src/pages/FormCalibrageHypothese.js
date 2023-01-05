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
    impot_bien_service :"",
    autre_impot_indirect :"",
    dons_budgetaire:"",
    dons_projet:"",
    coefficient_approche_production:""
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
   const uploadData = new FormData();
   uploadData.append('fichier', fichier);
    fetch('https://modelisationfiscaleapi.herokuapp.com/api/infoImpoExpo/', {
            method:'POST',
            body: uploadData 
          })
          .then( res => res.json())
          .then(
            res => {   
              props.dataDonneeImpotsBienService( 3500800 * (Number(CalibrageInputFields.infoCalibrage.impot_bien_service) / 100))
              props.dataDonneeAutreImpotIndirect( 2581344 * (Number(CalibrageInputFields.infoCalibrage.autre_impot_indirect) / 100))
              props.dataDonneeDonsBudgetaire(4250000 * (Number(CalibrageInputFields.infoCalibrage.dons_budgetaire) / 100))
              props.dataDonneeDonsProjets(3450000 * (Number(CalibrageInputFields.infoCalibrage.dons_projet) / 100))
              props.dataDonneeCoefficientApprocheProduction(Number(CalibrageInputFields.infoCalibrage.coefficient_approche_production))
                
               navigate('/methode_calibrage_info')
            }
          )
          .catch( (error) =>
            {
                setModalShow2(false)
              setModalShow(true)
            } )
            
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
        <Col xs = {8}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.impot_bien_service} name="impot_bien_service"  onChange={e=>inputChanged(e)} type="text" placeholder='Impôts sur les biens et services (%)' autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {8}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.autre_impot_indirect} name="autre_impot_indirect"  onChange={e=>inputChanged(e)} type="text" placeholder='Autres impôts indirects (%)'   required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {8}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_budgetaire} name="dons_budgetaire"  onChange={e=>inputChanged(e)} type="text" placeholder='Dons budgétaires (%)'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {8}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.dons_projet} name="dons_projet"  onChange={e=>inputChanged(e)} type="text" placeholder='Dons projets (%)'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {8}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={CalibrageInputFields.infoCalibrage.coefficient_approche_production} name="coefficient_approche_production"  onChange={e=>inputChanged(e)} type="text" placeholder='coefficient Approche production (Decimal)'  required/>
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
