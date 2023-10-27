import React from "react";
import "../Style/Explore.css"
import { Outlet, Link } from "react-router-dom";
const Explore = () => {
  return (
    <div>
      <section>
        <div className="section-6">
          <div className="sec-6-Container">
            <div className="sec-6-main">
              {" "}
              <div className="sec-6-head">
                <h1>Explore The Latest Trends With Shaandaar</h1>
              </div>
              <div className="sec-6-btn-link">
                <Link    className="sec-6-btn"  to="/Blogs">    Explore   </Link>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
