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


function Homepage(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    return (
    <>

    <Header username={props.username} />
       {isDesktop && <Container className="mt-5 mb-5 pt-4">
        <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/form_population_province" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Population par province</b></i>
        </Button>
        </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_taux_natalite_mortalite" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Taux de natalité/mortalié</b></i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/taux_croissance_info_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Taux de croissance par province/milieu</b></i>
        </Button>
        </Link>     
            </Col>

        </Row>

        <Row className="text-center justify-content-center mt-4">
            <Col md={4} className="my-auto text-center">
            <Link to="/taille_reelle_population_execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Taille réelle de la population par province/milieu</b></i>
        </Button>
        </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_taux_migration" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Taux de migration par province/milieu</b></i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/Population_Total_ApresMigration_Info_Execution" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:350,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Population totale par province/milieu après migration</b></i>
        </Button>
        </Link>     
            </Col>

        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>

        <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/population_active_menu" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>population active</b> </i>
        </Button>
        </Link>    
            </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>

       


       </Container>}

       {isMobileOrTablet && <Container className="my-auto mt-3 justify-content-center mb-5">
        
       <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">Population par province</i>
        </Button>
        </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">Taux de natalité/mortalié</i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">Taux de croissance par province/milieu</i>
        </Button>
        </Link>     
            </Col>

        </Row>

        <Row className="text-center justify-content-center mt-4">
            <Col md={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">Taille réelle de la population par province/milieu</i>
        </Button>
        </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">Taux de migration par province/milieu</i>
        </Button>
        </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">Population totale par province/milieu après migration</i>
        </Button>
        </Link>     
            </Col>

        </Row>
        
        <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/form_baggage_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:80}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary">population active dans l'offre de travail</i>
        </Button>
        </Link>    
            </Col>
            </Row>

        <Row className="mt-3">
          <Col md={12}>
            <p></p>
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

export default Homepage;