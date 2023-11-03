import React from "react";
import "../Style/Dest.css";
import destimg from "../Component/Images/thailand-1.webp";
import dubai from "../Component/Images/dubai.jpg"
import baku from "../Component/Images/Baku-blend-Azerbaijan-skyscrapers-buildings.webp"
import singapore from "../Component/Images/julien-de-salaberry-viwdmfrbXfI-unsplash.webp"
import Banner from "../Component/Banner";
import { Outlet, Link } from "react-router-dom";
const Destination = () => {
  return (
    <>
   <Banner/>
      <div className="dest-container">
        
        <div className="dest-main-container">
          <h1> International Destination Wedding </h1>
          <div className="div-dest">


          <Link className="La" to="/Thai">
          <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",borderRadius:"20px"  }} src={destimg} alt="" />{" "}
                <h1> Thailand </h1>{" "}
              </div>{" "}
            </div>





          </Link>
         
            <Link className="La" to="/Dubai">

            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",borderRadius:"20px"  }} src={dubai } alt="" />{" "}
                <h1> Dubai </h1>{" "}
              </div>{" "}
            </div>


            </Link>
           
            <Link className="La" to="/Baku">

            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",height: "296px", borderRadius:"20px" }} src={baku} alt="" />{" "}
                <h1> Baku </h1>{" "}
              </div>{" "}
            </div>



            </Link>
            
            <Link className="La" to="/Singapore">
            <div className="dest-11">
              {" "}
              <div className="dest-img">
                {" "}
                <img style={{ width: "100%",borderRadius:"20px",height: "296px"  }} src={singapore} alt="" />{" "}
                <h1> Singapore</h1>{" "}
              </div>{" "}
            </div>

            </Link>
            
          </div>
        </div>
        
    </div>
    <Outlet />
    </>
  );
};

export default Destination;
