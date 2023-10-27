import React from 'react'
import '../Style/ourwork.css'
import Banner from '../Component/Banner'
import { Outlet, Link } from "react-router-dom";

const Ourwork = () => {
  return (
   <>
   <Banner/>
    <section>

        <div className="our-work-container">
          <div className="our-work-section">
            <h1 className="work-heading"> "Captivating Moments" </h1>
            <p className="work-para">
              {" "}
              "Embark on a visual journey through our Shaandaar Events Gallery,
              where we unveil a collection <br />
              of captivating and unforgettable experiences as the best wedding
              planner.”{" "}
            </p>
          </div>
         
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>
            <div className="our-work-img">
              <div className="work-inner">
          
                <h1 className="work-head">Male & Female</h1>
                
                 <Link className="para-link" to="/Weddingpics"> <p>view-more</p> </Link>
                <Outlet />

              </div>
             
            
            </div>




          
        </div>
      </section>
      </>
  )
}

export default Ourwork
