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



function ImpotDGIInfo(props)
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
console.log(props.impotDGIInfo)
const total_fiscale_2018 = props.impotDGIInfo.reduce((total,value,index)=>
{
    if(index!=2)
    {
    total = total + parseInt(value.annee_fiscale_2018)
    return total
    }
},0)

const total_fiscale_2019 = props.impotDGIInfo.reduce((total,value)=>
{
  console.log(value.annee_fiscale_2019)
  total = total + parseInt(value.annee_fiscale_2019)
  return total
},0)

const total_fiscale_2020 = props.impotDGIInfo.reduce((total,value)=>
{
  console.log(value.annee_fiscale_2020)
  total = total + parseInt(value.annee_fiscale_2020)
  return total
},0)

const total_fiscale_2021 = props.impotDGIInfo.reduce((total,value)=>
{
  console.log(value.annee_fiscale_2021)
  total = total + parseInt(value.annee_fiscale_2021)
  return total
},0)

  
  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table années fiscales DGI</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Recettes DGI</th>
          <th>Année Fiscale 2018</th>
          <th>Année Fiscale 2019</th>
          <th>Année Fiscale 2020</th>
          <th>Année Fiscale 2021</th>
          <th>Année Fiscale 2022</th>
        </tr>
      </thead>
      <tbody>
        {props.impotDGIInfo.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.recettes_dgi}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2018).toFixed()) }</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2019).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2020).toFixed())}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2021).toFixed())}</b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2018).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2019).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2020).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2021).toFixed())}</b></i></td>
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

export default ImpotDGIInfo;