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




function ProductionDomestiqueSecteurInfo(props)
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
                        return donneeDepensePublique.push({"nom_province":value.nom_province,"milieu_urbaine_agriculture":Number(value.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_agriculture) ,"milieu_urbaine_mines":Number(value.milieu_urbaine_mines) + Number(value2.milieu_urbaine_mines),"milieu_urbaine_industrie":Number(value.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_industrie),"milieu_urbaine_service":Number(value.milieu_urbaine_service) + Number(value2.milieu_urbaine_service),"milieu_rurale_agriculture":Number(value.milieu_rurale_agriculture) + Number(value2.milieu_rurale_agriculture),"milieu_rurale_mines":Number(value.milieu_rurale_mines) + Number(value2.milieu_rurale_mines),"milieu_rurale_industrie":Number(value.milieu_rurale_industrie) + Number(value2.milieu_rurale_industrie),"milieu_rurale_service":Number(value.milieu_rurale_service) + Number(value2.milieu_rurale_service)})
                    })
            })

    const donneeExportationsNettes = []

    props.donneeExportationsInfo.map(value=>
        {
            return props.donneeImportationsInfo.map(value2=>
                {
                    if(value.nom_province == value2.nom_province)
                    return donneeExportationsNettes.push({"nom_province":value.nom_province,"milieu_urbaine_agriculture":Number(value.milieu_urbaine_agriculture) - Number(value2.milieu_urbaine_agriculture),"milieu_urbaine_mines":Number(value.milieu_urbaine_mines) - Number(value2.milieu_urbaine_mines),"milieu_urbaine_industrie":Number(value.milieu_urbaine_industrie) - Number(value2.milieu_urbaine_industrie),"milieu_urbaine_service":Number(value.milieu_urbaine_service) - Number(value2.milieu_urbaine_service),"milieu_rurale_agriculture":Number(value.milieu_rurale_agriculture) - Number(value2.milieu_rurale_agriculture),"milieu_rurale_mines":Number(value.milieu_rurale_mines) - Number(value2.milieu_rurale_mines),"milieu_rurale_industrie":Number(value.milieu_rurale_industrie) - Number(value2.milieu_rurale_industrie),"milieu_rurale_service":Number(value.milieu_rurale_service) - Number(value2.milieu_rurale_service)})
                })
        })
        console.log(donneeExportationsNettes)

        const total_milieu_urbain_agriculture = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_agriculture)
          return total
        },0)
        
        const total_milieu_urbain_mines = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_mines)
          return total
        },0)
        
        const total_milieu_urbain_industrie = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_industrie)
          return total
        },0)

        const total_milieu_urbain_service = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_urbaine_service)
          return total
        },0)

        const total_milieu_rurale_agriculture = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_agriculture)
          return total
        },0)

        const total_milieu_rurale_mines = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_mines)
          return total
        },0)

        const total_milieu_rurale_industrie = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_industrie)
          return total
        },0)
  
        const total_milieu_rurale_service = props.donneeConsommationInfo.reduce((total,value)=>
        {

          total = total + Number(value.milieu_rurale_service)
          return total
        },0)

        const total_milieu_urbain = Number(total_milieu_urbain_agriculture) + Number(total_milieu_urbain_mines) + Number(total_milieu_urbain_industrie) + Number(total_milieu_urbain_service)

        const total_milieu_rural = Number(total_milieu_rurale_agriculture) + Number(total_milieu_rurale_mines) + Number(total_milieu_rurale_industrie) + Number(total_milieu_rurale_service)
  
        const total_milieu_urbain_agriculture_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_agriculture)
      return total
    },0)
    
    const total_milieu_urbain_mines_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_mines)
      return total
    },0)
    
    const total_milieu_urbain_industrie_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_industrie)
      return total
    },0)

    const total_milieu_urbain_service_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_service)
      return total
    },0)

    const total_milieu_rurale_agriculture_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_agriculture)
      return total
    },0)

    const total_milieu_rurale_mines_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_mines)
      return total
    },0)

    const total_milieu_rurale_industrie_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_industrie)
      return total
    },0)

    const total_milieu_rurale_service_capital = props.donneeInvestissementPriveInfo.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_service)
      return total
    },0)

    const total_milieu_urbain_capital = total_milieu_urbain_agriculture + total_milieu_urbain_mines + total_milieu_urbain_industrie + total_milieu_urbain_service

    const total_milieu_rural_capital = total_milieu_rurale_agriculture + total_milieu_rurale_mines + total_milieu_rurale_industrie + total_milieu_rurale_service
       
    const total_milieu_urbain_agriculture_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_agriculture)
      return total
    },0)
    
    const total_milieu_urbain_mines_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_mines)
      return total
    },0)
    
    const total_milieu_urbain_industrie_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_industrie)
      return total
    },0)

    const total_milieu_urbain_service_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_urbaine_service)
      return total
    },0)

    const total_milieu_rurale_agriculture_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_agriculture)
      return total
    },0)

    const total_milieu_rurale_mines_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_mines)
      return total
    },0)

    const total_milieu_rurale_industrie_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_industrie)
      return total
    },0)

    const total_milieu_rurale_service_capital2 = donneeDepensePublique.reduce((total,value)=>
    {

      total = total + Number(value.milieu_rurale_service)
      return total
    },0)


        const total_milieu_urbain_agriculture_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_urbaine_agriculture)
          return total
        },0)
        
        const total_milieu_urbain_mines_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_urbaine_mines)
          return total
        },0)
        
        const total_milieu_urbain_industrie_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_urbaine_industrie)
          return total
        },0)
    
        const total_milieu_urbain_service_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_urbaine_service)
          return total
        },0)
    
        const total_milieu_rurale_agriculture_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_rurale_agriculture)
          return total
        },0)
    
        const total_milieu_rurale_mines_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_rurale_mines)
          return total
        },0)
    
        const total_milieu_rurale_industrie_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + Number(value.milieu_rurale_industrie)
          return total
        },0)
    
        const total_milieu_rurale_service_capital3 = donneeExportationsNettes.reduce((total,value)=>
        {
    
          total = total + parseInt(value.milieu_rurale_service)
          return total
        },0)
    
    
    
    
    
    
    
        const total_milieu_urbain_agriculture_publique = total_milieu_urbain_agriculture + total_milieu_urbain_agriculture_capital + total_milieu_urbain_agriculture_capital2 + total_milieu_urbain_agriculture_capital3
        const total_milieu_urbain_mines_publique = total_milieu_urbain_mines + total_milieu_urbain_mines_capital + total_milieu_urbain_mines_capital2 + total_milieu_urbain_mines_capital3
        const total_milieu_urbain_industrie_publique = total_milieu_urbain_industrie + total_milieu_urbain_industrie_capital + total_milieu_urbain_industrie_capital2 + total_milieu_urbain_industrie_capital3
        const total_milieu_urbain_service_publique = total_milieu_urbain_service + total_milieu_urbain_service_capital + total_milieu_urbain_service_capital2 + total_milieu_urbain_service_capital3
    
        const total_milieu_rurale_agriculture_publique = total_milieu_rurale_agriculture + total_milieu_rurale_agriculture_capital + total_milieu_rurale_agriculture_capital2 + total_milieu_rurale_agriculture_capital3
        const total_milieu_rurale_mines_publique = total_milieu_rurale_mines + total_milieu_rurale_mines_capital + total_milieu_rurale_mines_capital2 + total_milieu_rurale_mines_capital3
        const total_milieu_rurale_industrie_publique = total_milieu_rurale_industrie + total_milieu_rurale_industrie_capital + total_milieu_rurale_industrie_capital2 + total_milieu_rurale_industrie_capital3
        const total_milieu_rurale_service_publique = total_milieu_rurale_service + total_milieu_rurale_service_capital + total_milieu_rurale_service_capital2 + total_milieu_rurale_service_capital3
    
        const total_milieu_urbain_publique = total_milieu_urbain_agriculture_publique + total_milieu_urbain_mines_publique + total_milieu_urbain_industrie_publique + total_milieu_urbain_service_publique
        const total_milieu_rural_publique = total_milieu_rurale_agriculture_publique + total_milieu_rurale_mines_publique + total_milieu_rurale_industrie_publique + total_milieu_rurale_service_publique
    
    
    
    
    

    
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <div>
<Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    <Row className='justify-content-center pb-2 pt-2' >
        <Col xs={"auto"}>
            <Link to="">
            <Image src={require('./est_back.jpeg')}  className='rounded-pill ' style={{width:200}}></Image>
            </Link>
       
        </Col>
    </Row>
    
<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-warning'>Table de la Production Domestique par Secteur</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr className='text-warning'>
           <th>Province</th>
          <th>Nature : Production Domestique</th>
          <th colSpan={4}>Milieu Urban/Rural</th>
          <th>Production Domestique Nationale</th>
        </tr>
      </thead>
      <tbody>
        
      <tr>
          <td></td>
          <td></td>
          <td><b className='text-warning'>Agriculture</b></td>
          <td><b className='text-warning'>Mines</b></td>
          <td><b className='text-warning'>insdustrie</b></td>
          <td><b className='text-warning'>Service</b></td>
          <td><b className='text-warning'>Production Domestique Nationale</b></td>

        </tr>
        {props.donneeConsommationInfo.map((value)=>
    {
      return  props.donneeInvestissementPriveInfo.map((value2)=>
      {
      return donneeDepensePublique.map((value3)=>
      {
      return donneeExportationsNettes.map((value4)=>
      {
        if((value.nom_province==value2.nom_province) && (value.nom_province==value3.nom_province) && (value.nom_province==value4.nom_province))
        return <tr>
        <td><i ><b>{value.nom_province}</b></i></td>
        <td><i><b>Production Domestique Nationale</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_agriculture) + Number(value3.milieu_urbaine_agriculture) + Number(value4.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture) + Number(value2.milieu_rurale_agriculture) + Number(value3.milieu_rurale_agriculture) + Number(value4.milieu_rurale_agriculture)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_mines) + Number(value2.milieu_urbaine_mines) + Number(value3.milieu_urbaine_mines) + Number(value4.milieu_urbaine_mines) + Number(value.milieu_rurale_mines) + Number(value2.milieu_rurale_mines) + Number(value3.milieu_rurale_mines) + Number(value4.milieu_rurale_mines)).toFixed())}</b></i></td>
        <td><i><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_industrie) + Number(value3.milieu_urbaine_industrie) + Number(value4.milieu_urbaine_industrie) + Number(value.milieu_rurale_industrie) + Number(value2.milieu_rurale_industrie) + Number(value3.milieu_rurale_industrie) + Number(value4.milieu_rurale_industrie)).toFixed())}</b></i></td>
        <td><i ><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_service) + Number(value2.milieu_urbaine_service) + Number(value3.milieu_urbaine_service) + Number(value4.milieu_urbaine_service) + Number(value.milieu_rurale_service) + Number(value2.milieu_rurale_service) + Number(value3.milieu_rurale_service) + Number(value4.milieu_rurale_service)).toFixed())}</b></i></td>
        <td><i className='text-warning'><b>{new Intl.NumberFormat().format(Number(Number(value.milieu_urbaine_agriculture) + Number(value2.milieu_urbaine_agriculture) + Number(value3.milieu_urbaine_agriculture) + Number(value4.milieu_urbaine_agriculture) + Number(value.milieu_rurale_agriculture) + Number(value2.milieu_rurale_agriculture) + Number(value3.milieu_rurale_agriculture) + Number(value4.milieu_rurale_agriculture) + Number(value.milieu_urbaine_mines) + Number(value2.milieu_urbaine_mines) + Number(value3.milieu_urbaine_mines) + Number(value4.milieu_urbaine_mines) + Number(value.milieu_rurale_mines) + Number(value2.milieu_rurale_mines) + Number(value3.milieu_rurale_mines) + Number(value4.milieu_rurale_mines) + Number(value.milieu_urbaine_industrie) + Number(value2.milieu_urbaine_industrie) + Number(value3.milieu_urbaine_industrie) + Number(value4.milieu_urbaine_industrie) + Number(value.milieu_rurale_industrie) + Number(value2.milieu_rurale_industrie) + Number(value3.milieu_rurale_industrie) + Number(value4.milieu_rurale_industrie) + Number(value.milieu_urbaine_service) + Number(value2.milieu_urbaine_service) + Number(value3.milieu_urbaine_service) + Number(value4.milieu_urbaine_service) + Number(value.milieu_rurale_service) + Number(value2.milieu_rurale_service) + Number(value3.milieu_rurale_service) + Number(value4.milieu_rurale_service)).toFixed())}</b></i></td>
       </tr>     
      })
      })
      })
    }) 
    }
 
<tr>
          <td><i><b>Total</b></i></td>
          <td><i><b></b></i></td>
          <td><i className='text-warning'><b>{new Intl.NumberFormat().format(Number(Number(total_milieu_urbain_agriculture_publique) + Number(total_milieu_rurale_agriculture_publique)).toFixed())}</b></i></td>
          <td><i className='text-warning'><b>{new Intl.NumberFormat().format(Number(Number(total_milieu_urbain_mines_publique) + Number(total_milieu_rurale_mines_publique)).toFixed())}</b></i></td>
          <td><i className='text-warning'><b>{new Intl.NumberFormat().format(Number(Number(total_milieu_urbain_industrie_publique)+ Number(total_milieu_rurale_industrie_publique)).toFixed())}</b></i></td>
          <td><i className='text-warning'><b>{new Intl.NumberFormat().format(Number(Number(total_milieu_urbain_service_publique) + Number(total_milieu_rurale_service_publique)).toFixed())}</b></i></td>
          <td><i className='text-warning'><b>{new Intl.NumberFormat().format(Number(Number(total_milieu_urbain_publique) + Number(total_milieu_rural_publique)).toFixed())}</b></i></td>
        </tr> 
        
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3 pt-3'>
    <Col xs ={"auto"} >
    <Link to="/production_domestique_info" style={{color:'white',textDecorationLine:'none'}}>
    <Button variant="warning" type="submit"  >
    Imprimer les informations
    </Button>
    </Link>
    </Col>
</Row>
</div>
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

export default ProductionDomestiqueSecteurInfo;