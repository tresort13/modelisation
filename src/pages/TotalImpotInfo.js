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





function TotalImpotInfo(props)
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
const donneeRevenuSalaireExedantBrut = []

props.revenusSalaires.map(value=>
    {
        return props.exedantBrut.map(value2=>
            {
                if(value.nom_province == value2.nom_province)
                return donneeRevenuSalaireExedantBrut.push({"nom_province":value.nom_province,"impot_agriculture":Number(value.salaires_urbain_agricultures) + Number(value2.salaires_urbain_agricultures) ,"impot_industrie_extractive":Number(value.salaire_urbain_insdustries_extractives) + Number(value2.salaire_urbain_insdustries_extractives),"impot_industrie_manufacture":Number(value.salaires_urbain_industries_manufactures) + Number(value2.salaires_urbain_industries_manufactures),"impot_service":Number(value.salaires_urbain_services) + Number(value2.salaires_urbain_services),  "impot_agriculture_rural":Number(value.salaires_rural_agricultures) + Number(value2.salaires_rural_agricultures) ,"impot_industrie_extractive_rural":Number(value.salaire_rural_insdustries_extractives) + Number(value2.salaire_rural_insdustries_extractives),"impot_industrie_manufacture_rural":Number(value.salaires_rural_industries_manufactures) + Number(value2.salaires_rural_industries_manufactures),"impot_service_rural":Number(value.salaires_rural_services) + Number(value2.salaires_rural_services)})
            })
    })
     
    console.log(donneeRevenuSalaireExedantBrut)

    const total_impot_agriculture_urbain = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_agriculture)
          return total
        },0)
        
        const total_impot_industrie_extractive_urbain = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_industrie_extractive)
          return total
        },0)
        
        const total_impot_industrie_manufacture_urbain = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_industrie_manufacture)
          return total
        },0)

       

        const total_impot_service_salaire_urbain = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_service)
          return total
        },0)



        const total_impot_agriculture_rural = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_agriculture_rural)
          return total
        },0)
        
        const total_impot_industrie_extractive_rural = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_industrie_extractive_rural)
          return total
        },0)
        
        const total_impot_industrie_manufacture_rural = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_industrie_manufacture_rural)
          return total
        },0)

       

        const total_impot_service_salaire_rural = donneeRevenuSalaireExedantBrut.reduce((total,value)=>
        {

          total = total + Number(value.impot_service_rural)
          return total
        },0)

        const total_autre_impot_urbain = props.autresImpots.reduce((total,value)=>
        {

          total = total + Number(value.autre_impot_urbain)
          return total
        },0)

        const total_autre_impot_rural = props.autresImpots.reduce((total,value)=>
        {

          total = total + Number(value.autre_impot_rural)
          return total
        },0)


        const total_impot_urbain = Number(total_impot_agriculture_urbain) + Number(total_impot_industrie_extractive_urbain) + Number(total_impot_industrie_manufacture_urbain) + Number(total_impot_service_salaire_urbain) + Number(total_autre_impot_urbain)

        const total_impot_rural = Number(total_impot_agriculture_rural) + Number(total_impot_industrie_extractive_rural) + Number(total_impot_industrie_manufacture_rural) + Number(total_impot_service_salaire_rural) + Number(total_autre_impot_rural)


  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2600}} >


    
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
          <th>Nature : Total Impôts</th>
          <th colSpan={5}>Impôts Milieu Urbain</th>
          <th>Total Impôts Milieu Urbain</th>
          <th colSpan={5}>Impôts/Milieu Rural</th>
          <th>Total Impôts Milieu Rural</th>
          <th>Total Impôts/Province</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
          <td></td>
          <td></td>
          <td><b className='text-primary'>Impôts/Agriculture</b></td>
          <td><b className='text-primary'>Impôts/Industries Extractives</b></td>
          <td><b className='text-primary'>Impôts/Industries Manufacturieres</b></td>
          <td><b className='text-primary'>Impôts/Services</b></td>
          <td><b className='text-primary'>Autres Impôts</b></td>
          <td></td>
          <td><b className='text-primary'>Impôts/Agriculture</b></td>
          <td><b className='text-primary'>Impôts/Industries Extractives</b></td>
          <td><b className='text-primary'>Impôts/Industries Manufacturieres</b></td>
          <td><b className='text-primary'>Impôts/Services</b></td>
          <td><b className='text-primary'>Autres Impôts</b></td>
          <td></td>
          <td></td>

        </tr>
        {donneeRevenuSalaireExedantBrut.map((value)=>
    {
      return  props.autresImpots.map((value2)=>
      {
        if((value.nom_province==value2.nom_province))
        return <tr style={{border:"2px solid white"}}>
        <td><i ><b>{value.nom_province}</b></i></td>
        <td><i><b>Total Impôts</b></i></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_agriculture).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_industrie_extractive).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_industrie_manufacture).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_service).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value2.autre_impot_urbain).toFixed())}</b></td>

        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.impot_agriculture) + Number(value.impot_industrie_extractive) + Number(value.impot_industrie_manufacture) + Number(value.impot_service) + Number(value2.autre_impot_urbain)).toFixed())}</b></td>
    
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_agriculture_rural).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_industrie_extractive_rural).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_industrie_manufacture_rural).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value.impot_service_rural).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(value2.autre_impot_rural).toFixed())}</b></td>
       
        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.impot_agriculture_rural) + Number(value.impot_industrie_extractive_rural) + Number(value.impot_industrie_manufacture_rural) + Number(value.impot_service_rural) + Number(value2.autre_impot_urbain_rural)).toFixed())}</b></td>
       
        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.impot_agriculture) + Number(value.impot_industrie_extractive) + Number(value.impot_industrie_manufacture) + Number(value.impot_service) + Number(value2.autre_impot_urbain) + Number(value.impot_agriculture_rural) + Number(value.impot_industrie_extractive_rural) + Number(value.impot_industrie_manufacture_rural) + Number(value.impot_service_rural) + Number(value2.autre_impot_urbain_rural)).toFixed())}</b></td>
       </tr>     
      })
      })
    }

<tr style={{border:"2px solid white"}}>
          <td><b>Total</b></td>
          <td><b></b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_agriculture_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_industrie_extractive_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_industrie_manufacture_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_service_salaire_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_autre_impot_urbain).toFixed())}</b></td>

          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_urbain).toFixed())}</b></td>
          

          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_agriculture_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_industrie_extractive_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_industrie_manufacture_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_service_salaire_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_autre_impot_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_impot_rural).toFixed())}</b></td>
       
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

export default TotalImpotInfo;