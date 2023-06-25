import React from 'react'
import profile from '../Images/mumal.jpeg'

function Home() {
    return (
        <>
            <div className="main">
                <div className="image1">
                    <img src={profile} alt="" />
                </div>
                <div className="content">
                    <h1 id='one'>Hi, I'm <span style={{color:"orange"}}>Mumal Shekhawat.</span> Frontend Developer.</h1>
                    <h3 id='two'>I'm Frontend Developer,I love to create beautiful and functional websites. <br />   I'm also intrested in learning new technologies. <br /> I made some project during my learning process.Check out the projects in project section. <br />  I have also 6 Months of Training experience with Newton School as a FullStack Developer.</h3>
                </div>
                <div className="btn">
                    <button>Download Resume</button>
                </div>
            </div>
        </>
    )
}

export default Home