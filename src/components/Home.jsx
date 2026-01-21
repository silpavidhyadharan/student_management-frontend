import React from 'react'
import bg from '../assets/images/study.png'


function Home() {
  return (
    <div style={{
        backgroundImage:`url(${bg})`,
        height : "700px",
        backgroundSize:"cover",
        backgroundPosition:"center",
        paddingTop:"400px",
        textAlign:"center"
      }}>
      <h1 id='home' style={style.h1} >Student Management</h1>
    </div>
  )
}

export default Home
const style = {
  h1 : {
    fontSize:"60px",
    color : "white",
    textShadow : "5px 2px 10px black",
    paddingTop:"100px"
  },
  
}

