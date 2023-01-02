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



function ExedantBrutInfo(props)
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
console.log(props.recettesDGDA)
let impotDGDA = [{}]
let dataDGDA =[{recettes_publiques : 'DGDA'}]

const recette_expo_annee_fiscale_2022_temp1 = Number( Number(props.recettesDGDA[0].annee_fiscale_2021) / Number(props.infoExpoImpo[0].annee_fiscale_2021)).toFixed(2)

const recette_expo_annee_fiscale_2022_temp2 = Number(Number(props.recettesDGDA[0].annee_fiscale_2020) / Number(props.infoExpoImpo[0].annee_fiscale_2020)).toFixed(2)

const recette_expo_annee_fiscale_2022_temp3 = Number(Number(props.recettesDGDA[0].annee_fiscale_2019) / Number(props.infoExpoImpo[0].annee_fiscale_2019)).toFixed(2)

const recette_expo_fiscale_2022_average = Number((Number(recette_expo_annee_fiscale_2022_temp1) + Number(recette_expo_annee_fiscale_2022_temp2) + Number(recette_expo_annee_fiscale_2022_temp3)) / 3).toFixed(2)

const pib_annee_fiscale_2022= Number(Number((props.impotDgiInfo[2].annee_fiscale_2021) * (1 + Number(props.impotPourcentageCroissance)))).toFixed(2)

const recettes_expo_annee_fiscale_2022 = Number((Number(pib_annee_fiscale_2022) *  Number(props.tauxExportation).toFixed(2)) * Number(recette_expo_fiscale_2022_average).toFixed(2)).toFixed(2)

const recette_impo_annee_fiscale_2022_temp1 = Number( Number(props.recettesDGDA[1].annee_fiscale_2021) / Number(props.infoExpoImpo[1].annee_fiscale_2021)).toFixed(2)
const recette_impo_annee_fiscale_2022_temp2 = Number(Number(props.recettesDGDA[1].annee_fiscale_2020) / Number(props.infoExpoImpo[1].annee_fiscale_2020)).toFixed(2)
const recette_impo_annee_fiscale_2022_temp3 = Number(Number(props.recettesDGDA[1].annee_fiscale_2019) / Number(props.infoExpoImpo[1].annee_fiscale_2019)).toFixed(2)
const recette_impo_fiscale_2022_average = Number((Number(recette_impo_annee_fiscale_2022_temp1) + Number(recette_impo_annee_fiscale_2022_temp2) + Number(recette_impo_annee_fiscale_2022_temp3)) / 3).toFixed(2)

const recettes_impo_annee_fiscale_2022 = Number((Number(pib_annee_fiscale_2022) *  Number(props.tauxImportation).toFixed(2)) * Number(recette_impo_fiscale_2022_average).toFixed(2)).toFixed(2)


impotDGDA = [...props.recettesDGDA]
impotDGDA[0].annee_fiscale_2022 = Number(recettes_expo_annee_fiscale_2022).toFixed(2)
impotDGDA[1].annee_fiscale_2022 = Number(recettes_impo_annee_fiscale_2022).toFixed(2)

//impotDGI[0].annee_fiscale_2022=ca_annee_fiscale_2022_final
const total_fiscale_2018 = impotDGDA[0].annee_fiscale_2018 + impotDGDA[1].annee_fiscale_2018 

const total_fiscale_2019 = impotDGDA[0].annee_fiscale_2019 + impotDGDA[1].annee_fiscale_2019 

const total_fiscale_2020 = impotDGDA[0].annee_fiscale_2020 + impotDGDA[1].annee_fiscale_2020 

const total_fiscale_2021 = impotDGDA[0].annee_fiscale_2021 + impotDGDA[1].annee_fiscale_2021

const total_fiscale_2022 = Number(impotDGDA[0].annee_fiscale_2022) + Number(impotDGDA[1].annee_fiscale_2022)

dataDGDA[0].annee_fiscale_2022 = total_fiscale_2022

props.setRecettesPubliquesDGDA(dataDGDA)

  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table Recettes DGDA</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Recettes DGDA</th>
          <th>Année Fiscale 2018</th>
          <th>Année Fiscale 2019</th>
          <th>Année Fiscale 2020</th>
          <th>Année Fiscale 2021</th>
          <th>Année Fiscale 2022</th>
        </tr>
      </thead>
      <tbody>
        {impotDGDA.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.recettes_dgda}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2018).toFixed(2)) }</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2019).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2020).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2021).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2022).toFixed(2))}</b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2018).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2019).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2020).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2021).toFixed())}</b></i></td>
         <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_fiscale_2022).toFixed(2))}</b></i></td>
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

export default ExedantBrutInfo;