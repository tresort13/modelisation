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



function DonneeExportationsNettesInfoExecution(props)
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
{isDesktop && <div>
  <div>
    <p className='text-center text-white ' style={{fontSize:25}}><i><b><u>Les données des exportations nettes du pays seront calculées sur base des données des tables ci-dessous :</u></b></i></p>
  </div>

  <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2000}} >


<div>
<Row className='justify-content-center '>
    <Col xs = {"auto"} className='text-center borders pt-2'>
    <div>
    <h6 ><u><b><i className='text-primary'>Table de données des exportations</i></b></u></h6>
    </div>
    <div>
    <Table striped bordered hover variant="primary">
  <thead>
  <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Exportations</th>
          <th colSpan={4}>Données Exportations Milieu Urbain</th>
          <th>Total Exportations Milieu Urban</th>
          <th colSpan={4}>Données Exportations Milieu Rural</th>
          <th>Total Données Exportations Milieu Rural</th>
          <th colSpan={4}>Données Exportations/secteur</th>
          <th>Total Exportations/Province</th>
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
        {props.donneeExportationsInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><b>{value.nom_province}</b></td>
             <td><b>Exportations</b></td>
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
        
    
  </tbody>
</Table>
    </div>
    </Col>
</Row>


</div>
</Container>


<Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2000}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de données des importations</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Importations</th>
          <th colSpan={4}>Données Importations Milieu Urbain</th>
          <th>Total Importations Milieu Urban</th>
          <th colSpan={4}>Données Importations Milieu Rural</th>
          <th>Total Données Importations Milieu Rural</th>
          <th colSpan={4}>Données Importations/secteur</th>
          <th>Total Importations/Province</th>
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

        {props.donneeImportationsInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><b>{value.nom_province}</b></td>
             <td><b>Importations</b></td>
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
    <Link to="/donnees_exportations_nettes_info" style={{color:'white',textDecorationLine:'none'}}>
    <Button variant="primary" type="submit"  >
    Calculer les données des exportations nettes du pays
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

export default DonneeExportationsNettesInfoExecution;