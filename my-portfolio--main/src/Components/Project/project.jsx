import React, { useContext } from "react";
import "./project.css";
import { themeContext } from "../../Context";


import { Swiper, SwiperSlide } from "swiper";
// import 'swiper/css';
import project1 from "../../Img/project1.png";
import project2 from "../../Img/project2.png";
import project3 from "../../Img/project3.png";

const Project = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="project" id =" project">
      <div>
        <div style={{ color: darkMode ? "white" : "" }}>Recent projects</div>
        <div>Portfolio</div>
      </div>
      {/* slider*/}
      <Swiper
        spaceBetween={45}
        slidesPerView={2}
        grabCursor={true}
        className="project-slider"
      >
        <SwiperSlide>
          <img src={project1} alt="" className="src" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="" className="src" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="" className="src" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Project