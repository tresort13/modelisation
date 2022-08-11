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




function DonneesDepenseCapitalInfo(props)
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

        const total_milieu_urbain_agriculture = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_agriculture)
          return total
        },0)
        
        const total_milieu_urbain_mines = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_mines)
          return total
        },0)
        
        const total_milieu_urbain_industrie = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_industrie)
          return total
        },0)

        const total_milieu_urbain_service = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_service)
          return total
        },0)

        const total_milieu_rurale_agriculture = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_agriculture)
          return total
        },0)

        const total_milieu_rurale_mines = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_mines)
          return total
        },0)

        const total_milieu_rurale_industrie = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_industrie)
          return total
        },0)
  
        const total_milieu_rurale_service = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_service)
          return total
        },0)


        const total_secteur_agriculture = total_milieu_urbain_agriculture + total_milieu_rurale_agriculture
        
        const total_secteur_mines = total_milieu_urbain_mines + total_milieu_rurale_mines
        
        const total_secteur_industrie = total_milieu_urbain_industrie + total_milieu_rurale_industrie

        const total_secteur_service = total_milieu_urbain_service + total_milieu_rurale_service



        const total_milieu_urbain = Number(total_milieu_urbain_agriculture) + Number(total_milieu_urbain_mines) + Number(total_milieu_urbain_industrie) + Number(total_milieu_urbain_service)

        const total_milieu_rural = Number(total_milieu_rurale_agriculture) + Number(total_milieu_rurale_mines) + Number(total_milieu_rurale_industrie) + Number(total_milieu_rurale_service)
  
        const total_secteur = Number(total_secteur_agriculture) + Number(total_secteur_mines) + Number(total_secteur_industrie) + Number(total_secteur_service)
  
  

  

  
  
    return (
        <>
            <Header />
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2000}} >


<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de données de dépenses en Capital</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Dépenses en Capital</th>
          <th colSpan={4}>Données Dépenses en Capital Milieu Urbain</th>
          <th>Total Dépenses  en Capital Milieu Urban</th>
          <th colSpan={4}>Données Dépenses  en Capital Milieu Rural</th>
          <th>Total Dépenses en Capital Milieu Rural</th>
          <th colSpan={4}>Données Dépenses  en Capital/secteur</th>
          <th>Total Dépenses en Capital /Province</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
          <td></td>
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
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>

        </tr>
        {props.donneeDepenseCapitalInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><b>{value.nom_province}</b></td>
             <td><b>Dépenses en Capital</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_agriculture).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_mines).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_industrie).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_urbaine_service).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) + Number(value.milieu_urbaine_mines) + Number(value.milieu_urbaine_industrie) + Number(value.milieu_urbaine_service)).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_agriculture).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_mines).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_industrie).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.milieu_rurale_service).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_agriculture)+ Number(value.milieu_rurale_mines)+ Number(value.milieu_rurale_industrie)+ Number(value.milieu_rurale_service)).toFixed())}</b></td>
           
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture)+ Number(value.milieu_rurale_agriculture) ).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_mines)+ Number(value.milieu_rurale_mines) ).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_industrie)+ Number(value.milieu_rurale_industrie) ).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_service)+ Number(value.milieu_rurale_service) ).toFixed())}</b></td>

             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture) + Number(value.milieu_urbaine_mines)+ Number(value.milieu_rurale_mines) + Number(value.milieu_urbaine_industrie)+ Number(value.milieu_rurale_industrie) + Number(value.milieu_urbaine_service)+ Number(value.milieu_rurale_service)).toFixed())}</b></td>

            </tr>     
        }) 
        }
        
        <tr style={{border:"2px solid white"}}>
          <td><i><b>Total</b></i></td>
          <td><i><b></b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_agriculture).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_mines).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_industrie).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_service).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_agriculture).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_mines).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_industrie).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_service).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rural).toFixed())}</b></i></td>

          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_agriculture).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_mines).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_industrie).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_service).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur).toFixed())}</b></i></td>
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

export default DonneesDepenseCapitalInfo;