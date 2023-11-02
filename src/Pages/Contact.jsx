import React from 'react'
import "../Style/contact.css"
import location from "../Component/Images/icons8-location.gif"
import loc from "../Component/Images/icons8-email.gif"
import locati from "../Component/Images/icons8-call.gif"
import locatio from "../Component/Images/icons8-time.gif"
const Contact = () => {
  return (
    <div>
       <div className="main-container">
      <div className="container">
        <h1>Contact</h1>
      </div>

      <div className="container-1">
        <div className="div1">
          <br />
          <h3>OUR OFFICE ADDRESS</h3>
          <br />
          <img src={location} width="25px" alt="loction" />
          <br />
          <br />
          <p>
            Shop No:- 405, 4Th Floor, Balaji Tower - IV <br />Near Hotel
            Redisson Blu,Tonk Road, Durgapura, <br />Jaipur, Rajasthan 302018
          </p>
          <br />

          <div className="email">
            <img src={loc} width="25px" alt="email" />
            <br />
            <br />
            <h5>GENERAL ENQUIRIES</h5>
            <p>sales@hospitalitymantra.com</p>
          </div>

          <br />

          <div className="call">
            <img src={locati} width="25px" alt="call" />
            <br />
            <br />
            <h5>CALL US</h5>
            <p>+91-9116013948</p>
          </div>

          <br />

          <div className="OurTime">
            <img src={locatio} width="25px" alt="time" />
            <br />
            <br />
            <h5>OUR TIMING</h5>
            <p>Mon-Sun : 10:00 AM - 08:30 PM</p>
          </div>
        </div>

        <div className="div2">
          <form action="/submit" method="post" className="form">
            <input
              type="text"
              name=""
              id="Name"
              placeholder="  YOUR NAME"
              maxlength="50"
            />

            <input
              type="text"
              name=""
              id="Name"
              placeholder="  YOUR EMAIL"
              maxlength="50"
            />

            <input
              type="number"
              name=""
              id="Name"
              placeholder="  YOUR CONTACT NO."
              maxlength="50"
            />

            <input
              type="text"
              name=""
              id="Name"
              placeholder="  YOUR MESSAGE"
              maxlength="50"
            />

            <button className="btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
