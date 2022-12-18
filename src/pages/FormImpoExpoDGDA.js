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

function FormImpoExpoDGDA(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });   
      const pib_annee_fiscale_2022= Number(Number((props.impotDgiInfo[2].annee_fiscale_2021) * (1 + Number(props.impotPourcentageCroissance)))).toFixed() 
const inputRef = useRef(null);
const [fichier,setFichier] = useState();
const[tauxExpoImpo,setTauxExpoImpo] = useState({infoTauxExpoImpo :{
    taux_exportation :"",
    taux_importation :""
}});
//const pib_annee_fiscale_2022= Number(Number((props.impotDGIInfo[2].annee_fiscale_2021) * (1 + Number(props.impotTauxCroissance)))).toFixed()
const [message,setMessage] = useState("Importations/Exportations");
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
                props.dataDonneeInfoExpoImpo(res)
                props.dataDonneeTauxImportation(parseInt(tauxExpoImpo.infoTauxExpoImpo.taux_importation) / 100)
                props.dataDonneeTauxExportation(parseInt(tauxExpoImpo.infoTauxExpoImpo.taux_exportation) / 100)
                
                navigate('/impo_expo_dgda_info')
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
        const cred = tauxExpoImpo.infoTauxExpoImpo;
        cred[event.target.name] = event.target.value;
        setTauxExpoImpo({infoTauxExpoImpo:cred})
    }
return (
<>
<Header username={props.username}/>
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-2' >
        <Col xs={6}>
            <Link to="">
            <Image src={require('./est_back.jpeg')}  className='rounded-pill ' style={{width:200}}></Image>
            </Link>
        
        </Col>
    </Row>
    
<Form>
<Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={pib_annee_fiscale_2022 + " (PIB Année Courante)"} name="PIB"   type="text"  disabled/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {3}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={tauxExpoImpo.infoTauxExpoImpo.taux_exportation} name="taux_exportation"  onChange={e=>inputChanged(e)} type="text" placeholder='% Expo (PIB)' autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {3}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control value={tauxExpoImpo.infoTauxExpoImpo.taux_importation} name="taux_importation"  onChange={e=>inputChanged(e)} type="text" placeholder='% Impo (PIB)'    required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicFile" >
        <Form.Control ref={inputRef}   name="fichier" type="file" placeholder="Veuillez charger le fichier" onChange={(e)=>setFichier(e.target.files[0])} />
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>submitManifest(e)}>
        chargement fichier
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
  

export default FormImpoExpoDGDA;