import React from 'react'

function About() {
  return (
    <>
      <div className='main2'>
        <div className="content2">
          <h1>About<span style={{ color: 'orange' }}>Me</span></h1>
        </div>
        <h1>Information About Me </h1>
        <h3>Hi my name id Mumal Shekhawat,I am from Jaipur Rajasthan,India. <br /> I completed my BSC from Rajasthan university in 2020</h3>
        <div className="content2a">
          <div className="card">
            <h1>Project completed</h1>
          </div>
          <div className="card">
            <h1>Freshers</h1>
          </div>
          <div className="card">
            <h1>Clients</h1>
          </div>
        </div>
        <div className="aboutbtn">
          <button>Download Resume</button>
        </div>
        <div className="skill">
          <h1>My Skills</h1>
        </div>
        <div className="myskill">
        <div className="html">
          <h4>HTML5</h4>
          <h4>60%</h4> 
          <div className='div1'></div>
          <div className="div2"></div>
        </div>
        <div className="css">
          <h4>CSS3</h4>
          <h4>50%</h4>
          <div className='div3'></div>
          <div className='div4'></div>
        </div>
      
        <div className="js">
          <h4>JAVASCRIPT</h4>
          <h4>50%</h4>
          <div className="div5"></div>
          <div className="div6"></div>
        </div>
        <div className="react ">
          <h4>REACT</h4>
          <h4>60%</h4>
          <div className="div7"></div>
          <div className="div8"></div>
        </div>
        </div>

      </div>
    </>
  )
}

export default About