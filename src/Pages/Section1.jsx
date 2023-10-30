import React from "react";
import "../Style/Section1.css";
import icon1 from "../Component/Images/Social.png";
import left from "../Component/Images/wadding2.jpg";
import img from "../Component/Images/7.webp";
import Explore from "../Component/Explore";
import Services from "../Component/Services";
import Explore1 from "../Component/Explore1";
import { Outlet, Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
      <div className="container1">
        <section>
          <div className="sec-2">
            <div className="head1">
              <h1> Why Us</h1>
              <p>
                Plan your wedding with a team of professionals adhere to every
                covid norm.{" "}
              </p>
            </div>
            <div className="sec-2-box">
              <div className="box">
                <div className="intrnal">
                  <div className="internal-1">
                    <div className="box-text">
                      <div className="box-img">
                        <span>
                          <img src={icon1} style={{ width: "28px" }} alt="" />
                        </span>
                      </div>

                      <div className="box-k">
                        <h1>Protective Gears</h1>
                        <p>
                          Staff acquainted with masks, gloves and sanitizers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="internal-1">
                    <div className="box-text">
                      <div className="box-img">
                        <span>
                          <img src={icon1} style={{ width: "28px" }} alt="" />
                        </span>
                      </div>

                      <div className="box-k">
                        <h1>Protective Gears</h1>
                        <p>
                          Staff acquainted with masks, gloves and sanitizers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="internal-1">
                    <div className="box-text">
                      <div className="box-img">
                        <span>
                          <img src={icon1} style={{ width: "28px" }} alt="" />
                        </span>
                      </div>

                      <div className="box-k">
                        <h1>Protective Gears</h1>
                        <p>
                          Staff acquainted with masks, gloves and sanitizers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="internal-1">
                    <div className="box-text">
                      <div className="box-img">
                        <span>
                          <img src={icon1} style={{ width: "28px" }} alt="" />
                        </span>
                      </div>

                      <div className="box-k">
                        <h1>Protective Gears</h1>
                        <p>
                          Staff acquainted with masks, gloves and sanitizers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sec-3">
            <div className="sec-3-box">
              <h1>Best Wedding Planner in Rajasthan</h1>
              <div className="sec-3-main">
                <div className="sec-3-img">
                  <img
                    src={left}
                    style={{ width: "100%", height: "100%" }}
                    alt=""
                  />
                </div>

                <div className="sec-3-text">
                  <p>
                    Putting all the beautiful pieces together and crafting
                    one-of-a-kind wedding experiences of all shapes and sizes,
                    we Shaandaar Events are known as the best wedding planner in
                    Chandigarh. As the best wedding planner in Chandigarh, we
                    have designed and produced events across the globe, ranging
                    from an intimate wedding for fifty people to a grand-scale
                    wedding for more than thousands. We as the best wedding
                    planner in Chandigarh are the craftsperson of one of the
                    most momentous events of your life which is why we are known
                    as the best wedding planner in Chandigarh. And the result is
                    nothing less than MAGIC!.
                  </p>

                  <div className="bt">
                    <Link className="Sec-3-btn" to="/">
                      {" "}
                      Know more
                    </Link>
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sec-4">
            <div className="sec-4-box">
              <h1>Popular Venue Searches</h1>
            </div>
            <div className="six-box">
              <div className="box-1">
                <div className="box-1-container">
                  <div className="img-div">
                  <Link className=" " to="/">
                  <img
                        src={img}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                     
                    </Link>
                   
                  </div>
                  <div className="link">
                  <Link className="li " to="/">
                      <h1>4 star & above hotels</h1>
                      <p>All Localities</p>
                     
                    </Link>

                  </div>
                </div>
              </div>
              <div className="box-1">
                <div className="box-1-container">
                  <div className="img-div">

                  <Link className=" " to="/">
                  <img
                        src={img}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                     
                    </Link>

                   
                  </div>
                  <div className="link">
                  <Link className="li " to="/">
                  <h1>4 star & above hotels</h1>
                      <p>All Localities</p>
                     
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="box-1">
                <div className="box-1-container">
                  <div className="img-div">


                  <Link className="li " to="/">
                  <img
                        src={img}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                     
                    </Link>
                    
                  </div>
                  <div className="link">
                  <Link className="li" to="/">
                      <h1>4 star & above hotels</h1>
                      <p>All Localities</p>
                     
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-1">
                <div className="box-1-container">
                  <div className="img-div">
                  <Link className=" " to="/">
                  <img
                        src={img}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                     
                    </Link>
                  </div>
                  <div className="link">
                  <Link className="li" to="/">
                      <h1>4 star & above hotels</h1>
                      <p>All Localities</p>
                     
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-1">
                <div className="box-1-container">
                  <div className="img-div">
                  <Link className=" " to="/">
                  <img
                        src={img}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                     
                    </Link>
                  </div>
                  <div className="link">
                  <Link className="li" to="/">
                      <h1>4 star & above hotels</h1>
                      <p>All Localities</p>
                     
                    </Link>
                  </div>
                </div>
              </div>
              <div className="box-1">
                <div className="box-1-container">
                  <div className="img-div">
                  <Link className=" " to="/">
                  <img
                        src={img}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                     
                    </Link>
                  </div>
                  <div className="link">
                  <Link className="li" to="/">
                      <h1>4 star & above hotels</h1>
                      <p>All Localities</p>
                     
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sec-5">
            <div className="sec-5-box">
              <div className="head1">
                <h1>Wedding Categories</h1>
                <p>
                  We understand your apprehensions. Thus we take a notch higher
                  than your expectations as the Best Wedding Planner in India{" "}
                </p>
              </div>
              <div className="sec-5-main">
                <div className="sec-5-inner">
                <Link className="sec1-5-one" to="/">
                <div className="sec1-5-box">
                     
                     <h1>Destination wedding</h1>
                     <p>
                       Celebrate at a location that uniquely <br /> represents
                       your love
                     </p>
                   </div>
                     
                    </Link>
                    <Link className="sec1-5-two" to="/">
                <div className="sec1-5-box">
                     
                     <h1>Destination wedding</h1>
                     <p>
                       Celebrate at a location that uniquely <br /> represents
                       your love
                     </p>
                   </div>
                     
                    </Link>
                  
                  
                </div>
                <div className="sec-5-inner">
                <Link className="sec1-5-one" to="/">
                <div className="sec1-5-box">
                     
                     <h1>Destination wedding</h1>
                     <p>
                       Celebrate at a location that uniquely <br /> represents
                       your love
                     </p>
                   </div>
                     
                    </Link>
                    <Link className="sec1-5-two" to="/">
                <div className="sec1-5-box">
                     
                     <h1>Destination wedding</h1>
                     <p>
                       Celebrate at a location that uniquely <br /> represents
                       your love
                     </p>
                   </div>
                     
                    </Link>
                  
                </div>
                <div className="sec-5-inner">
                <Link className="sec1-5-one" to="/">
                <div className="sec1-5-box">
                     
                     <h1>Destination wedding</h1>
                     <p>
                       Celebrate at a location that uniquely <br /> represents
                       your love
                     </p>
                   </div>
                     
                    </Link>
                    <Link className="sec1-5-two" to="/">
                <div className="sec1-5-box">
                     
                     <h1>Destination wedding</h1>
                     <p>
                       Celebrate at a location that uniquely <br /> represents
                       your love
                     </p>
                   </div>
                     
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="sec-6-container">
            <div className="sec-6-testimoniols"></div>
          </div>
        </section>

        <Explore />
        <Services />
        <Explore1 />
      </div>
    </>
  );
};

export default Section1;
