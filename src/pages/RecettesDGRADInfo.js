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



function RecettesDGRADInfo(props)
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
console.log(props.recettesDGRAD)
let impotDGRAD = [{}]

let dataDGRAD =[{recettes_publiques : 'DGRAD'}]

const pib_annee_fiscale_2022= Number(Number((props.impotDgiInfo[2].annee_fiscale_2021) * (1 + Number(props.impotPourcentageCroissance)))).toFixed(2)

const autre_recette_annee_fiscale_2022_temp1 = Number( Number(props.recettesDGRAD[1].annee_fiscale_2021) / Number(props.impotDgiInfo[2].annee_fiscale_2021)).toFixed(2)
const autre_recette_annee_fiscale_2022_temp2 = Number(Number(props.recettesDGRAD[1].annee_fiscale_2020) / Number(props.impotDgiInfo[2].annee_fiscale_2020)).toFixed(2)
const autre_recette_annee_fiscale_2022_temp3 = Number(Number(props.recettesDGRAD[1].annee_fiscale_2019) / Number(props.impotDgiInfo[2].annee_fiscale_2019)).toFixed(2)
const autre_recette_fiscale_2022_average = Number((Number(autre_recette_annee_fiscale_2022_temp1) + Number(autre_recette_annee_fiscale_2022_temp2) + Number(autre_recette_annee_fiscale_2022_temp3)) / 3).toFixed(2)

const autre_recettes_annee_fiscale_2022 = Number(Number(pib_annee_fiscale_2022) * Number(autre_recette_fiscale_2022_average).toFixed(2)).toFixed(2)


impotDGRAD = [...props.recettesDGRAD]
impotDGRAD[1].annee_fiscale_2022 = Number(autre_recettes_annee_fiscale_2022).toFixed(2)

//impotDGI[0].annee_fiscale_2022=ca_annee_fiscale_2022_final

const total_fiscale_2019 = impotDGRAD[0].annee_fiscale_2019 + impotDGRAD[1].annee_fiscale_2019 

const total_fiscale_2020 = impotDGRAD[0].annee_fiscale_2020 + impotDGRAD[1].annee_fiscale_2020 

const total_fiscale_2021 = impotDGRAD[0].annee_fiscale_2021 + impotDGRAD[1].annee_fiscale_2021

const total_fiscale_2022 = Number(impotDGRAD[0].annee_fiscale_2022) + Number(impotDGRAD[1].annee_fiscale_2022)

dataDGRAD[0].annee_fiscale_2022 = total_fiscale_2022

props.dataDonneeRecettesPubliques(dataDGRAD)
  
    return (
        <>
            <Header username={props.username}/>
            <div>
{isDesktop && <Container fluid className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table Recettes DGRAD</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary' style={{border:"2px solid white"}}>
          <th>Recettes DGRAD</th>
          <th>Année Fiscale 2019</th>
          <th>Année Fiscale 2020</th>
          <th>Année Fiscale 2021</th>
          <th>Année Fiscale 2022</th>
        </tr>
      </thead>
      <tbody>
        {impotDGRAD.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}}>
             <td><i ><b>{value.recettes_dgrad}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2019).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2020).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2021).toFixed(2))}</b></i></td>
             <td><i><b>{new Intl.NumberFormat().format(Number(value.annee_fiscale_2022).toFixed(2))}</b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
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

export default RecettesDGRADInfo;