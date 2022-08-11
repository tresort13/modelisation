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




function TauxNataliteMortaliteInfo(props)
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
            <Header username={props.username}/>
            <div>
{isDesktop && <Container  className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >

    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table du Taux de natalité/mortalité par province et par milieu</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Nom de la Province</th>
          <th>Taux de Natalité/Urbain</th>
          <th>Taux de Mortalité/Urbain</th>
          <th>Taux de Natalité/Rural</th>
          <th>Taux de Mortalité/Rural</th>
        </tr>
      </thead>
      <tbody>
      {props.tauxNataliteMortaliteInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.nom_province}</b></i></td>
             <td><i>{new Intl.NumberFormat().format(value.taux_natalite_urbain * 100)} %</i></td>
             <td><i>{new Intl.NumberFormat().format(value.taux_mortalite_urbain * 100)} %</i></td>
             <td><i>{new Intl.NumberFormat().format(value.taux_natalite_rural * 100)} %</i></td>
             <td><i>{new Intl.NumberFormat().format(value.taux_mortalite_rural * 100)} %</i></td>
            </tr>     
        }) 
        }
       
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="primary" type="submit" onClick={message} >
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

export default TauxNataliteMortaliteInfo;