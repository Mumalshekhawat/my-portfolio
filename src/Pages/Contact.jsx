import React from 'react'

function Contact() {
  return (
    <div className='main3'>
      <div className="content3">
        <h1>Contact  <span style={{ color: 'orange' }}>Me</span>  </h1>
      </div>
      <div className="content3a">
        <h1>Contact me here</h1>
        <p>For any query feel free to contact with me  by mail  <br /> or by using social media links. Thank you.</p>
      </div>
      <div className="content3b">
        <input type="text" placeholder='YOUR NAME' />
        <input type="email" placeholder='YOUR EMAIL' />
      </div>
      <div className="contentc">
        <input type="text" placeholder='ENTER SUBJECT' />
      </div> <br />
      <div className="contentd">
        <input type="text" placeholder='SUBJECT DETAILS....' />
      </div>
      <div className="contentbtn">
        <input type="submit" />
      </div>
    </div>
  )
}

export default Contact