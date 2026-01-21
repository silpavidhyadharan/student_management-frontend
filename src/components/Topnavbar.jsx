import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Topnavbar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={style.heading}>Student Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={style.content}>Home</Nav.Link>
            <Nav.Link href="#addDetails">Add Details</Nav.Link>
            <Nav.Link href="#view">View Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topnavbar
const style = {

    heading : {
    fontSize:"35px",
    fontFamily:"fantacy",
    textShadow:"2px 1px 5px white"
  },
  content : {
    paddingLeft:"720px",
    fontSize:"18px",
    fontWeight:"bold",
    fontFamily:"fantacy"
  }
}
