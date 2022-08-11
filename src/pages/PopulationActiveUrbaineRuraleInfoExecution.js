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



function PopulationActiveUrbaineRuraleInfoExecution(props)
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
{isDesktop && <div>
     <Container className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Pourcentage de participation à la population active</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Nom de la Province</th>
          <th>% de participation à la Population Active-Milieu Urbain</th>
          <th>% de participation à la Population Active-Milieu Urbain</th>
        </tr>
      </thead>
      <tbody>
      {props.populationActiveInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.nom_province}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.population_active_urbaine_participation).toFixed(4) * 100)} %</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.population_active_rurale_participation).toFixed(4) * 100)} %</b></i></td>
            </tr>     
        }) 
        }
        
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



</div>


</Container>
<Container className='bg-dark justify-content-center text-center borders mb-5'>
<Row className='justify-content-center pb-3 pt-3'>
    <Col xs ={"auto"} >
    <Link to="/population_active_urbaine_rurale_info" style={{color:'white',textDecorationLine:'none'}}>
    <Button variant="primary" type="submit"  >
    Determination de la Population Active Milieu Urbain/Rural
    </Button>
    </Link>
    </Col>
</Row>
</Container>
</div>}


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

export default PopulationActiveUrbaineRuraleInfoExecution;