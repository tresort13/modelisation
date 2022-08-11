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
import FormTauxNataliteMortalite from './FormTauxNataliteMortalite';



function DemandeInterieureUrbaineInfo(props)
{
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

            const message = ()=>
        {
            alert(" désolé la page d'impression n'est pas encore disponible")
        }



  
  
    return (
        <>
            <Header />
            <div>
{isDesktop && <Container className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={"auto"}>
            <Link to="">
            <Image src={require('./est_back.jpeg')}  className='rounded-pill ' style={{width:200}}></Image>
            </Link>
       
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-warning'>Calcule de la Demande Interieure en Milieu Urbain par Province</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr className='text-warning'>
        <th>Province</th>
          <th>Nature : Demande Interieure Milieu Urbain</th>
          <th>Total Demande Interieure Milieu Urbain</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>

        </tr>
        <tr>
        <td></td>
          <td></td>
          <td></td>
          
        </tr>
        
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={message} >
        Imprimer les informations
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}


<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
</div>
<Footer />
        </>
    )
}

export default DemandeInterieureUrbaineInfo;