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
       

        
        const petrolMine = Number(props.petrolMine)

        const recetteAdministrative = Number(props.recetteAdministrative)

        const tvaBrut = Number(props.tvaBrut)

        const autreImpotDirect = Number(props.autreImpotDirect)

        const impotRevenuPetrolier = Number(props.impotRevenuPetrolier)

        const impotRevenuNonPetrolier = Number(props.impotRevenuNonPetrolier)

        const impotRevenuPersonnePhysique = Number(props.impotRevenuPersonnePhysique)

        const accises = Number(props.accises)

        const droitTaxeImportation = Number(props.droitTaxeImportation)

        const droitTaxeExportation = Number(props.droitTaxeExportation)

        const impot_bien_service = Number(props.impotBienService)

        const autre_impot_indirect = Number(props.autreImpotIndirect)

        const dons_budgetaire = Number(props.donsBudgtaire)

        const dons_projet = Number(props.donsProjet)

        console.log(petrolMine)
        console.log(recetteAdministrative)
        console.log(tvaBrut)
        console.log(autreImpotDirect)
        console.log(impotRevenuPetrolier)
        console.log(impotRevenuNonPetrolier)
        console.log(impotRevenuPersonnePhysique)
        console.log(accises)
        console.log(droitTaxeImportation)
        console.log(droitTaxeExportation)
        console.log(impot_bien_service)
        console.log(autre_impot_indirect)
        console.log(dons_budgetaire)
        console.log(dons_projet)

        const dons = Number(dons_budgetaire) + Number(dons_projet)
        const recette_non_fiscale = Number(petrolMine) + Number(recetteAdministrative)
        const impot_indirect = Number(impot_bien_service) + Number(autre_impot_indirect) + Number(tvaBrut)
        const impot_direct = Number(impotRevenuPersonnePhysique) + Number(autreImpotDirect)
        const impotDirect_et_impotIndirect = Number(impot_direct) + Number(impot_indirect)
        const resource_douaniere = Number(droitTaxeImportation) + Number(droitTaxeExportation)
        const douaneEtAccise = Number(resource_douaniere) + Number(accises)
        const recetteFiscale = Number(douaneEtAccise) + Number(impotDirect_et_impotIndirect)
        const recetteInterne = Number(recetteFiscale) + Number(recette_non_fiscale)

        
        
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Projection des Recettes par la méthode de calibrage des hypothèses</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Structure des recettes publiques</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
         <tr style={{border:"2px solid white"}}>
             <td><i ><b>Dons</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(dons).toFixed())}</b></i></td>
        </tr>   
        <tr style={{border:"2px solid white"}}>
             <td><i ><b>Recettes non-fiscales</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recette_non_fiscale).toFixed())}</b></i></td>
        </tr>   

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts indirects </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_indirect).toFixed())}</b></i></td>
        </tr>  

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts directs </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_direct).toFixed())}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts directs et indirects (DGI) </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impotDirect_et_impotIndirect).toFixed())}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes douanières </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(resource_douaniere).toFixed())}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Douanes et accises (DGDA) </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(douaneEtAccise).toFixed())}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes fiscales </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recetteFiscale).toFixed())}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes internes : fiscales et non-fiscales </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recetteInterne).toFixed())}</b></i></td>
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