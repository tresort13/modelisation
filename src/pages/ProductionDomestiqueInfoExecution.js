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
import DonneeDepensePubliqueInfoExecution from './DonneeDepensePubliqueInfoExecution';




function ProductionDomestiqueInfoExecution(props)
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
        const donneeDepensePublique = []

        props.donneeDepenseCouranteInfo.map(value=>
            {
                return props.donneeDepenseCapitalInfo.map(value2=>
                    {
                        if(value.nom_province == value2.nom_province)
                        return donneeDepensePublique.push({"nom_province":value.nom_province,"milieu_urbaine_agriculture":Number(value.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_agriculture) ,"milieu_urbaine_mines":Number(value.milieu_urbaine_mines) + Number(value2.milieu_urbaine_mines),"milieu_urbaine_industrie":Number(value.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_industrie),"milieu_urbaine_service":Number(value.milieu_urbaine_service) + Number(value2.milieu_urbaine_service),"milieu_rurale_agriculture":Number(value.milieu_rurale_agriculture) + Number(value2.milieu_rurale_agriculture),"milieu_rurale_mines":Number(value.milieu_rurale_mines) + Number(value2.milieu_rurale_mines),"milieu_rurale_industrie":Number(value.milieu_rurale_industrie) + Number(value2.milieu_rurale_industrie),"milieu_rurale_service":Number(value.milieu_rurale_service) + Number(value2.milieu_rurale_service),"secteur_agriculture":((value.milieu_urbaine_agriculture + value.milieu_rurale_agriculture) + (value2.milieu_urbaine_agriculture + value2.milieu_rurale_agriculture)), "secteur_mines":((value.milieu_urbaine_mines + value.milieu_rurale_mines) + (value2.milieu_urbaine_mines + value2.milieu_rurale_mines)), "secteur_industrie":((value.milieu_urbaine_industrie + value.milieu_rurale_industrie) + (value2.milieu_urbaine_industrie + value2.milieu_rurale_industrie)),"secteur_service":((value.milieu_urbaine_service + value.milieu_rurale_service) + (value2.milieu_urbaine_service + value2.milieu_rurale_service))})
                    })
            })



  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <div>
  <div>
    <p className='text-center text-white ' style={{fontSize:25}}><i><b><u>La production domestique sera calculé sur base des données de la table ci-dessous :</u></b></i></p>
  </div>
<Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2700}} >


    
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
          <th>Nature : Démande Intérieure</th>
          <th colSpan={4}>Données Démande Intérieure Milieu Urbain</th>
          <th>Total Dépenses Démande Intérieure Milieu Urbain</th>
          <th colSpan={4}>Données Démande Intérieure Milieu Rural</th>
          <th>Total  Démande Intérieure Milieu Rural</th>
          <th colSpan={4}>Données Démande Intérieure/secteur</th>
          <th>Total Démande Intérieure/Province</th>
          <th colSpan={3}>Données Consommation "C"/Catégories</th>
          <th>Total Consommation "C"/Province</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
          <td></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>
          <td><b className='text-primary'>Consommation alimentaire</b></td>
          <td><b className='text-primary'>Consommation biens durables</b></td>
          <td><b className='text-primary'>Consommation autres biens</b></td>
          <td></td>

        </tr>
        {props.donneeConsommationInfo.map((value)=>
    {
      return  props.donneeInvestissementPriveInfo.map((value2)=>
      {
      return donneeDepensePublique.map((value3)=>
      {
        if((value.nom_province==value2.nom_province) && (value.nom_province==value3.nom_province))
        return <tr style={{border:"2px solid white"}}>
        <td><i ><b>{value.nom_province}</b></i></td>
        <td><i><b>Démande Intérieure</b></i></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_agriculture) + Number(value3.milieu_urbaine_agriculture)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_mines) + Number(value3.milieu_urbaine_mines)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_industrie) + Number(value3.milieu_urbaine_industrie)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_service) + Number(value3.milieu_urbaine_service)).toFixed())}</b></td>
        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_mines) + Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_service)) + (Number(value3.milieu_urbaine_agriculture) + Number(value3.milieu_urbaine_mines) + Number(value3.milieu_urbaine_industrie) + Number(value3.milieu_urbaine_service))).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_rurale_agriculture) + Number(value3.milieu_rurale_agriculture)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_rurale_mines) + Number(value3.milieu_rurale_mines)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_rurale_industrie) + Number(value3.milieu_rurale_industrie)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_rurale_service) + Number(value3.milieu_rurale_service)).toFixed())}</b></td>
        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value2.milieu_rurale_agriculture) + Number(value2.milieu_rurale_mines) + Number(value2.milieu_rurale_industrie) + Number(value2.milieu_rurale_service)) + (Number(value3.milieu_rurale_agriculture) + Number(value3.milieu_rurale_mines) + Number(value3.milieu_rurale_industrie) + Number(value3.milieu_rurale_service))).toFixed())}</b></td>
       
       
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_rurale_agriculture) + Number(value3.secteur_agriculture)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_mines) + Number(value2.milieu_rurale_mines) + Number(value3.secteur_mines)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_rurale_industrie) + Number(value3.secteur_industrie)).toFixed())}</b></td>
        <td><b>{new Intl.NumberFormat().format(Number(Number(value2.milieu_urbaine_service) + Number(value2.milieu_rurale_service) + Number(value3.secteur_service)).toFixed())}</b></td>
        <td className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_rurale_agriculture) + Number(value3.secteur_agriculture)) + (Number(value2.milieu_urbaine_mines) + Number(value2.milieu_rurale_mines) + Number(value3.secteur_mines)) + (Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_rurale_industrie) + Number(value3.secteur_industrie)) + (Number(value2.milieu_urbaine_service) + Number(value2.milieu_rurale_service) + Number(value3.secteur_service))).toFixed())}</b></td>
       
        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_alimentaire) + Number(value.milieu_rurale_alimentaire)).toFixed())}</b></i></td>
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_biens_durables) + Number(value.milieu_rurale_biens_durables)).toFixed())}</b></i></td>
             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_autres_biens) + Number(value.milieu_rurale_autres_biens)).toFixed())}</b></i></td>

             <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_alimentaire) + Number(value.milieu_rurale_alimentaire) + Number(value.milieu_urbaine_biens_durables) + Number(value.milieu_rurale_biens_durables) + Number(value.milieu_urbaine_autres_biens) + Number(value.milieu_rurale_autres_biens)).toFixed())}</b></i></td>

       </tr>     
      })
        
      })
    }) 
    }

        
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>

</div>

</Container>

<Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20,width:2000}} >



<div>
<Row className='justify-content-center '>
    <Col xs = {"auto"} className='text-center borders pt-2'>
    <div>
    <h6 ><u><b><i className='text-primary'>Table de Données des Exportations Nettes du Pays</i></b></u></h6>
    </div>
    <div>
    <Table striped bordered hover variant="primary">
  <thead>
  <tr className='text-primary' style={{border:"2px solid white"}}>
           <th>Province</th>
          <th>Nature : Dépenses Publiques</th>
          <th colSpan={4}>Données Publiques Milieu Urbain</th>
          <th>Total Dépenses Publiques Milieu Urbain</th>
          <th colSpan={4}>Données Publiques Milieu Rural</th>
          <th>Total Dépenses Publiques Milieu Rural</th>
          <th colSpan={4}>Données Dépenses Publiques/secteur</th>
          <th>Total Dépenses Publiques/Province</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{border:"2px solid white"}}>
          <td></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>
          <td><b className='text-primary'>Agriculture</b></td>
          <td><b className='text-primary'>Mines</b></td>
          <td><b className='text-primary'>insdustrie</b></td>
          <td><b className='text-primary'>Service</b></td>
          <td></td>

        </tr>
        {props.donneeExportationsInfo.map((value)=>
    {
      return  props.donneeImportationsInfo.map((value2)=>
      {
        if(value.nom_province==value2.nom_province)
        return <tr>
        <td><b>{value.nom_province}</b></td>
        <td><b>Exportations Nettes</b></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) - Number(value2.milieu_urbaine_agriculture)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_mines) - Number(value2.milieu_urbaine_mines)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_industrie) - Number(value2.milieu_urbaine_industrie)).toFixed())}</b></i></td>
        <td><i ><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_service) - Number(value2.milieu_urbaine_service)).toFixed())}</b></i></td>
        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_agriculture) - Number(value2.milieu_urbaine_agriculture)) + (Number(value.milieu_urbaine_mines) - Number(value2.milieu_urbaine_mines)) + (Number(value.milieu_urbaine_industrie) - Number(value2.milieu_urbaine_industrie)) + (Number(value.milieu_urbaine_service) - Number(value2.milieu_urbaine_service))).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_agriculture) - Number(value2.milieu_rurale_agriculture)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_mines) - Number(value2.milieu_rurale_mines)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_industrie) - Number(value2.milieu_rurale_industrie)).toFixed())}</b></i></td>
        <td><i ><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_rurale_service) - Number(value2.milieu_rurale_service)).toFixed())}</b></i></td>
        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_rurale_agriculture) - Number(value2.milieu_rurale_agriculture)) + (Number(value.milieu_rurale_mines) - Number(value2.milieu_rurale_mines)) + (Number(value.milieu_rurale_industrie) - Number(value2.milieu_rurale_industrie)) + (Number(value.milieu_rurale_service) - Number(value2.milieu_rurale_service))).toFixed())}</b></i></td>
        
        <td><i><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture)) -  (Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_rurale_agriculture))).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_mines) + Number(value.milieu_rurale_mines)) -  (Number(value2.milieu_urbaine_mines) + Number(value2.milieu_rurale_mines))).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_industrie) + Number(value.milieu_rurale_industrie)) -  (Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_rurale_industrie))).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number((Number(value.milieu_urbaine_service) + Number(value.milieu_rurale_service)) +  (Number(value2.milieu_urbaine_service) + Number(value2.milieu_rurale_service))).toFixed())}</b></i></td>

        <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(((Number(value.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture)) -  (Number(value2.milieu_urbaine_agriculture) + Number(value2.milieu_rurale_agriculture))) + ((Number(value.milieu_urbaine_mines) + Number(value.milieu_rurale_mines)) -  (Number(value2.milieu_urbaine_mines) + Number(value2.milieu_rurale_mines))) + ((Number(value.milieu_urbaine_industrie) + Number(value.milieu_rurale_industrie)) -  (Number(value2.milieu_urbaine_industrie) + Number(value2.milieu_rurale_industrie))) + ((Number(value.milieu_urbaine_service) + Number(value.milieu_rurale_service)) -  (Number(value2.milieu_urbaine_service) + Number(value2.milieu_rurale_service))) ).toFixed())}</b></i></td>
        
        </tr>     
      })
    }) 
    }
     
</tbody>
    </Table>
        </div>
        </Col>
    </Row>
</div>
</Container>

<Container className='bg-dark justify-content-center text-center borders mb-5'>
<Row className='justify-content-center pb-3 pt-3'>
    <Col xs ={"auto"} >
    <Link to="/production_domestique_info" style={{color:'white',textDecorationLine:'none'}}>
    <Button variant="primary" type="submit"  >
    Calculer les données de la production domestique
    </Button>
    </Link>
    </Col>
</Row>
</Container>
</div>}


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

export default ProductionDomestiqueInfoExecution;