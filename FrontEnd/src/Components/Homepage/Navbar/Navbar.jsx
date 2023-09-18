import React from 'react';
import { NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Navbar/logo.jpeg';

function NavScrollExample() {
    return (
      <Navbar expand="lg" className=" me-auto" id='navbar'>
        <Container fluid>
          <Navbar.Brand href="/"><a href='Welcome'><img src={logo} alt="Logo" style={{ height:"3rem",width:"100px" }}/><b> Tours&Guide </b></a></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {/* Empty Nav elements */}
            </Nav>
            
            {/* Move the Nav elements to the right */}
            <Nav className="ml-auto text-white">
            <NavDropdown title=" Explore " className="extitle" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" disabled >
                <i class="bi bi-geo-alt" ></i>States</NavDropdown.Item>
                <NavDropdown.Item href="/Arunachal">Arunachal Pradesh</NavDropdown.Item>
                <NavDropdown.Item href="Assam">Assam</NavDropdown.Item>
                <NavDropdown.Item href="/Bihar">Bihar</NavDropdown.Item>
                <NavDropdown.Item href="/Goa">Goa</NavDropdown.Item>
                <NavDropdown.Item href="/Gujarat">Gujarat</NavDropdown.Item>
                <NavDropdown.Item href="/Himachal"> Himachal Pradesh</NavDropdown.Item>
                <NavDropdown.Item href="/Kashmir">Jammu and Kashmir</NavDropdown.Item>
                <NavDropdown.Item href="/kerala">Kerala</NavDropdown.Item>
                <NavDropdown.Item href="/Maharashtra">Maharashtra</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.1">Meghalaya</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">Punjab</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3">Rajasthan</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.4">Sikkim</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.5">Tamil Nadu</NavDropdown.Item>
                
                <NavDropdown.Item href="#action/4.6">Tripura</NavDropdown.Item>
                
                <NavDropdown.Item href="#action/4.7">Uttarakhand</NavDropdown.Item>
              </NavDropdown> 
              <Nav.Link href="#link" className='text-white'><b>Join as travel agent </b></Nav.Link>
              <Nav.Link href="Register" className='text-white'><b>SignUp</b> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavScrollExample;