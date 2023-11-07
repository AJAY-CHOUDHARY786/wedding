import React from "react";
import "../Style/Section1.css";
import icon1 from "../Component/Images/Social.png";
import left from "../Component/Images/wadding2.jpg";
import img from "../Component/Images/7.webp";
import img1 from "../Component/Images/8-1.webp"
import img2 from "../Component/Images/9-1.webp"
import img3 from "../Component/Images/10.webp"
import img4 from "../Component/Images/11.webp"
import img5 from "../Component/Images/12-1.webp"
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
                    "Weddingzmantra is your premier choice for crafting
                    extraordinary wedding experiences in every form and
                    dimension. We proudly hold the title of the top wedding
                    planner in Rajasthan. Our expertise extends beyond the
                    borders of Rajasthan, where we've orchestrated events of all
                    sizes, from intimate gatherings to grand-scale celebrations
                    around the world. As the distinguished wedding artisans in
                    Rajasthan, we play a pivotal role in shaping one of the most
                    significant moments of your life, which is precisely why we
                    are acclaimed as the finest wedding planner in the region.
                    The outcome? Pure and enchanting MAGIC!""At Weddingzmantra,
                    we are immensely proud of our well-deserved recognition as
                    Rajasthan's foremost wedding planner. Our unwavering
                    commitment to precision and unparalleled creativity sets us
                    apart as the ultimate choice for your wedding needs in
                    Rajasthan.
                  </p>

                  <div className="bt">
                    <Link className="Sec-3-btn" to="/Best-wedding-planner">
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
                      <h1>5 star & above hotels</h1>
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
                        src={img1}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="li " to="/">
                      <h1>Resorts</h1>
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
                        src={img2}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="li" to="/">
                      <h1>Lawns / Farmhouses</h1>
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
                        src={img3}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="li" to="/">
                      <h1>Destination Wedding</h1>
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
                        src={img4}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="li" to="/">
                      <h1>Banquet Halls</h1>
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
                        src={img5}
                        style={{ width: "100%", borderRadius: "6px" }}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="li" to="/">
                      <h1>Heritage Property</h1>
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
