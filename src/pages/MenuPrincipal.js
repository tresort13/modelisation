import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";


function MenuPrincipal(props)
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
       {isDesktop && <Container className=" mb-5" style={{marginTop:100}}>
       <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/homepage" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>POPULATION</b></i>
            </Button>
            </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/menu_determination_pib" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>DETERMINATION PIB</b></i>
           </Button>
            </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/menu_calculs" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>CALCULS</b></i>
            </Button>
             </Link>     
            </Col>

           </Row>
       </Container>}
       <Footer />
       </>
        
    )
}

export default MenuPrincipal;