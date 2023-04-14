import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/image/slide_2.jpg";
import Search from "./Search";
const SlideShow = (props) => {
  const data = props.data;
  const [activeSlide, setActiveSlide] = useState(0);

  const timeOut = props.timeOut ? props.timeOut : 3000;
  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);
  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut, props]);
  return (
    <div className="slide-show">
      {props.search === true ? <Search /> : <div></div>}
      {data.map((item, index) => (
        <SlideShowItem key={index} item={item} active={index === activeSlide} />
      ))}
      {props.control ? (
        <div className="slide-show__control">
          <div className="slide-show__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="slide-show__control__item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="slide-show__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const SlideShowItem = (props) => (
  <div className={`slide-show__item ${props.active ? "active" : ""}`}>
    <div className="slide-show__item__image">
      <img src={props.item.img} alt="ảnh" />
    </div>
  </div>
);

export default SlideShow;
