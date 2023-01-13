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
<Row className='justify-content-start '>
        <Col xs = {"auto"} className='text-start borders pt-2'>
        <div>
        <h6 className='text-center'><u><b><i className='text-primary'>Projection des Recettes par la méthode de calibrage des hypothèses</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Structure des recettes publiques</th>
          <th>Montant</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>

       
      <tr style={{border:"2px solid white"}}>
             <td><i ><b>Recettes totales : recettes internes et dons</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recetteInterne).toFixed())}</b></i></td>
             <td><i ><b> Total Recettes internes : fiscales et non-fiscales &amp; Dons </b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Récettes internes : fiscales et non-fiscales </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recetteInterne).toFixed())}</b></i></td>
             <td><i ><b>Total Recettes fiscales  &amp; Recettes non-fiscales</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Recettes fiscales </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recetteFiscale).toFixed())}</b></i></td>
             <td><i ><b>Total Douanes et accises (DGDA)  &amp; Impôts directs et indirects (DGI)</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b>      Douanes et accises (DGDA) </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(douaneEtAccise).toFixed())}</b></i></td>
             <td><i ><b>Total Recettes douanières &amp; Droit et taxe à l'exportation </b></i></td>
        </tr>
       
        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:10}}>      Recettes douanières </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(resource_douaniere).toFixed())}</b></i></td>
             <td><i ><b> Total Droit et taxe à l'importation &amp; Droit et taxe à l'exportation </b></i></td>
        </tr>

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}> Droit et taxe à l'importation </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(resource_douaniere).toFixed())}</b></i></td>
             <td><i ><b> Droit et taxe à l'importation : hypothèse de prélèvement sur les importations de biens et services (PIB optique emplois nominal) </b></i></td>
        </tr>

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>    Droit et taxe à l'exportation </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(resource_douaniere).toFixed())}</b></i></td>
             <td><i ><b> Droit et taxe à l'exportation : hypothèse de 0,12 % appliquée aux droits et taxes sur les exportations de biens et services. </b></i></td>
        </tr>

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:10}}>    Accises </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(resource_douaniere).toFixed())}</b></i></td>
             <td><i ><b>  hypothèse de 1,2 % d’accroissement du PIB nominal</b></i></td>
        </tr>

        


        <tr style={{border:"2px solid white"}}>
             <td><i ><b>   Impôts directs et indirects (DGI) </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impotDirect_et_impotIndirect).toFixed())}</b></i></td>
             <td><i ><b>   Total  Impôts directs &amp;  Impôts indirects   </b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:10}}>   Impôts directs </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_direct).toFixed())}</b></i></td>
             <td><i ><b> Total de la ligne    Impôts sur le revenu personnes physiques  &amp;  Impôts sur le revenu des sociétés et des entreprises non pétrolières  &amp;  Impôts sur le revenu des sociétés pétrolières  &amp;  Autres impôts directs</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}> Impôts sur le revenu personnes physiques </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_direct).toFixed())}</b></i></td>
             <td><i ><b> hypothèse de 1,5 % du PIB</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>    Impôts sur le revenu des sociétés et des entreprises non pétrolières </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_direct).toFixed())}</b></i></td>
             <td><i ><b> Hypothèse de 3 % sur le PIB non extractif</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>       Impôts sur le revenu des sociétés pétrolières </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_direct).toFixed())}</b></i></td>
             <td><i ><b> hypothèse de 0,2 % sur le PIB ind. Extract. (0,2 % du PIB sur les hydrocarbures) </b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>  Autres impôts directs </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_direct).toFixed())}</b></i></td>
             <td><i ><b> 0,2 % sur le PIB non minier </b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:10}}>   Impôts indirects </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_indirect).toFixed())}</b></i></td>
             <td><i ><b>   Total TVA Brute  &amp;   Impôts sur les biens et services   &amp;  Autres impôts indirects</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>    TVA Brute </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_indirect).toFixed())}</b></i></td>
             <td><i ><b>propension du prélèvent de2,4% sur le revenu nominal du côté PIB emplois</b></i></td>
        </tr>  

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>    Impôts sur les biens et services </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_indirect).toFixed())}</b></i></td>
             <td><i ><b>???? Input field</b></i></td>
        </tr>  

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>    Autres impôts indirects </b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(impot_indirect).toFixed())}</b></i></td>
             <td><i ><b>???? Input field</b></i></td>
        </tr>  





        <tr style={{border:"2px solid white"}}>
             <td><i ><b>Recettes non-fiscales</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recette_non_fiscale).toFixed())}</b></i></td>
             <td><i ><b>Total de Recettes administratives (DGRAD) &amp;  Pétrole et mines (royalties et taxes)</b></i></td>
        </tr> 

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>Recettes administratives (DGRAD)</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recette_non_fiscale).toFixed())}</b></i></td>
             <td><i ><b>propension du prélèvent de2,4 % sur le revenu</b></i></td>
        </tr>   

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>  Pétrole et mines (royalties et taxes)</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(recette_non_fiscale).toFixed())}</b></i></td>
             <td><i ><b>PIB ind. extractives*0,2 %</b></i></td>
        </tr>   



        <tr style={{border:"2px solid white"}}>
             <td><i ><b>Dons</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(dons).toFixed())}</b></i></td>
             <td><i ><b>  Dons budgétaires &amp;    Dons projets</b></i></td>
        </tr>   

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>Dons budgétaires</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(dons).toFixed())}</b></i></td>
             <td><i ><b>  ???? Input field </b></i></td>
        </tr>   

        <tr style={{border:"2px solid white"}}>
             <td><i ><b style={{paddingLeft:20}}>Dons projets</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(dons).toFixed())}</b></i></td>
             <td><i ><b>  ???? Input field </b></i></td>
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