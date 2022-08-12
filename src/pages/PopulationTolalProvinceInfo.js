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




function PopulationTotalProvinceInfo(props)
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

        const total_taille_population_final = []
        const taux_croissance = props.tauxNataliteMortaliteInfo.map((value)=>
{
  return {
          nom_province : value.nom_province,
          croissance_urbain : Number(value.taux_natalite_urbain).toFixed(4) - Number(value.taux_mortalite_urbain).toFixed(4),
          croissance_rural :Number(value.taux_natalite_rural).toFixed(4) - Number(value.taux_mortalite_rural).toFixed(4)
  }
})

        

        const total_taille_population = props.populationInfo.map((value)=>
        {
           
          return taux_croissance.map((value2)=>
            {
              if (value.nom_province==value2.nom_province)
              return  total_taille_population_final.push({ 
              nom_province : value.nom_province,
              total_split_urbain :Number(value.split_urbain) + (Number(value.split_urbain) * Number(value2.croissance_urbain).toFixed(4)),
              total_split_rural :Number(value.split_rural) + (Number(value.split_rural) * Number(value2.croissance_rural).toFixed(4)),
              total_taille : Number((Number(value.split_urbain) + (Number(value.split_urbain) * Number(value2.croissance_urbain).toFixed(4)))  +  (Number(value.split_rural) + (Number(value.split_rural) * Number(value2.croissance_rural).toFixed(4)))).toFixed()
            })
          })        
          })

        
   
          const total_general_split_urbain = total_taille_population_final.reduce((total,value)=>
          {
            total = total + value.total_split_urbain
            return total
          },0)

          const total_general_split_rural = total_taille_population_final.reduce((total,value)=>
          {
            total = total + value.total_split_rural
            return total
          },0)
          
        
          

          const total_taux_migration = props.tauxMigrationInfo.reduce((total,value)=>
          {
            total = Number(total).toFixed(4) + Number(value.taux_migration).toFixed(4)
            return total
          },0)

       

          const total_final_split_urbain = Number(Number(total_general_split_urbain) + ((Number(total_general_split_urbain) * Number(total_taux_migration).toFixed(4)))).toFixed()

          const total_final_split_rural =Number(Number(total_general_split_rural) + ((Number(total_general_split_rural) * Number(total_taux_migration).toFixed(4)))).toFixed()

          const total_final_province = Number(total_final_split_urbain + total_final_split_rural).toFixed()

          console.log(total_general_split_urbain)
          console.log(total_general_split_rural )
          console.log(total_taux_migration)
         
    return (
        <>
            <Header />
            <div>
{isDesktop && <Container className='bg-dark justify-content-center text-center borders mb-5' style={{marginTop:20}} >


<div>
<Row className='justify-content-center '>
        <Col xs = {"auto"} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='text-primary'>Table de la Population totale par province/milieu après migration</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="primary">
      <thead>
        <tr className='text-primary'>
           <th>Nom de la Province</th>
          <th>Population Total Urbain</th>
          <th>Population Total Rural</th>
          <th>Total Population/Province</th>
        </tr>
      </thead>
      <tbody>
      {total_taille_population_final.map((value)=>
        {
          return props.tauxMigrationInfo.map((value2)=>
          { 
            if (value.nom_province==value2.nom_province)
            return <tr style={{border:"2px solid"}}>
            <td><i ><b>{value.nom_province}</b></i></td>
            <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((value.total_split_urbain) + ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))).toFixed())}</b></i></td>
            <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number((value.total_split_rural) - ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))).toFixed())}</b></i></td>
            <td><i className='text-primary'><b>{new Intl.NumberFormat().format(Number(((value.total_split_urbain) + ((value.total_split_rural * Number(value2.taux_migration).toFixed(4)))) + ((value.total_split_rural) - ((value.total_split_rural * Number(value2.taux_migration).toFixed(4))))).toFixed())}</b></i></td>
           </tr>   
          })
        }) 
        }


<tr style={{border:"2px solid white"}}>
          <td><b>Total</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_final_split_urbain).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_final_split_rural).toFixed())}</b></td>
          <td className='text-primary'><b>{new Intl.NumberFormat().format(Number(total_final_province).toFixed())}</b></td>
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

export default PopulationTotalProvinceInfo;