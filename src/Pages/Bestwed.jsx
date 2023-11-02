import React from "react";
import "../Style/Best.css";
import Best from "../Component/Images/wadding2.jpg";
import Services from "../Component/Services";
import Testimoniol from "../Component/Testimonial";
const Bestwed = () => {
  return (
    <div>
      <section>
        <div className="best1-container">
          <div className="best-wed-main-container">
            <div className="best-banner">
              <div className="bestwed-text">
                <div className="bestwed-text-para">
                  <p>Best-wedding-planner</p>
                </div>
              </div>
            </div>

            <div className="head1">
              <h1> Best Wedding Planner </h1>
            </div>
            <div className="best-container">
              <div className="bestwed-content">
                <p>
                  {" "}
                  Putting all the beautiful pieces together and crafting
                  one-of-a-kind wedding experiences of all shapes and sizes, we
                  Shaandaar Events are known as the best wedding planner in
                  Chandigarh. As the best wedding planner in Chandigarh, we have
                  designed and produced events across the globe, ranging from an
                  intimate wedding for fifty people to a grand-scale wedding for
                  more than thousands. We as the best wedding planner in
                  Chandigarh are the craftsperson of one of the most momentous
                  events of your life which is why we are known as the best
                  wedding planner in Chandigarh. wedding planner in
                  Chandigarh. As the best wedding planner in Chandigarh, we have
                  designed and produced events across the globe, ranging from an
                  intimate wedding for fifty people to a grand-scale wedding for
                  more than thousands. We as the best wedding planner in
                  Chandigarh are the craftsperson of one of the most momentous
                  events of your life which is why we are known as the best
                  wedding planner in Chandigarh. 
                </p>
              </div>
              <div className="best-img">
                <img src={Best} style={{width:"100%" }} alt="" />
              </div>
            </div>
             

          
          </div>
        </div>
      </section>

      <Services/>
      <Testimoniol/>
      
    </div>
  );
};

export default Bestwed;
