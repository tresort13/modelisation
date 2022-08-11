import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import {Link,useNavigate} from  'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";


function Header(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

      const logout = ()=>
    {
      window.localStorage.setItem("username", JSON.stringify(""))
      navigate('/')
    }
      
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto">
    <Row>
        <Col xs={2} className="my-auto mx-auto text-start">
        <a href="#" style={{textDecoration:"none"}}>
          <Image onClick={handleShow}  src={require('./est_back.jpeg')}  className='rounded-pill ' style={{width:130}}></Image>
        </a>
        </Col>
        <Col xs={6} className="my-auto text-end">
        <Link to="/menu_principal" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">MODELISATION MACRO FISCALE</p>
          </Link>
        </Col>
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-secondary display-6 text-center" style={{fontSize: 20}}><Image className="navbar-brand rounded-circle" src={require('./login.jpeg')} type="button" alt="profil" style={{width:40}} ></Image><span ><i className="text-warning"><b>Bonjour {props.username}</b></i></span> <span className="separateur text-warning"></span><a href="" style={{textDecoration:"none"}}><span className="text-danger"><i onClick={logout}> Logout </i> </span></a></pre>
           <i><pre className="text-warning display-6 timing text-center" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
    <Offcanvas  show={show} onHide={handleClose} className="bordure bg-dark" style={{height:650,width:1200}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-end"><b>Menu Navigation</b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
          <Col>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column ">
        <Nav.Link href="/form_population_province"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Population par province</i></Button></Nav.Link>
        <Nav.Link href="/form_taux_natalite_mortalite"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Taux de natalité/mortalié</i></Button></Nav.Link>
        <Nav.Link href="/taux_croissance_info_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Taux de croissance par province/milieu</i></Button></Nav.Link>
        <Nav.Link href="/taille_reelle_population_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Taille réelle de la population par province/milieu</i></Button></Nav.Link>
        <Nav.Link href="/form_taux_migration"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Taux de migration par province/milieu</i></Button></Nav.Link>
        <Nav.Link href="/Population_Total_ApresMigration_Info_Executio"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Population totale après migration</i></Button></Nav.Link>       
        </Nav>
        </Col>

        <Col>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column ">
        <Nav.Link href="/population_active_menu"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Population Active</i></Button></Nav.Link>
        <Nav.Link href="/form_donnees_consommation"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données de la consommation</i></Button></Nav.Link>
        <Nav.Link href="/form_investissement_prive"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données de l'investissement privé</i></Button></Nav.Link>
        <Nav.Link href="/form_depense_courante"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données de dépenses Courante</i></Button></Nav.Link>
        <Nav.Link href="/form_depense_capital"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données de dépenses en Capital</i></Button></Nav.Link>
        <Nav.Link href="/donnees_depense_publique_info_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données de dépenses publique</i></Button></Nav.Link>       
        </Nav>
        </Col>

        <Col>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column ">
        <Nav.Link href="/form_donnee_exportations"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données des exportations</i></Button></Nav.Link>
        <Nav.Link href="/form_donnee_importations"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données des importations</i></Button></Nav.Link>
        <Nav.Link href="/donnee_exportations_nettes_info_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>données des exportations nettes du pays</i></Button></Nav.Link>
        <Nav.Link href="/donnee_demande_interieure_info_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Calcule de la Démande intérieure</i></Button></Nav.Link>
        <Nav.Link href="/production_domestique_info_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Calcule de la production domestique</i></Button></Nav.Link>
        <Nav.Link href="/production_domestique_secteur_info_execution"><Button style={{width:300,height:70}} className='btn-lg rounded-pill zoom btn-warning'><i>Calcule de la production domestique par secteur</i></Button></Nav.Link>       
        </Nav>
        </Col>
        </Row>
        </Offcanvas.Body>
      </Offcanvas>
  
   </Container>}



   </div>

    )
}

export default Header;