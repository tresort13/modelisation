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





function MethodeCalibrageInfo(props)
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
        console.log(props.donneeMethodeCalibrage)
        console.log(props.impotBienService)
        console.log(props.autreImpotIndirect)
        console.log(donsBudgtaire)
        console.log(props.donsProjet)
        console.log(props.coefficientProduction)

        
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de la démande intérieure</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Revenu Provincial</th>
          <th>Revenu Provincial/Milieu Urbain</th>
          <th>Revenu Provincial/Milieu Rural</th>
          <th>Total Revenu Provincial</th>
        </tr>
      </thead>
      <tbody>
     {donneeTotalProvince.map((value)=>
    {
      return <tr style={{border:"2px solid white"}}>
        <td><i ><b>{value.nom_province}</b></i></td>
        <td><i><b>Revenu Provincial</b></i></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.total_province_milieu_urbain).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.total_province_milieu_rural).toFixed())}</b></td>
        
        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.total_province_milieu_urbain) + Number(value.total_province_milieu_rural)).toFixed())}</b></td>
       </tr>     
      })
    }

<tr style={{border:"2px solid white"}}>
          <td><b>Total</b></td>
          <td><b></b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(totalGeneral_province_milieu_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(totalGeneral_province_milieu_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_province).toFixed())}</b></td>
          
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

export default MethodeCalibrageInfo;