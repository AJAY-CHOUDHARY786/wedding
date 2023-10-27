import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Style/Test.css"
const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const data = [
    {
      img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name: "Daniel Clifford",
      designation: "Verified Graduate",
      review:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
    {
      img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name: "Daniel Clifford",
      designation: "Verified Graduate",
      review:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
    {
      img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name: "Daniel Clifford",
      designation: "Verified Graduate",
      review:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
    {
      img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name: "Daniel Clifford",
      designation: "Verified Graduate",
      review:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
    {
      img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name: "Daniel Clifford",
      designation: "Verified Graduate",
      review:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
    {
      img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
      name: "Daniel Clifford",
      designation: "Verified Graduate",
      review:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    },
  ];

  return (
    <>
    <section className="img-section">
        <img className="google-img" src="/Screenshot 2023-10-19 145430.png" alt="" />
    </section>
      <div>
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={2000}
          infinite
          loop
          arrows={false}
        >
          {data.map((d, i) => {
            const { img, name, designation, review } = d;
            return (
              <section className="testimonial" key={i}>
                <div className="div1 eachdiv">
                  <div className="userdetails">
                    <div className="imgbox">
                      <img src={img} alt={img} /> 
                    </div>
                    <div className="detbox">
                      <p className="name">{name}</p>
                      <p className="designation">{designation}</p>
                    </div>
                  </div>
                  <div className="review">
                    <h4>{review}</h4>
                  </div>
                </div>
              </section>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonial;
