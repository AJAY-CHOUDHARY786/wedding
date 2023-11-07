import React from "react";
import "../Style/footer.css";
import logo from "../Component/Images/03E515B753E7AD405316CABEE4_1624521005211.webp";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Footer = () => {
  return (
    <>
      <FloatingWhatsApp />
      <section>
        <div className="footer-container">
          <div className="footer-top">
            <p> Get connected with us on social networks: </p>
          </div>
          <hr />
          <div className="footer-section">
            <div className="footer-content-logo">
              {" "}
              <div className="footer-inner-logo">
                <img src={logo} alt="" style={{ height: "100px" }} />
              </div>
              <div className="inner-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis autem, qui esse quia, eveniet soluta nihil corporis
                  consequatur odit recusandae ut dolore. Accusamus, ratione?
                  Porro qui esse est debitis quam?
                </p>{" "}
              </div>
            </div>
            <div className="footer-inner-content">
              <div className="footer-content-inner-service">
                <div className="footer-inner-service">
                  <h1>Service</h1>
                </div>
                <div className="inner-2-service">
                  <p>Light System</p>
                  <p>Sound Systems</p>
                  <p>Wedding Decors</p>
                  <p>Wedding Planning</p>
                  <p>Catering Services</p>
                  <p>Decoration Services</p>
                  <p>Destination Weddings</p>
                  <p>Host Services For Wedding</p>
                </div>
              </div>
              <div className="footer-content">
                <div className="footer-inner">
                  <h1>Contact-us</h1>
                </div>
                <div className="inner-2">
                  <p>
                    {" "}
                    <span>
                      {" "}
                      <b>E-mail:-</b>{" "}
                    </span>{" "}
                    sales@hospitalitymantra.com
                  </p>
                  <p>
                    {" "}
                    <span>
                      {" "}
                      <b>CALL US:-</b>{" "}
                    </span>{" "}
                    +91-9116013948
                  </p>
                  <p>
                    {" "}
                    <span>
                      {" "}
                      <b>OUR TIMING:-</b>{" "}
                    </span>{" "}
                    Mon-Sun : 10:00 AM - 08:30 PM
                  </p>
                </div>
              </div>
              <div className="footer-content">
                <div className="footer-inner">
                  <h1>Our office</h1>
                </div>
                <div className="inner-2">
                  <p>
                    <span>
                      {" "}
                      <b> Shop No:-</b>{" "}
                    </span>{" "}
                    405, 4Th Floor, Balaji Tower - IV Near Hotel Redisson
                    Blu,Tonk Road, Durgapura,Jaipur, Rajasthan 302018
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-end">
            <p>
              {" "}
              © 2023 wedingzmantra.com All rights reserved || Developed &
              maintain by-Digital{" "}
              <span>
                <a href="https://www.digitalwhopper.com/">Whopper.com</a>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
