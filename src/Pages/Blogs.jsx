import React from "react";
import Banner from "../Component/Banner";
import "../Style/Blog.css";
import Blogimg from "../Component/Images/Garden-Pre-Wedding-Shoot-Ideas-And-Latest-Trends-1-300x300.webp";
const Blogs = () => {
  return (
    <>
      <Banner />

      <div className="blog-container">
        <div className="blog-main-container">
          <div className="blog-page">
            {" "}
            <div className="Blogdiv-1">
              {" "}
              <img src={Blogimg} alt="" style={{width:"100%",padding:"5px", borderRadius: "10px", }} />{" "}
            </div>
            <div className="Blogdiv-2">
              {" "}
              <h3>Garden Pre Wedding Shoot Ideas And Latest Trends</h3>
              <h6>October 14, 2023</h6>
              <p>
                Garden Pre Wedding Shoot Ideas And Latest Trends- A pre-wedding
                shoot is an esteemed custom in the realm of weddings. It
              </p>
              <a className="Readlink" href="" > Read More » </a>
            </div>
          </div>
          <div className="blog-page">
            {" "}
            <div className="Blogdiv-1">
              {" "}
              <img src={Blogimg} alt="" style={{width:"100%",padding:"5px", borderRadius: "10px", }} />{" "}
            </div>
            <div className="Blogdiv-2">
              {" "}
              <h3>Garden Pre Wedding Shoot Ideas And Latest Trends</h3>
              <h6>October 14, 2023</h6>
              <p>
                Garden Pre Wedding Shoot Ideas And Latest Trends- A pre-wedding
                shoot is an esteemed custom in the realm of weddings. It
              </p>
              <a className="Readlink" href="" > Read More » </a>
            </div>
          </div>
          <div className="blog-page">
            {" "}
            <div className="Blogdiv-1">
              {" "}
              <img src={Blogimg} alt="" style={{width:"100%",padding:"5px", borderRadius: "10px", }} />{" "}
            </div>
            <div className="Blogdiv-2">
              {" "}
              <h3>Garden Pre Wedding Shoot Ideas And Latest Trends</h3>
              <h6>October 14, 2023</h6>
              <p>
                Garden Pre Wedding Shoot Ideas And Latest Trends- A pre-wedding
                shoot is an esteemed custom in the realm of weddings. It
              </p>
              <a className="Readlink" href="" > Read More » </a>
            </div>
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default Blogs;
