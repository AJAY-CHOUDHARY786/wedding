
import "../Style/stories.css";
import Testimonial from "./Testimonial";
import React, { useRef } from 'react';
import myVideo from "../Component/Images/SaveInsta.App - 3069837257996486167_28570223612.mp4";
import myVideo1 from "../Component/Images/SaveInsta.App - 3216320167789656822.mp4";
import myVideo2 from "../Component/Images/SaveInsta.App - 3186495297560038472.mp4";
import myVideo3 from "../Component/Images/SaveInsta.App - 3211225212305976649.mp4";
import myVideo4 from "../Component/Images/SaveInsta.App - 3186495297560038472.mp4";
import myVideo5 from "../Component/Images/SaveInsta.App - 3224996464328879087.mp4";


const Stories = () => {
  const videoRef = useRef(null);
  const videoStyle = {
    width: "100%",
    padding: "20px",
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
    };
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
                <div className="stories-img">
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
                </div>
                <div className="stories-img">
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
                </div>
                <div className="stories-img">
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
                </div>
                <div className="stories-img">
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
                </div>
                <div className="stories-img">
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
                </div>
                <div className="stories-img">
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
                </div>
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
                <video  ref={videoRef} controls={false} style={videoStyle} onClick={toggleFullScreen}>
                  <source src={myVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="vid-1">
                <video ref={videoRef} controls={false}  style={videoStyle} onClick={toggleFullScreen}>
                  <source src={myVideo1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-1">
                <video  ref={videoRef} controls={false}  style={videoStyle} onClick={toggleFullScreen}>
                  <source src={myVideo2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-1">
                <video  ref={videoRef} controls={false} style={videoStyle} onClick={toggleFullScreen}>
                  <source src={myVideo3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-1">
                <video   ref={videoRef} controls={false} style={videoStyle} onClick={toggleFullScreen}>
                  <source src={myVideo4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="vid-1">
                <video ref={videoRef} controls={false}   style={videoStyle} onClick={toggleFullScreen} >
                  <source src={myVideo5} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
    </>
  );
};

export default Stories;
