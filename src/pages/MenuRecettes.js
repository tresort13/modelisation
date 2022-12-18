import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";


function MenuRecettes(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

const navigate = useNavigate()
function dataRecettesPubliques()
{
  e.preventDefault()
  props.dataDonneeRecettesPubliques()
  navigate('/recettes_publiques_info')
}
    
    return (
    <>
     <Header username={props.username}/>
       {isDesktop && <Container className="mt-2 mb-5" >
       <Row className="text-center justify-content-center">
            <Col md={6} className="my-auto text-center">
            <Link to="/form_dgi" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>D G I</b></i>
            </Button>
            </Link>    
            </Col>

            <Col mdmd={6} className="my-auto text-center">
            <Link to="/menu_dgda" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>D G D A</b></i>
           </Button>
            </Link>            
            </Col>
      </Row>

        <Row className="text-center justify-content-center mt-3 mb-5">
            <Col md={6} className="my-auto text-center">
            <Link to="/form_recettes_dgrad" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>D G R A D</b></i>
            </Button>
             </Link>     
            </Col>

            <Col md={6} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button onClick={(e)=>dataRecettesPubliques(e)} variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Recettes publiques</b></i>
            </Button>
             </Link>     
            </Col>
        </Row>
        <Row className="mt-5">

        </Row>
       </Container>}
       <Footer />
       </>
        
    )
}

export default MenuRecettes;