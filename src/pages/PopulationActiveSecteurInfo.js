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
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';
import { useEffect,useState } from 'react';




function PopulationActiveSecteurInfo(props)
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

        const total_taille_population_final = []
        const total_population_final = []
        const taux_croissance = props.tauxNataliteMortaliteInfo.map((value)=>
{
  return {
          nom_province : value.nom_province,
          croissance_urbain : Number(value.taux_natalite_urbain).toFixed(4) - Number(value.taux_mortalite_urbain).toFixed(4),
          croissance_rural :Number(value.taux_natalite_rural).toFixed(4) - Number(value.taux_mortalite_rural).toFixed(4)
  }
})

        

        const total_taille_population = props.populationInfo.map((value)=>
        {
           
          return taux_croissance.map((value2)=>
            {
              if (value.nom_province==value2.nom_province)
              return  total_taille_population_final.push({ 
              nom_province : value.nom_province,
              total_split_urbain :Number(value.split_urbain) + (Number(value.split_urbain) * Number(value2.croissance_urbain).toFixed(4)),
              total_split_rural :Number(value.split_rural) + (Number(value.split_rural) * Number(value2.croissance_rural).toFixed(4)),
              total_taille : Number((Number(value.split_urbain) + (Number(value.split_urbain) * Number(value2.croissance_urbain).toFixed(4)))  +  (Number(value.split_rural) + (Number(value.split_rural) * Number(value2.croissance_rural).toFixed(4)))).toFixed()
            })
          })        
          })




        
   
console.log(total_taille_population_final)
  
  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>la Population Active par Secteur </i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th colSpan={4}>Population Active Urbaine</th>
          <th colSpan={4}>Population Active Rurale</th>
        </tr>
      </thead>
      <tbody>

      <tr style={{border:"2px solid white"}}>
      <td></td>
      <td><b className='text-primary'>Agriculture</b></td>
      <td><b className='text-primary'>Mines</b></td>
      <td><b className='text-primary'>insdustrie</b></td>
      <td><b className='text-primary'>Service</b></td>
      <td><b className='text-primary'>Agriculture</b></td>
      <td><b className='text-primary'>Mines</b></td>
      <td><b className='text-primary'>insdustrie</b></td>
      <td><b className='text-primary'>Service</b></td>
    </tr>
      
      {total_taille_population_final.map((value)=>
        {
          return props.tauxMigrationInfo.map((value2)=>
          { 
            return props.populationActiveInfo.map((value3)=>
            {
              return props.populationActiveSecteurInfo.map((value4)=>
              {
                if ((value.nom_province==value2.nom_province) && (value.nom_province==value3.nom_province) && (value.nom_province==value4.nom_province))
                return <tr style={{border:"2px solid white"}}>
                <td><i ><b>{value.nom_province}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_urbain) + ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_urbaine_participation).toFixed(4)))  * (Number(value4.population_active_urbaine_participation_agriculture).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_urbain) + ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_urbaine_participation).toFixed(4)))  * (Number(value4.population_active_urbaine_participation_mines).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_urbain) + ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) *  (Number(value3.population_active_urbaine_participation).toFixed(4)))  *(Number(value4.population_active_urbaine_participation_industrie).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_urbain) + ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_urbaine_participation).toFixed(4))) * (Number(value4.population_active_urbaine_participation_service).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_rural) - ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_rurale_participation).toFixed(4))) *(Number(value4.population_active_rurale_participation_agriculture).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_rural) - ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_rurale_participation).toFixed(4)))  *(Number(value4.population_active_rurale_participation_mines).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_rural) - ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_rurale_participation).toFixed(4))) * (Number(value4.population_active_rurale_participation_industrie).toFixed(4))).toFixed())}</b></i></td>
                <td><i className='text-primary'><b>{new Intl.NumberFormat().format((Number(((value.total_split_rural) - ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) * (Number(value3.population_active_rurale_participation).toFixed(4))) *(Number(value4.population_active_rurale_participation_service).toFixed(4))).toFixed())}</b></i></td>
               </tr>   
              })

            })
              
            
          })
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

export default PopulationActiveSecteurInfo;