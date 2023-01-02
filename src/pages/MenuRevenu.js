import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  './Login.css';
import './PageInfo.css';
import {Link} from  'react-router-dom';
import { useEffect,useState } from 'react';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';



function MenuRevenu(props)
{

    const [message,setMessage] = useState("Approche Révenus")
    const [couleur,setCouleur] = useState("text-warning") 
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header username={props.username} />
{isDesktop && <Container className=' justify-content-center text-center bordure bg-dark' style={{marginTop:50,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={"auto"}>
        <p className={couleur}><i><b>{message}</b></i></p>
        </Col>
    </Row>
   
    <Row className='justify-content-center mb-3 pt-3' >
    <Col xs = {"auto"}>
        <Link to="/form_revenu_salaire" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i variant="secondary"><b>Révenus Salaires</b></i>
        </Button>
        </Link>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_exedant_brute_exploitation" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i variant="secondary"><b>Exédant Brute d'Exploitation</b></i>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3 '>
        <Col xs ={"auto"}>
        <Link to="/form_autres_impots" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <i variant="form_autre_impot"><b>Autres Impôts</b></i>
        </Button>
        </Link>
        </Col>
    </Row>

   
</Container>}


<Footer />
</>
    )
}

export default MenuRevenu;