import React from "react";
import "../Style/footer.css";
import logo from "../Component/Images/03E515B753E7AD405316CABEE4_1624521005211.webp";

const Footer = () => {
  return (
    <>
      <section>
        <div className="footer-container">
        <div className="footer-top">
              <p> Get connected with us on social networks:   </p>
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
                <p>s2</p>
                <p>s3</p>
                <p>s4</p>{" "}
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-inner">
                <h1>Contactus</h1>
              </div>
              <div className="inner-2">
                <p>s2</p>
                <p>s3</p>
                <p>s4</p>{" "}
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-inner">
                <h1>Not decide</h1>
              </div>
              <div className="inner-2">
                <p>s2</p>
                <p>s3</p>
                <p>s4</p>{" "}
              </div>
            </div>
            </div>
            
           
            
          </div>
          <hr />
          <div className="footer-end">
              <p> © 2023 wedingzmantra.com All rights reserved || Developed & maintain by-Digital <span><a href="https://www.digitalwhopper.com/">Whopper.com</a> </span> </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
