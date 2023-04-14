import React from "react";
import SlideShow from "../components/SlideShow";
import slideShowData from "../assets/data/slideshow";
import InforContact from "../components/InforContact";
const Contact = () => {
  return (
    <>
      <SlideShow
        data={slideShowData}
        control={true}
        auto={true}
        search={false}
      />
      <InforContact />
    </>
  );
};

export default Contact;
