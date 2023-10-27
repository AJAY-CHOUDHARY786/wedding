import React from "react";
import "../Style/Dest.css";
import destimg from "../Component/Images/thailand-1.webp";
import dubai from "../Component/Images/dubai.jpg"
import Banner from "../Component/Banner";
const Destination = () => {
  return (
    <>
   <Banner/>
      <div className="dest-container">
        
        <div className="dest-main-container">
          <h1> International Destination Wedding </h1>
          <div className="div-dest">
            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",borderRadius:"20px"  }} src={destimg} alt="" />{" "}
                <h1> Thailand </h1>{" "}
              </div>{" "}
            </div>
            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",borderRadius:"20px"  }} src={dubai } alt="" />{" "}
                <h1> Dubai </h1>{" "}
              </div>{" "}
            </div>
            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%", borderRadius:"20px" }} src={destimg} alt="" />{" "}
                <h1> Baku </h1>{" "}
              </div>{" "}
            </div>
            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",borderRadius:"20px"  }} src={destimg} alt="" />{" "}
                <h1> Singapore</h1>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        
    </div>
    </>
  );
};

export default Destination;
