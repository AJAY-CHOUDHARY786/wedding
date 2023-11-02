
import "../Style/stories.css";
import Testimonial from "./Testimonial";
import { Outlet, Link } from "react-router-dom";
import myVideo from "../Component/Images/SaveInsta.App - 3069837257996486167_28570223612.mp4";
import myVideo1 from "../Component/Images/SaveInsta.App - 3216320167789656822.mp4";
import myVideo2 from "../Component/Images/SaveInsta.App - 3221351508222656519.mp4";
import myVideo3 from "../Component/Images/SaveInsta.App - 3211225212305976649.mp4";
import myVideo4 from "../Component/Images/SaveInsta.App - 3186495297560038472.mp4";
import myVideo5 from "../Component/Images/SaveInsta.App - 3224996464328879087.mp4";
import VideoPlayer from "./VideoPlayer";


const Stories = () => {

  return (
    <>
      <section>
        <div className="stories-container">
          <div className="stories-main">
            <div className="stories-sec-1">
              <div className="stories-heading">
                <h1>Our Wedding Stories</h1>
              </div>

              <div className="stories-sec">

                <Link className=" st-img" to="/Weddingpics">  <div className="stories-img">
                  <img
                    src="https://shaandaarevents.com/wp-content/uploads/2023/07/gfg.webp"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h2>Puneet x Zenam</h2>
                  <p>
                    A bewitching destination wedding that was as beautiful as
                    the couple’s love story
                  </p>
                  <p>30 Dec 2021</p>
                </div></Link>
                <Link className=" st-img" to="/Weddingpics">  <div className="stories-img">
                  <img
                    src="https://shaandaarevents.com/wp-content/uploads/2023/07/gfg.webp"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h2>Puneet x Zenam</h2>
                  <p>
                    A bewitching destination wedding that was as beautiful as
                    the couple’s love story
                  </p>
                  <p>30 Dec 2021</p>
                </div></Link>
                <Link className=" st-img" to="/Weddingpics">  <div className="stories-img">
                  <img
                    src="https://shaandaarevents.com/wp-content/uploads/2023/07/gfg.webp"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h2>Puneet x Zenam</h2>
                  <p>
                    A bewitching destination wedding that was as beautiful as
                    the couple’s love story
                  </p>
                  <p>30 Dec 2021</p>
                </div></Link>
                <Link className=" st-img" to="/Weddingpics">  <div className="stories-img">
                  <img
                    src="https://shaandaarevents.com/wp-content/uploads/2023/07/gfg.webp"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h2>Puneet x Zenam</h2>
                  <p>
                    A bewitching destination wedding that was as beautiful as
                    the couple’s love story
                  </p>
                  <p>30 Dec 2021</p>
                </div></Link>
                <Link className=" st-img" to="/Weddingpics">  <div className="stories-img">
                  <img
                    src="https://shaandaarevents.com/wp-content/uploads/2023/07/gfg.webp"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h2>Puneet x Zenam</h2>
                  <p>
                    A bewitching destination wedding that was as beautiful as
                    the couple’s love story
                  </p>
                  <p>30 Dec 2021</p>
                </div></Link>
                <Link className=" st-img" to="/Weddingpics">  <div className="stories-img">
                  <img
                    src="https://shaandaarevents.com/wp-content/uploads/2023/07/gfg.webp"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h2>Puneet x Zenam</h2>
                  <p>
                    A bewitching destination wedding that was as beautiful as
                    the couple’s love story
                  </p>
                  <p>30 Dec 2021</p>
                </div></Link>
               
                
              </div>
            </div>
          </div>
        </div>






        <div className="vid-container">
          <div className="vid-main">
            <div className="stories-heading">
              <h1>Our Video</h1>
            </div>
            <div className="vid-section">
              <div className="vid-1">
              <VideoPlayer   videoSource={myVideo} />
              </div>

              <div className="vid-1">
                <VideoPlayer   videoSource={myVideo1} />
              </div>
              <div className="vid-1">
              <VideoPlayer   videoSource={myVideo2} />
              </div>
              <div className="vid-1">
              <VideoPlayer   videoSource={myVideo3} />
              </div>
              <div className="vid-1">
              <VideoPlayer   videoSource={myVideo4} />
              </div>
              <div className="vid-1">
              <VideoPlayer   videoSource={myVideo5} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="feature-container">
          <div className="feature-section">
            <div className="stories-sec-1">
              <div className="stories-heading">
                <h1>Feature And Appriciations</h1>
              </div>
              <div className="img-cont">
                <div className="stor-img">
                  <img
                    style={{ width: "100%" }}
                    src="https://shaandaarevents.com/wp-content/uploads/2022/06/wedding.gif"
                    alt=""
                  />
                </div>
                <div className="stor-img">
                  <img
                    style={{ width: "100%" }}
                    src="https://shaandaarevents.com/wp-content/uploads/2022/06/wedding.gif"
                    alt=""
                  />
                </div>
                <div className="stor-img">
                  <img
                    style={{ width: "100%" }}
                    src="https://shaandaarevents.com/wp-content/uploads/2022/06/wedding.gif"
                    alt=""
                  />
                </div>
                <div className="stor-img">
                  <img
                    style={{ width: "100%" }}
                    src="https://shaandaarevents.com/wp-content/uploads/2022/06/wedding.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
          <Outlet />
    </>
  );
};

export default Stories;
