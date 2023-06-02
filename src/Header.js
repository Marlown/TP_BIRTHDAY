import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Importation du fichier CSS Bootstrap.

function Header() {
  const currentDate = new Date().toLocaleDateString();

  return (
  
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="">ANNIVERSAIRES ET CITATION</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Anniversaire</Nav.Link>
          <Nav.Link href="">Citation</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Item>{currentDate}</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default Header;