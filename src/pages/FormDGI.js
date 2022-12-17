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

function FormDGI(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
const inputRef = useRef(null);
const [fichier,setFichier] = useState();
const [temp,setTemp] = useState([])
const[tauxCroissance,setTauxCroissance] = useState({infoTauxCroissance :{
    taux_croissance :""
}});

const [message,setMessage] = useState("Impôts sur CA et autres pour l'année courante");
const [couleur,setCouleur] = useState("text-warning");
const navigate = useNavigate();

const resetFileInput = () => {
    // 👇️ reset input value
    inputRef.current.value = null;
  };
const submitManifest = (e)=>
{
   const uploadData = new FormData();
  uploadData.append('fichier', fichier);
  console.log(tauxCroissance);
    
    fetch('https://modelisationfiscaleapi.herokuapp.com/api/impotDGI/', {
            method:'POST',
            body: uploadData 
          })
          .then( res => res.json())
          .then(
            res => {   
              
                props.dataDonneeImpotPourcentageCroissance(parseInt(tauxCroissance.infoTauxCroissance.taux_croissance) / 100)
                setTemp(res)
                console.log(res)
                        
            }
            
          )
          .catch( (error) =>
            {
                setMessage("echec de chargement")
            } )
            
    resetFileInput()
    setTauxCroissance({infoTauxCroissance :{ taux_croissance :""}})
}

const inputChanged = (event)=>
    {
        const cred = tauxCroissance.infoTauxCroissance;
        cred[event.target.name] = event.target.value;
        setTauxCroissance({infoTauxCroissance:cred})
    }

    console.log(temp)
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
        <Form.Control name="taux_croissance" value={tauxCroissance.infoTauxCroissance.taux_croissance}  onChange={e=>inputChanged(e)} type="text" placeholder='taux de Croissance' autoFocus   required/>
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
        
        <Link to="/impot_dgi_info" style={{color:'white',textDecorationLine:'none'}}>
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

export default FormDGI;