import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function Navb() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Navbar.Brand href="/">COVID-19 CDC</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " >
          <Nav className="mr-auto">
            <Nav.Link href="/delete">Delete Users</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>

  )
}
export default Navb;
