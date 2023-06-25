import React from 'react'
import CardData from '../Components/CardData'

function Projects() {
  return (
    <div className='main4'>
      <h1 id="contentone">My   <span style={{ color: "orange" }}>Projects</span> </h1>
      <h2>Here are some project i build during my learning journey.</h2>
      <div className="content4">
        {
          CardData.map((data) => {
            return (
              <div className="content4a">
                <h1 className="content4aa">{data.title}</h1>
                <h4 className='content4ab'>{data.description}</h4>
            

                <div className="image4">
                  <img src={data.imgSrc} alt="" />
                </div>
              </div>

            )
          })
        }


      </div>
    </div>
  )
}

export default Projects