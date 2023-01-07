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
        console.log(props.donsBudgtaire)
        console.log(props.donsProjet)
        console.log(props.coefficientProduction)

        
        const petrolMine = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "petrolMine"
        })

        const recetteAdministrative = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "recetteAdministrative"
        })

        const tvaBrut = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "tvaBrut"
        })

        const autreImpotDirect = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "autreImpotDirect"
        })

        const impotRevenuPetrolier = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "impotRevenuPetrolier"
        })

        const impotRevenuNonPetrolier = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "impotRevenuNonPetrolier"
        })

        const impotRevenuPersonnePhysique = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "impotRevenuPersonnePhysique"
        })

        const accises = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "accises"
        })

        const droitTaxeImportation = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "droitTaxeImportation"
        })

        const droitTaxeExportation = props.donneeMethodeCalibrage.find((value)=>{
            return value.nom == "droitTaxeExportation"
        })

        const dons = Number(props.donsBudgtaire) + Number(props.donsProjet)
        const recette_non_fiscale = Number(petrolMine) + Number(recetteAdministrative)
        const impot_indirect = Number(props.impotBienService) + Number(props.autreImpotIndirect) + Number(tvaBrut)
        const impot_direct = Number(impotRevenuPersonnePhysique) + Number(autreImpotDirect) + Number(impotRevenuPetrolier) + Number(impotRevenuNonPetrolier)
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
             <td><i><b>{dons}</b></i></td>
        </tr>   
        <tr style={{border:"2px solid white"}}>
             <td><i ><b>Recettes non-fiscales</b></i></td>
             <td><i><b>{recette_non_fiscale}</b></i></td>
        </tr>   

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts indirects </b></i></td>
             <td><i><b>{impot_indirect}</b></i></td>
        </tr>  

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts directs </b></i></td>
             <td><i><b>{impot_direct}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts directs et indirects (DGI) </b></i></td>
             <td><i><b>{impotDirect_et_impotIndirect}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes douanières </b></i></td>
             <td><i><b>{resource_douaniere}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Douanes et accises (DGDA) </b></i></td>
             <td><i><b>{douaneEtAccise}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes fiscales </b></i></td>
             <td><i><b>{recetteFiscale}</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes internes : fiscales et non-fiscales </b></i></td>
             <td><i><b>{recetteInterne}</b></i></td>
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