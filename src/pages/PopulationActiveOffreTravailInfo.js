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



function PopulationActiveOffreTravailInfo(props)
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
{isDesktop && <Container className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de la population active dans l'offre de travail</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary'>
           <th>Province</th>
          <th colSpan={4}>Population Active Urbaine</th>
          <th>Total Population Active Urbaine</th>
          <th colSpan={4}>Population Active Rurale</th>
          <th>Total Population Active Rurale</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>

        </tr>

        {props.populationActiveInfo.map((value)=>
        {
          return  <tr>
             <td><i ><b>{value.nom_province}</b></i></td>
             <td><i><b>{value.population_active_urbaine_agriculture}</b></i></td>
             <td><i><b>{value.population_active_urbaine_mines}</b></i></td>
             <td><i><b>{value.population_active_urbaine_industrie}</b></i></td>
             <td><i ><b>{value.population_active_urbaine_service}</b></i></td>
             <td><i className='text-primary'><b>{parseInt(value.population_active_urbaine_agriculture) + parseInt(value.population_active_urbaine_mines) + parseInt(value.population_active_urbaine_industrie) + parseInt(value.population_active_urbaine_service)}</b></i></td>
             <td><i><b>{value.population_active_rurale_agriculture}</b></i></td>
             <td><i><b>{value.population_active_rurale_mines}</b></i></td>
             <td><i ><b>{value.population_active_rurale_industrie}</b></i></td>
             <td><i><b>{value.population_active_rurale_service}</b></i></td>
             <td><i className='text-primary'><b>{parseInt(value.population_active_rurale_agriculture) + parseInt(value.population_active_rurale_mines) + parseInt(value.population_active_rurale_industrie) + parseInt(value.population_active_rurale_service)}</b></i></td>
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

export default PopulationActiveOffreTravailInfo;