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





function RevenuProvinceInfo(props)
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
const donneeTotalImpots = []
const donneeTotalSubvention = []
const donneeTotalProvince = []

props.revenusSalaires.map(value=>
  {
      return props.exedantBrut.map(value2=>
          {
              if(value.nom_province == value2.nom_province)
              return donneeRevenuSalaireExedantBrut.push({"nom_province":value.nom_province,"impot_agriculture":Number(value.salaires_urbain_agricultures) + Number(value2.salaires_urbain_agricultures) ,"impot_industrie_extractive":Number(value.salaire_urbain_insdustries_extractives) + Number(value2.salaire_urbain_insdustries_extractives),"impot_industrie_manufacture":Number(value.salaires_urbain_industries_manufactures) + Number(value2.salaires_urbain_industries_manufactures),"impot_service":Number(value.salaires_urbain_services) + Number(value2.salaires_urbain_services),  "impot_agriculture_rural":Number(value.salaires_rural_agricultures) + Number(value2.salaires_rural_agricultures) ,"impot_industrie_extractive_rural":Number(value.salaire_rural_insdustries_extractives) + Number(value2.salaire_rural_insdustries_extractives),"impot_industrie_manufacture_rural":Number(value.salaires_rural_industries_manufactures) + Number(value2.salaires_rural_industries_manufactures),"impot_service_rural":Number(value.salaires_rural_services) + Number(value2.salaires_rural_services)})
          })
  })
     
donneeRevenuSalaireExedantBrut.map(value=>
      {
          return props.autresImpots.map(value2=>
              {
                  if(value.nom_province == value2.nom_province)
                  return donneeTotalImpots.push({"nom_province":value.nom_province,"total_impot_milieu_urbain":Number(value.impot_agriculture) + Number(value.impot_industrie_extractive) + Number(value.impot_industrie_manufacture) + Number(value.impot_service) + Number(value2.autre_impot_urbain),"total_impot_milieu_rural":Number(value.impot_agriculture_rural) + Number(value.impot_industrie_extractive_rural) + Number(value.impot_industrie_manufacture_rural) + Number(value.impot_service_rural) + Number(value2.autre_impot_rural)})
              })
      })

      props.subventionProduction.map(value=>
        {
            return props.subventionConsommation.map(value2=>
                {
                    if(value.nom_province == value2.nom_province)
                    return donneeTotalSubvention.push({"nom_province":value.nom_province,"total_subvention_milieu_urbain":Number(value.salaires_urbain_agricultures) + Number(value.salaire_urbain_insdustries_extractives) + Number(value.salaires_urbain_industries_manufactures) + Number(value.salaires_urbain_services) + Number(value2.autre_impot_urbain),"total_subvention_milieu_rural":Number(value.salaires_rural_agricultures) + Number(value.salaire_rural_insdustries_extractives) + Number(value.salaires_rural_industries_manufactures) + Number(value.salaires_rural_services) + Number(value2.autre_impot_rural)})
                })
        })

        donneeTotalImpots.map(value=>
          {
              return donneeTotalSubvention.map(value2=>
                  {
                      if(value.nom_province == value2.nom_province)
                      return donneeTotalProvince.push({"nom_province":value.nom_province,"total_province_milieu_urbain":Number(value.total_impot_milieu_urbain) - Number(value2.total_subvention_milieu_urbain) ,"total_province_milieu_rural":Number(value.total_impot_milieu_rural) - Number(value2.total_subvention_milieu_rural)})
                  })
          })

      const totalGeneral_province_milieu_urbain = donneeTotalProvince.reduce((total,value)=>
      {

        total = total + Number(value.total_province_milieu_urbain)
        return total
      },0)

      const totalGeneral_province_milieu_rural = donneeTotalProvince.reduce((total,value)=>
      {

        total = total + Number(value.total_province_milieu_rural)
        return total
      },0)

      const total_province = Number(totalGeneral_province_milieu_urbain) + Number(totalGeneral_province_milieu_rural)
   
      props.setRecetteAdministrative([{"nom" : "recetteAdministrative","montant":Number(pib_annee_fiscale_2022) * 0.024}])
      
  
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

export default RevenuProvinceInfo;