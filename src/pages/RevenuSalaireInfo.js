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



function RevenuSalaireInfo(props)
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
console.log(props.revenusSalaires)
const total_salaires_urbain_agricultures = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaires_urbain_agricultures)
          return total
        },0)
        
        const total_salaire_urbain_insdustries_extractives = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaire_urbain_insdustries_extractives)
          return total
        },0)
        
        const total_salaires_urbain_industries_manufactures = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaires_urbain_industries_manufactures)
          return total
        },0)

        const total_salaires_urbain_services = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaires_urbain_services)
          return total
        },0)

        const total_salaires_rural_agricultures = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaires_rural_agricultures)
          return total
        },0)

        const total_salaire_rural_insdustries_extractives = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaire_rural_insdustries_extractives)
          return total
        },0)

        const total_salaires_rural_industries_manufactures = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaires_rural_industries_manufactures)
          return total
        },0)

        const total_salaires_rural_services = props.revenusSalaires.reduce((total,value)=>
        {

          total = total + Number(value.salaires_rural_services)
          return total
        },0)


        const total_milieu_urbain = Number(total_salaires_urbain_agricultures) + Number(total_salaire_urbain_insdustries_extractives) + Number(total_salaires_urbain_industries_manufactures) + Number(total_salaires_urbain_services)

        const total_milieu_rural = Number(total_salaires_rural_agricultures) + Number(total_salaire_rural_insdustries_extractives) + Number(total_salaires_rural_industries_manufactures) + Number(total_salaires_rural_services)

        const total_secteur_primaire = Number(total_salaires_urbain_agricultures) + Number(total_salaire_urbain_insdustries_extractives) + Number(total_salaires_rural_agricultures) + Number(total_salaire_rural_insdustries_extractives)

        const total_secteur_secondaire =  Number(total_salaires_urbain_industries_manufactures) + Number(total_salaires_rural_industries_manufactures)

        const total_secteur_tertiaire = Number(total_salaires_urbain_services) + Number(total_salaires_rural_services) 
  
        const total_impot_salaire = Number(total_secteur_primaire) + Number(total_secteur_secondaire) + Number(total_secteur_tertiaire) 

        props.setImpotRevenuPersonnePhysique([{"impotRevenuPersonnePhysique":Number(total_impot_salaire) * 0.015}])
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table Révenus Salaires</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Révenus Salaires</th>
          <th colSpan={4}>Données Révenus: Salaires/Milieu Urbain</th>
          <th>Total Révenus Salaires/Milieu Urbain</th>
          <th colSpan={4}>Données Révenus: Salaires/Milieu Rural</th>
          <th>Total Révenus Salaires/Milieu Urbain</th>
          <th colSpan={3}>Révenu: Salaires par Secteur</th>
          <th>Total Impôts sur Salaires/Province</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
          <td></td>
          <td></td>
          <td><b className='text-primary'>Salaires/Agriculture</b></td>
          <td><b className='text-primary'>Salaires/Industrie Extratives</b></td>
          <td><b className='text-primary'>Salaires/Industrie Manufacturières</b></td>
          <td><b className='text-primary'>Salaires Services</b></td>
          <td></td>
          <td><b className='text-primary'>Salaires/Agriculture</b></td>
          <td><b className='text-primary'>Salaires/Industrie Extratives</b></td>
          <td><b className='text-primary'>Salaires/Industrie Manufacturières</b></td>
          <td><b className='text-primary'>Salaires Services</b></td>
          <td></td>
          <td><b className='text-primary'>Primaire</b></td>
          <td><b className='text-primary'>Secondaire</b></td>
          <td><b className='text-primary'>Tertiare</b></td>
          <td></td>

        </tr>
        {props.revenusSalaires.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><b>{value.nom_province}</b></td>
             <td><b>Salaires sur Révenus</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaires_urbain_agricultures).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaire_urbain_insdustries_extractives).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaires_urbain_industries_manufactures).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaires_urbain_services).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.salaires_urbain_agricultures) + Number(value.salaire_urbain_insdustries_extractives) + Number(value.salaires_urbain_industries_manufactures) + Number(value.salaires_urbain_services)).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaires_rural_agricultures).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaire_rural_insdustries_extractives).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaires_rural_industries_manufactures).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.salaires_rural_services).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.salaires_rural_agricultures)+ Number(value.salaire_rural_insdustries_extractives)+ Number(value.salaires_rural_industries_manufactures)+ Number(value.salaires_rural_services)).toFixed())}</b></td>
           
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.salaires_urbain_agricultures)+ Number(value.salaire_urbain_insdustries_extractives) + Number(value.salaires_rural_agricultures)+ Number(value.salaire_rural_insdustries_extractives)).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.salaires_urbain_industries_manufactures)+ Number(value.salaires_rural_agricultures) ).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.salaires_rural_services)+ Number(value.salaires_rural_services) ).toFixed())}</b></td>
             

             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.salaires_urbain_agricultures)+ Number(value.salaire_urbain_insdustries_extractives) + Number(value.salaires_rural_agricultures)+ Number(value.salaire_rural_insdustries_extractives) + Number(value.salaires_urbain_industries_manufactures)+ Number(value.salaires_rural_agricultures) + Number(value.salaires_rural_services)+ Number(value.salaires_rural_services)).toFixed())}</b></td>

            </tr>     
        }) 
        }

<tr style={{border:"2px solid white"}}>
          <td><b>Total</b></td>
          <td><b></b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaires_urbain_agricultures).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaire_urbain_insdustries_extractives).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaires_urbain_industries_manufactures).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaires_urbain_services).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaires_rural_agricultures).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaire_rural_insdustries_extractives).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaires_rural_industries_manufactures).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_salaires_urbain_services).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rural).toFixed())}</b></td>


          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_primaire).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_secondaire).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_tertiaire).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_salaire).toFixed())}</b></td>
        </tr> 
        
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

export default RevenuSalaireInfo;