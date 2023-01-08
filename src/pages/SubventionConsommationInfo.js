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



function SubventionConsommationInfo(props)
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
console.log(props.subventionConsommation)
        const total_urbain_autres_impots = props.subventionConsommation.reduce((total,value)=>
        {

          total = total + Number(value.autre_impot_urbain)
          return total
        },0)

        const total_rural_autres_impots = props.subventionConsommation.reduce((total,value)=>
        {

          total = total + Number(value.autre_impot_rural)
          return total
        },0)
        
        


        const total_autres_impots = Number(total_urbain_autres_impots) + Number(total_rural_autres_impots) 

       
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table Subventions Consommation</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
      <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Subventions à la Consommation</th>
          <th>Données Subventions à la consommation/Milieu Urbain</th>
          <th>Total Subventions à la consommation/Milieu Urbain</th>
          <th>Données Subventions à la consommation/Milieu Rural</th>
          <th>Total Subventions à la consommation/Milieu Rural</th>
          <th>Total Subventions/Province</th>
        </tr>
      </thead>
      <tbody>
       
        {props.subventionConsommation.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><b>{value.nom_province}</b></td>
             <td><b>Subventions à la Consommation</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.autre_impot_urbain).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.autre_impot_urbain).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.autre_impot_rural).toFixed())}</b></td>
             <td><b>{new Intl.NumberFormat().format(Number(value.autre_impot_rural).toFixed())}</b></td>
             <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.autre_impot_urbain) + Number(value.autre_impot_rural)).toFixed())}</b></td>
            </tr>     
        }) 
        }

<tr style={{border:"2px solid white"}}>
          <td><b>Total</b></td>
          <td><b></b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_urbain_autres_impots).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_urbain_autres_impots).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_rural_autres_impots).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_rural_autres_impots).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_autres_impots).toFixed())}</b></td>
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

export default SubventionConsommationInfo;