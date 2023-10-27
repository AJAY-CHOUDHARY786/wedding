import React from 'react'
import "../Style/Explore1.css"
import { Outlet, Link } from "react-router-dom";

const Explore1 = () => {
  return (
    <div>
      <section>
        <div className="section-61">
          <div className="sec-6-Container1">
            <div className="sec-6-main1">
              {" "}
              <div className="sec-6-head">
                <h1>Explore The Latest Trends With Shaandaar</h1>
              </div>
              <div className="sec-6-btn-link1">
                <Link    className="sec-6-btn1"  to="/International-wedding">    Explore   </Link>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Explore1
