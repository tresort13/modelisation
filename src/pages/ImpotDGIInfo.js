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
let impotDGI = [{}]
const total_fiscale_2018 = props.impotDGIInfo[0].annee_fiscale_2018 + props.impotDGIInfo[1].annee_fiscale_2018 

const total_fiscale_2019 = props.impotDGIInfo[0].annee_fiscale_2019 + props.impotDGIInfo[1].annee_fiscale_2019 

const total_fiscale_2020 = props.impotDGIInfo[0].annee_fiscale_2020 + props.impotDGIInfo[1].annee_fiscale_2020 

const total_fiscale_2021 = props.impotDGIInfo[0].annee_fiscale_2021 + props.impotDGIInfo[1].annee_fiscale_2021


const ca_annee_fiscale_2022_temp1 = Number( Number(props.impotDGIInfo[0].annee_fiscale_2021) / Number(props.impotDGIInfo[2].annee_fiscale_2020)).toFixed(2)
const ca_annee_fiscale_2022_temp2 = Number(Number(props.impotDGIInfo[0].annee_fiscale_2020) / Number(props.impotDGIInfo[2].annee_fiscale_2019)).toFixed(2)
const ca_annee_fiscale_2022_temp3 = Number(Number(props.impotDGIInfo[0].annee_fiscale_2019) / Number(props.impotDGIInfo[2].annee_fiscale_2018)).toFixed(2)
const ca_annee_fiscale_2022_average = Number((Number(ca_annee_fiscale_2022_temp1) + Number(ca_annee_fiscale_2022_temp2) + Number(ca_annee_fiscale_2022_temp3)) / 3).toFixed(2)
const ca_annee_fiscale_2022_final = Number(Number(props.impotDGIInfo[2].annee_fiscale_2021 ) * Number(ca_annee_fiscale_2022_average)).toFixed()
impotDGI = [...props.impotDGIInfo]
impotDGI[0].annee_fiscale_2022 = ca_annee_fiscale_2022_final
impotDGI[1].annee_fiscale_2022 = 0
impotDGI[2].annee_fiscale_2022 = 0

console.log(impotDGI)
//impotDGI[0].annee_fiscale_2022=ca_annee_fiscale_2022_final
  
  
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
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2022).toFixed())}</b></i></td>
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