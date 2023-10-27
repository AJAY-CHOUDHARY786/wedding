import React from "react";
import Banner from "../Component/Banner";
import "../Style/Weddingpics.css"
const Weddingpics = () => {
  return (
    <>
      <Banner />
      <section>
        <div className="pic-container">
            <div className="pic-section">
              
                <h1> Wedding-pics </h1>
               

                    <div className="pic-gallery">
                        <div className="gallery"> </div>
                        <div className="gallery"> </div>
                        <div className="gallery"> </div>
                    </div>
                   <h1> Haldi</h1>
                   <div className="pic-gallery">
                        <div className="gallery"> </div>
                        <div className="gallery"> </div>
                        <div className="gallery"> </div>
                    </div>
                    <h1> Reception </h1>
                    <div className="pic-gallery">
                        <div className="gallery"> </div>
                        <div className="gallery"> </div>
                        <div className="gallery"> </div>
                    </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Weddingpics;
