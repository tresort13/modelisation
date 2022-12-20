import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  './Login.css';
import './PageInfo.css';
import {Link} from  'react-router-dom';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';



function RecettesPubliquesInfo(props)
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

   console.log(props.recettesPubliques)
   const pib_annee_fiscale_2022= Number(Number(props.impotDgiInfo[2].annee_fiscale_2021) * (1 + Number(props.impotPourcentageCroissance))).toFixed(2)

   const total_recettes_publiques = props.recettesPubliques.reduce((total,value)=>
   {
      total = total + Number(value.annee_fiscale_2022)
      return total
   },0)

   const pression_fiscale = (total_recettes_publiques / pib_annee_fiscale_2022) * 100
  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table Recettes Publiques</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Recettes Publiques</th>
          <th>Année Fiscale 2022</th>
        </tr>
      </thead>
      <tbody>
        {props.recettesPubliques.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.recettes_publiques}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2022).toFixed(2))}</b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_recettes_publiques).toFixed(2))}</b></i></td>
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


</Container>


}


{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Calcul de la Pression Fiscale</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Total Recettes Publiques</th>
          <th>PIB 2022</th>
          <th>Pression Fiscale = (Total Recettes Publiques / PIB 2022) * 100</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
             <td><i ><b>{new Intl.NumberFormat().format(Number(total_recettes_publiques).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(pib_annee_fiscale_2022).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(pression_fiscale).toFixed(2))} %</b></i></td>
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


</Container>


}


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

export default RecettesPubliquesInfo;