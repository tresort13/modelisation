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




function DonneesConsommationInfo(props)
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

        const total_milieu_urbain_alimentaire = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_alimentaire)
          return total
        },0)
        
        const total_milieu_urbain_biens_durables = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_biens_durables)
          return total
        },0)
        
        const total_milieu_urbain_autres_biens = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_autres_biens)
          return total
        },0)

       

        const total_milieu_rurale_alimentaire = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_alimentaire)
          return total
        },0)

        const total_milieu_rurale_biens_durables = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_biens_durables)
          return total
        },0)

        const total_milieu_rurale_autres_biens = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_autres_biens)
          return total
        },0)
  
       

        const total_milieu_categorie_alimentaire = Number(total_milieu_urbain_alimentaire) + Number(total_milieu_rurale_alimentaire)

        const total_milieu_categorie_biens_durables = Number(total_milieu_urbain_biens_durables) + Number(total_milieu_rurale_biens_durables)

        const total_milieu_categorie_autres_biens = Number(total_milieu_urbain_autres_biens) + Number(total_milieu_rurale_autres_biens)

        const total_milieu_urbain = Number(total_milieu_urbain_alimentaire) + Number(total_milieu_urbain_biens_durables) + Number(total_milieu_urbain_autres_biens) 

        const total_milieu_rural = Number(total_milieu_rurale_alimentaire) + Number(total_milieu_rurale_biens_durables) + Number(total_milieu_rurale_autres_biens)

        const total_milieu_categorie = Number(total_milieu_categorie_alimentaire) + Number(total_milieu_categorie_biens_durables) + Number(total_milieu_categorie_autres_biens)
  
        console.log(total_milieu_rural)
    return (
        <>
            <Header />
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2000}} >


<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de données de la consommation</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Consommation</th>
          <th colSpan={3}>données Consommation "C"/Milieu Urbain</th>
          <th>Total Consommation "C"/Milieu Urbain</th>
          <th colSpan={3}>données Consommation "C"/Milieu Rural</th>
          <th>Total Consommation "C"/Milieu Rural</th>
          <th colSpan={3}>données Consommation "C"/Catégories</th>
          <th>Total Consommation "C"/Province</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
          <td></td>
          <td></td>
          <td><b className='text-primary'>Consommation alimentaire</b></td>
          <td><b className='text-primary'>Consommation biens durables</b></td>
          <td><b className='text-primary'>Consommation autres biens</b></td>
          <td></td>
          <td><b className='text-primary'>Consommation alimentaire</b></td>
          <td><b className='text-primary'>Consommation biens durables</b></td>
          <td><b className='text-primary'>Consommation autres biens</b></td>
          <td></td>
          <td><b className='text-primary'>Consommation alimentaire</b></td>
          <td><b className='text-primary'>Consommation biens durables</b></td>
          <td><b className='text-primary'>Consommation autres biens</b></td>
          <td></td>

        </tr>
        {props.donneeConsommationInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.nom_province}</b></i></td>
             <td><i><b>Consommation</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_alimentaire).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_biens_durables).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_autres_biens).toFixed())}</b></i></td>
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_alimentaire) + Number(value.milieu_urbaine_biens_durables) + Number(value.milieu_urbaine_autres_biens)).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_alimentaire).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_biens_durables).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_autres_biens).toFixed())}</b></i></td>
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_alimentaire) + Number(value.milieu_rurale_biens_durables) + Number(value.milieu_rurale_autres_biens)).toFixed())}</b></i></td>
             
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_alimentaire) + Number(value.milieu_rurale_alimentaire)).toFixed())}</b></i></td>
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_biens_durables) + Number(value.milieu_rurale_biens_durables)).toFixed())}</b></i></td>
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_autres_biens) + Number(value.milieu_rurale_autres_biens)).toFixed())}</b></i></td>

             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_alimentaire) + Number(value.milieu_rurale_alimentaire) + Number(value.milieu_urbaine_biens_durables) + Number(value.milieu_rurale_biens_durables) + Number(value.milieu_urbaine_autres_biens) + Number(value.milieu_rurale_autres_biens)).toFixed())}</b></i></td>
            </tr>     
        }) 
        }
        <tr style={{border:"2px solid white"}}>
          <td><i><b>Total</b></i></td>
          <td><i><b></b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_alimentaire).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_biens_durables).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_autres_biens).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_alimentaire).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_biens_durables).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_autres_biens).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rural).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_categorie_alimentaire).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_categorie_biens_durables).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_categorie_autres_biens).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_categorie).toFixed())}</b></i></td>
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

export default DonneesConsommationInfo;