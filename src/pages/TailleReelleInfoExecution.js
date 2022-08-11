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



function TailleReelleInfoExecution(props)
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

const total_taille_province = props.populationInfo.reduce((total,value)=>
{
  console.log(value.taille_province)
  total = total + parseInt(value.taille_province)
  return total
},0)

const total_split_urbaine = props.populationInfo.reduce((total,value)=>
{
  total=total + parseInt(value.split_urbain)
  return total
},0)

const total_split_rural = props.populationInfo.reduce((total,value)=>
{
  total=total + parseInt(value.split_rural)
  return total
},0)
       
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <div>
  <div>
    <p className='text-center text-white ' style={{fontSize:25}}><i><b><u>La taille réelle de la population par province et milieu sera calculé sur base des données des tables ci-dessous :</u></b></i></p>
  </div>

 <Container className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de la Population par province</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Nom de la Province</th>
          <th>Total Taille de la Province</th>
          <th>Total Split Population Urbaine</th>
          <th>Total Split Population Rural</th>
        </tr>
      </thead>
      <tbody>
        {props.populationInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
          <td><i ><b>{value.nom_province}</b></i></td>
          <td><i>{new Intl.NumberFormat().format(Number(value.taille_province).toFixed()) }</i></td>
          <td><i>{new Intl.NumberFormat().format(Number(value.split_urbain).toFixed())}</i></td>
          <td><i>{new Intl.NumberFormat().format(Number(value.split_rural).toFixed())}</i></td>
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

<Container className='bg-dark justify-content-center text-center borders mb-3' style={{marginTop:20}} >


<div>
<Row className='justify-content-center '>
    <Col xs = {"auto"} className='text-center borders pt-2'>
    <div>
    <h6 ><u><b><i className='text-primary'>Table de Taux de croissance par province et par milieu</i></b></u></h6>
    </div>
    <div>
    <Table striped bordered hover variant="primary">
  <thead>
    <tr className='text-primary'>
        <th>Nom de la Province</th>
        <th>Taux de croissance Urbain</th>
        <th>Taux de Croissance Rural</th>
    </tr>
  </thead>
  <tbody>
  {props.tauxNataliteMortaliteInfo.map((value)=>
    {
      return  <tr style={{border:"2px solid white"}}>
         <td><i ><b>{value.nom_province}</b></i></td>
         <td className='text-primary'><i><b>{new Intl.NumberFormat().format(Number((Number(value.taux_natalite_urbain).toFixed(4) - Number(value.taux_mortalite_urbain).toFixed(4)) * 100).toFixed(4))} %</b></i></td>
         <td className='text-primary'><i><b>{new Intl.NumberFormat().format(Number((Number(value.taux_natalite_rural).toFixed(4) - Number(value.taux_mortalite_rural).toFixed(4)) * 100).toFixed(4))} %</b></i></td>
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
    <Col xs ={4} >
    <Link to="/taille_reelle_population_info" style={{color:'white',textDecorationLine:'none'}}>
    <Button variant="primary" type="submit"  >
    Calculer la taille réelle de la population
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

export default TailleReelleInfoExecution;