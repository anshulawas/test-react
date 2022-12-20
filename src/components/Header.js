
import {Nav, Container, Navbar} from 'react-bootstrap';
import logo from '../logo.png';

function Header(){
    return(
<>
<Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#link" className='btn-top bg-primary text-white mt-1 px-4'>Signup</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



</>
    );
};

export default Header;