import React from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';


const Navbarr = () => {
    // let navigate = useNavigate();
  return (
    <Navbar  className='navbar' expand="lg">
    <Container>
      <Navbar.Brand  as={Link}  to={'/'} >
        <img src="https://freewebsitetemplates.com/preview/frozenyogurtshop/images/logo.png" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link}  to={'/'} >Home</Nav.Link>
          <Nav.Link as={Link}  to={'/about'} >About</Nav.Link>
          <Nav.Link as={Link}  to={'/product'}>Product</Nav.Link>
          <NavDropdown  title="Blog" id="basic-nav-dropdown" >
          <NavDropdown.Item as={Link} to={"/blog"} classname="navdrop">Blog</NavDropdown.Item>
        
            <NavDropdown.Item as={Link} to={"/singal"} classname="navdrop">Singal Post</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link}  to={'/contact'}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}


export default Navbarr