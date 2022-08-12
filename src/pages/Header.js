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
        <p className='text-warning'><b><u>1. POPULATION</u></b> </p>
        <Nav.Link href="/form_population_province"><p className=' zoom text-warning'>1.1 Population par province</p></Nav.Link>
        <Nav.Link href="/form_taux_natalite_mortalite"><p className=' zoom text-warning'>1.2 Taux de natalité/mortalié</p></Nav.Link>
        <Nav.Link href="/taux_croissance_info_execution"><p className=' zoom text-warning'>1.3 Taux de croissance par province/milieu</p></Nav.Link>
        <Nav.Link href="/taille_reelle_population_execution"><p className=' zoom text-warning'>1.4 Taille réelle de la population par province/milieu</p></Nav.Link>
        <Nav.Link href="/form_taux_migration"><p className=' zoom text-warning'>1.5 Taux de migration par province/milieu</p></Nav.Link>
        <Nav.Link href="/Population_Total_ApresMigration_Info_Executio"><p className=' zoom text-warning'>1.6 Population totale après migration</p></Nav.Link>  
        <Nav.Link href="/population_active_menu"><p className=' zoom text-warning'>1.7 Population Active</p></Nav.Link>     
        </Nav>
        </Col>

        <Col>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column ">
        <p className='text-warning'><b><u>2. DETERMINATION PIB :</u></b> </p>
        <Nav.Link href="/form_donnees_consommation"><p className=' zoom text-warning'>2.1 données de la consommation</p></Nav.Link>
        <Nav.Link href="/form_investissement_prive"><p className=' zoom text-warning'>2.2 données de l'investissement privé</p></Nav.Link>
        <Nav.Link href="/form_depense_courante"><p className=' zoom text-warning'>2.3 données de dépenses Courante</p></Nav.Link>
        <Nav.Link href="/form_depense_capital"><p className=' zoom text-warning'>2.4 données de dépenses en Capital</p></Nav.Link>
        <Nav.Link href="/donnees_depense_publique_info_execution"><p className=' zoom text-warning'>2.5 données de dépenses publique</p></Nav.Link>
        <Nav.Link href="/form_donnee_exportations"><p className=' zoom text-warning'>2.6 données des exportations</p></Nav.Link>
        <Nav.Link href="/form_donnee_importations"><p className=' zoom text-warning'>2.7 données des importations</p></Nav.Link>
        <Nav.Link href="/donnee_exportations_nettes_info_execution"><p className=' zoom text-warning'>2.8 données des exportations nettes du pays</p></Nav.Link>
        <Nav.Link href="/donnee_demande_interieure_info_execution"><p className=' zoom text-warning'>2.9 Calcul de la Démande intérieure</p></Nav.Link>

        </Nav>
        </Col>

        <Col>
        <Nav.Link href="/production_domestique_info_execution"><p className=' zoom text-warning'>2.10 Calcul de la production domestique</p></Nav.Link>
        <Nav.Link href="/production_domestique_secteur_info_execution"><p className=' zoom text-warning'>2.11 Calcul de la production domestique par secteur</p></Nav.Link>     
        <Nav.Link href="/donnee_demande_interieure_info_execution"><p className=' zoom text-warning'>2.12 Calcul de la Démande intérieure</p></Nav.Link>
        <Nav.Link href="/production_domestique_info_execution"><p className=' zoom text-warning'>2.13 Calcul de la production domestique</p></Nav.Link>
        <Nav.Link href="/production_domestique_secteur_info_execution"><p className=' zoom text-warning'>2.14 Calcul de la production domestique par secteur</p></Nav.Link>     
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column ">
        <p className='text-warning'><b><u>3. CALCULS</u></b> </p>
        <Nav.Link href=""><p className=' zoom text-warning'>3.1 Calculs des indicateurs économiques</p></Nav.Link>
        <Nav.Link href=""><p className=' zoom text-warning'>3.2 Calcul des recettes publiques</p></Nav.Link>
        
        
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