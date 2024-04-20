import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import myLogo from "../../../Images/myLogo.png"

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar_header_cus">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto parent_div_first">
              <div className='name_first_sec'>
                <img src={myLogo} alt="" />
                <p>Aman Rajput &nbsp;<span >| MERN Stack Developer</span></p>
              </div>

             
              <div className='second_div_link'>
              <Nav.Link >About</Nav.Link>
              <Nav.Link href="#link">Work</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              </div>

              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default Header