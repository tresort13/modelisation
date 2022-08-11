import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive'
import HeaderLogin from "./HeaderLogin";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Header from "./Header";


function Homepage2(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    return (
    <>

    <Header username={props.username}/>
       {isDesktop && <Container className="mt-5 mb-5 pt-4">
        

        <Row className="text-center justify-content-center">
            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_donnees_consommation" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données de la consommation</b></i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_investissement_prive" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données de l'investissement privé</b></i>
        </Button>
        </Link>     
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_depense_courante" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données de dépenses Courante</b></i>
        </Button>
        </Link>    
            </Col>
        </Row>

        <Row className="text-center justify-content-center mt-4">
        

            <Col md={4} className="my-auto text-center">
            <Link to="/form_depense_capital" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données de dépenses en Capital</b></i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/donnees_depense_publique_info_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données de dépenses publique</b></i>
        </Button>
        </Link>     
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_donnee_exportations" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données des exportations</b></i>
        </Button>
        </Link>    
            </Col>

        </Row>

        <Row className="text-center justify-content-center mt-4">


            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_donnee_importations" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données des importations</b></i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/donnee_exportations_nettes_info_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>données des exportations nettes du pays</b></i>
        </Button>
        </Link>     
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/donnee_demande_interieure_info_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Calcule de la Démande intérieure</b></i>
        </Button>
        </Link>    
            </Col>

        </Row>


        <Row className="text-center justify-content-center mt-4">


            <Col mdmd={4} className=" mx-auto text-center">
            <Link to="/production_domestique_info_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Calcule de la production domestique</b></i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/production_domestique_secteur_info_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Calcule de la production domestique par secteur</b></i>
        </Button>
        </Link>     
            </Col>

            <Col md={4} className="my-auto text-center">
            
            </Col>

        </Row>



        <Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>

       </Container>}



       <Footer />
       </>


        
    )
}

export default Homepage2;