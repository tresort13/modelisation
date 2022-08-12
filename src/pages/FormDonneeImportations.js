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

const useState = React.useState

function FormDonneeImportations(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
const inputRef = useRef(null)
const [fichier,setFichier] = useState()

const [message,setMessage] = useState("données des importations")
const [couleur,setCouleur] = useState("text-warning")
const navigate = useNavigate()

const resetFileInput = () => {
    // 👇️ reset input value
    inputRef.current.value = null;
  };
const submitManifest = (e)=>
{
    
    
    const uploadData = new FormData();
  uploadData.append('fichier', fichier);
    
    fetch('https://modelisationfiscaleapi.herokuapp.com/api/donneeImportation/', {
            method:'POST',
            body: uploadData
          })
          .then( res => res.json())
          .then(
            res => {   
                props.dataDonneeImportations(res)                   
            }
          )
          .catch( (error) =>
            {
                setMessage("echec de chargement")
            } )
            
    resetFileInput()
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
        <Form.Control ref={inputRef}   name="fichier" type="file" placeholder="Veuillez scanner le barcode passager" onChange={(e)=>setFichier(e.target.files[0])} />
         </Form.Group>
        </Col>
    </Row>
  
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Link to="/donnees_importations_info" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>submitManifest(e)}>
        chargement fichier
        </Button>
        </Link>

        </Col>
    </Row>

</Form>
</Container>}


<Footer />
</>
    )
}

export default FormDonneeImportations;