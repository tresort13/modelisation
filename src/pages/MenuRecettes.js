import Container from "react-bootstrap/esm/Container";
import { Link, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import { useMediaQuery } from 'react-responsive';
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";


function MenuRecettes(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

const navigate = useNavigate()
const [modalShow2, setModalShow2] = React.useState(false);
function dataRecettesPubliques(e)
{
  e.preventDefault()
  setModalShow2(true)
  props.dataDonneeRecettesPubliques()
  navigate('/recettes_publiques_info')
}
    
    return (
    <>
     <Header username={props.username}/>
       {isDesktop && <Container className="mt-2 mb-5" >
       <Row className="text-center justify-content-center">
            <Col md={6} className="my-auto text-center">
            <Link to="/form_dgi" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>D G I</b></i>
            </Button>
            </Link>    
            </Col>

            <Col mdmd={6} className="my-auto text-center">
            <Link to="/menu_dgda" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>D G D A</b></i>
           </Button>
            </Link>            
            </Col>
      </Row>

        <Row className="text-center justify-content-center mt-3 mb-5">
            <Col md={6} className="my-auto text-center">
            <Link to="/form_recettes_dgrad" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>D G R A D</b></i>
            </Button>
             </Link>     
            </Col>

            <Col md={6} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button onClick={(e)=>dataRecettesPubliques(e)} variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Recettes publiques</b></i>
            </Button>
             </Link>     
            </Col>
        </Row>
        <Row className="mt-5">

        </Row>
       </Container>}
       <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
       <Footer />
       </>
        
    )
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Veuillez Patienter...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ClipLoader color={"#ff8c00"} loading={true} size={150} /> 
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}


export default MenuRecettes;