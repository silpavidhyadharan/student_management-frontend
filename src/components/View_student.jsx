import React, { useState } from 'react'
import bg from '../assets/images/background2.jpg'
import Table from 'react-bootstrap/Table';
import { get_all_students } from '../Services/api';


function View_student() {

  const[students,setStudents] = useState

  return (
    <div style={{
                backgroundImage:`url(${bg})`,
                height : "700px",
                backgroundSize:"cover",
                backgroundPosition:"center",
                paddingTop:"60px",
                textAlign:"center"
              }}>
      <h1 id='view' style={style.h1}>View Details</h1>
      <Table
striped
  bordered
  hover
  size="sm"
  variant="light"
  className="container mt-4 text-center align-middle"
>
  <thead className="table-secondary text-dark">
    <tr>
      <th>#</th>
      <th>Student Name</th>
      <th>Place</th>
      <th>Age</th>
      <th>Course</th>
      <th>College</th>
      <th>Mobile Number</th>
      <th>Email</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Sandra</td>
      <td>Kattappana</td>
      <td>21</td>
      <td>BCA</td>
      <td>IHRD</td>
      <td>8787878787</td>
      <td>sandra@gmail.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Sanjay</td>
      <td>Kollam</td>
      <td>22</td>
      <td>BCA</td>
      <td>IHRD</td>
      <td>9889767654</td>
      <td>sanjay@gmail.com</td>
    </tr>

    
  </tbody>
</Table>
    </div>
  )
}

export default View_student
const style = {
  h1 : {
    color:"white"
  }
}
