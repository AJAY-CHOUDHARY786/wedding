import React from "react";
import Banner from "../Component/Banner";
import "../Style/Testimoniol.css";
import testimg from "../Component/Images/1-scaled-1.webp";
const Testimoniol = () => {
  return (
    <>
      <Banner />
      <section>
        <div className="testimoniols-main-section">
          <div className="testimoniol-inner">
            <div className="testimoniol-img-box">
              
              <img src={testimg} style={{ width: "100%" }} alt="" />
              <h3> Parul & Obiroy </h3>

              <div className="testimoniol-para">
                <h1> Paurl & Oberoi </h1>
                <p>
                  {" "}
                  Shaandaar events , the best wedding planner was the best
                  decision I ever made for my big fat Indian wedding. The
                  intricacies and details they worked upon were commendable.
                  They suggested boho themed mehendi and The way they executed
                  it made my event a viral trend. Even during our wedding they
                  managed to light up the entire property with pyros and it made
                  my special moment even more dreamy. I am glad I chose them for
                  my wedding and they proved themselves as the best wedding
                  planner.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoniol;
