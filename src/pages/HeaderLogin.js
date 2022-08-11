import Container from "react-bootstrap/esm/Container";
import { Link} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import { useMediaQuery } from 'react-responsive';





function HeaderLogin(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });

    

    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

   
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark">
    <Row>
        <Col xs={2} className="my-auto mx-auto text-start">

          <Image  src={require('./est_back.jpeg')}  className='rounded-pill ' style={{width:130}}></Image>
        </Col>
        <Col xs={6} className="my-auto text-end">
        <Link to="/home" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">MODELISATION MACRO FISCAL</p>
          </Link>
        </Col>
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-secondary display-6 text-center" style={{fontSize: 20}}><Image className="navbar-brand rounded-circle" src={require('./login.jpeg')} type="button" alt="profil" style={{width:40}} ></Image><span ><i>Bienvenu(e)</i> </span></pre>
           <i><pre className="text-secondary display-6 timing text-center" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
  
   </Container>}



   </div>

    )
}

export default HeaderLogin;