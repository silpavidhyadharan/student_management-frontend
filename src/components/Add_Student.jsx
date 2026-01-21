import React from 'react'
import bg from '../assets/images/background2.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add_Student() {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      height: "700px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingTop: "60px",
      textAlign: "center"
    }}>

      <h1 id='addDetails' style={stye.h1}>Add Students</h1>

      <div style={{ width: "600px", marginLeft: "500px", height: "700px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter your place " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter your Age " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter course " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter college Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter Mobile Number " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Enter your email " />
          </Form.Group>
          <Button variant="outline-light">Click Here to save</Button>


        </Form>
      </div>
    </div>
  )
}

export default Add_Student
const stye = {
  h1: {
    color: "white"
  }
}
