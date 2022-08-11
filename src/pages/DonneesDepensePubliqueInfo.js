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




function DonneesDepensePubliqueInfo(props)
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

        const total_milieu_urbain_agriculture = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_agriculture)
          return total
        },0)
        
        const total_milieu_urbain_mines = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_mines)
          return total
        },0)
        
        const total_milieu_urbain_industrie = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_industrie)
          return total
        },0)

        const total_milieu_urbain_service = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_service)
          return total
        },0)

        const total_milieu_rurale_agriculture = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_agriculture)
          return total
        },0)

        const total_milieu_rurale_mines = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_mines)
          return total
        },0)

        const total_milieu_rurale_industrie = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_industrie)
          return total
        },0)
  
        const total_milieu_rurale_service = props.donneeDepenseCouranteInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_service)
          return total
        },0)

        const total_secteur_agriculture = total_milieu_urbain_agriculture + total_milieu_rurale_agriculture
        
        const total_secteur_mines = total_milieu_urbain_mines + total_milieu_rurale_mines
        
        const total_secteur_industrie = total_milieu_urbain_industrie + total_milieu_rurale_industrie

        const total_secteur_service = total_milieu_urbain_service + total_milieu_rurale_service


        const total_milieu_urbain = total_milieu_urbain_agriculture + total_milieu_urbain_mines + total_milieu_urbain_industrie + total_milieu_urbain_service

        const total_milieu_rural = total_milieu_rurale_agriculture + total_milieu_rurale_mines + total_milieu_rurale_industrie + total_milieu_rurale_service
  
     
        const total_milieu_urbain_agriculture_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_agriculture)
          return total
        },0)
        
        const total_milieu_urbain_mines_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_mines)
          return total
        },0)
        
        const total_milieu_urbain_industrie_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_industrie)
          return total
        },0)

        const total_milieu_urbain_service_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_service)
          return total
        },0)

        const total_milieu_rurale_agriculture_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_agriculture)
          return total
        },0)

        const total_milieu_rurale_mines_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_mines)
          return total
        },0)

        const total_milieu_rurale_industrie_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_industrie)
          return total
        },0)
  
        const total_milieu_rurale_service_capital = props.donneeDepenseCapitalInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_service)
          return total
        },0)

        const total_secteur_agriculture_capital = total_milieu_urbain_agriculture_capital + total_milieu_rurale_agriculture_capital
        
        const total_secteur_mines_capital = total_milieu_urbain_mines_capital + total_milieu_rurale_mines_capital
        
        const total_secteur_industrie_capital = total_milieu_urbain_industrie_capital + total_milieu_rurale_industrie_capital

        const total_secteur_service_capital = total_milieu_urbain_service_capital + total_milieu_rurale_service_capital


        const total_milieu_urbain_capital = total_milieu_urbain_agriculture + total_milieu_urbain_mines + total_milieu_urbain_industrie + total_milieu_urbain_service

        const total_milieu_rural_capital = total_milieu_rurale_agriculture + total_milieu_rurale_mines + total_milieu_rurale_industrie + total_milieu_rurale_service
  
     
        const total_milieu_urbain_agriculture_publique = total_milieu_urbain_agriculture + total_milieu_urbain_agriculture_capital
        const total_milieu_urbain_mines_publique = total_milieu_urbain_mines + total_milieu_urbain_mines_capital
        const total_milieu_urbain_industrie_publique = total_milieu_urbain_industrie + total_milieu_urbain_industrie_capital
        const total_milieu_urbain_service_publique = total_milieu_urbain_service + total_milieu_urbain_service_capital

        const total_milieu_rurale_agriculture_publique = total_milieu_rurale_agriculture + total_milieu_rurale_agriculture_capital
        const total_milieu_rurale_mines_publique = total_milieu_rurale_mines + total_milieu_rurale_mines_capital
        const total_milieu_rurale_industrie_publique = total_milieu_rurale_industrie + total_milieu_rurale_industrie_capital
        const total_milieu_rurale_service_publique = total_milieu_rurale_service + total_milieu_rurale_service_capital

        const total_secteur_agriculture_publique = total_secteur_agriculture + total_secteur_agriculture_capital
        const total_secteur_mines_publique = total_secteur_mines + total_secteur_mines_capital
        const total_secteur_industrie_publique = total_secteur_industrie + total_secteur_industrie_capital
        const total_secteur_service_publique = total_secteur_service + total_secteur_service_capital


  
        const total_milieu_urbain_publique = total_milieu_urbain_agriculture_publique + total_milieu_urbain_mines_publique + total_milieu_urbain_industrie_publique + total_milieu_urbain_service_publique
        const total_milieu_rural_publique = total_milieu_rurale_agriculture_publique + total_milieu_rurale_mines_publique + total_milieu_rurale_industrie_publique + total_milieu_rurale_service_publique
        const total_secteur_publique = total_secteur_agriculture_publique + total_secteur_mines_publique + total_secteur_industrie_publique + total_secteur_service_publique
  
  
  

  
  
    return (
        <>
            <Header />
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2000}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de Données de Dépenses Publique</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Dépenses Publiques</th>
          <th colSpan={4}>Données Publiques Milieu Urbain</th>
          <th>Total Dépenses Publiques Milieu Urbain</th>
          <th colSpan={4}>Données Publiques Milieu Rural</th>
          <th>Total Dépenses Publiques Milieu Rural</th>
          <th colSpan={4}>Données Dépenses Publiques/secteur</th>
          <th>Total Dépenses Publiques/Province</th>
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
        {props.donneeDepenseCouranteInfo.map((value)=>
    {
      return  props.donneeDepenseCapitalInfo.map((value2)=>
      {
        if(value.nom_province==value2.nom_province)
        return <tr>
        <td><i ><b>{value.nom_province}</b></i></td>
        <td><i><b>Dépenses publiques</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_agriculture)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_mines) + Number(value2.milieu_urbaine_mines)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_industrie)).toFixed())}</b></i></td>
        <td><i ><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_service) + Number(value2.milieu_urbaine_service)).toFixed())}</b></i></td>
        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_agriculture) + Number(value.milieu_urbaine_mines) + Number(value.milieu_urbaine_industrie) + Number(value.milieu_urbaine_service)) + (Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_mines) + Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_service))).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_agriculture) + Number(value2.milieu_rurale_agriculture)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_mines) + Number(value2.milieu_rurale_mines)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_industrie) + Number(value2.milieu_rurale_industrie)).toFixed())}</b></i></td>
        <td><i ><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_service) + Number(value2.milieu_rurale_service)).toFixed())}</b></i></td>
        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_rurale_agriculture) + Number(value.milieu_rurale_mines) + Number(value.milieu_rurale_industrie) + Number(value.milieu_rurale_service)) + (Number(value2.milieu_rurale_agriculture) + Number(value2.milieu_rurale_mines) + Number(value2.milieu_rurale_industrie) + Number(value2.milieu_rurale_service))).toFixed())}</b></i></td>     
        
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture) +  Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_rurale_agriculture)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_mines) + Number(value.milieu_rurale_mines) +  Number(value2.milieu_urbaine_mines) + Number(value2.milieu_rurale_mines)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_industrie) + Number(value.milieu_rurale_industrie) +  Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_rurale_industrie)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_service) + Number(value.milieu_rurale_service) +  Number(value2.milieu_urbaine_service) + Number(value2.milieu_rurale_service)).toFixed())}</b></i></td>

        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture) +  Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_rurale_agriculture) + Number(value.milieu_urbaine_mines) + Number(value.milieu_rurale_mines) +  Number(value2.milieu_urbaine_mines) + Number(value2.milieu_rurale_mines) + Number(value.milieu_urbaine_industrie) + Number(value.milieu_rurale_industrie) +  Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_rurale_industrie) + Number(value.milieu_urbaine_service) + Number(value.milieu_rurale_service) +  Number(value2.milieu_urbaine_service) + Number(value2.milieu_rurale_service))).toFixed())}</b></i></td>
        
        </tr>     
      })
    }) 
    }
     

<tr>
          <td><i><b>Total</b></i></td>
          <td><i><b></b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_agriculture_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_mines_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_industrie_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_service_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_urbain_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_agriculture_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_mines_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_industrie_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rurale_service_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_milieu_rural_publique).toFixed())}</b></i></td>

          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_agriculture_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_mines_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_industrie_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_service_publique).toFixed())}</b></i></td>
          <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_secteur_publique).toFixed())}</b></i></td>
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

export default DonneesDepensePubliqueInfo;