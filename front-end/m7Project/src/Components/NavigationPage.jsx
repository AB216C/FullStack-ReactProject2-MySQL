import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationPage() {

  return(


      <Navbar expand="lg" className="bg-secondary color-light py-5">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"} className="fs-1" >SuperHuman</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"} className="fw-bolder fs-3" >Home</Nav.Link>
            <Nav.Link as={Link} to={"/characters"} className="fw-bolder fs-3">Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  )
}

export default NavigationPage