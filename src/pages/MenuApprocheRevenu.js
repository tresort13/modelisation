import React from 'react';
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

function MenuApprocheRevenu(props)
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
       {isDesktop && <Container className=" mb-5" style={{marginTop:50}}>
       <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/menu_revenu" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:250,height:250}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Approche Révenu</b></i>
            </Button>
            </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/total_impot_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:250,height:250}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Total Impôts</b></i>
           </Button>
            </Link>            
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_subvention_production" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:250,height:250}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Subventions Production</b></i>
           </Button>
            </Link>            
            </Col>
      </Row>

        <Row className="text-center justify-content-center mt-3 mb-5">
            <Col md={4} className="my-auto text-center">
            <Link to="/form_subvention_consommation" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:250,height:250}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Subventions Consommations</b></i>
            </Button>
             </Link>     
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/total_subvention_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button  variant="warning" style={{width:250,height:250}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Total Subventions</b></i>
            </Button>
             </Link>     
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/total_subvention_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button  variant="warning" style={{width:250,height:250}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Révenu Provincial</b></i>
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




export default MenuApprocheRevenu;