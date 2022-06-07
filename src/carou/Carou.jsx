import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import datas from "./dataLanguages";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="../../public/icons/HTML.svg"
    onDragStart={handleDragStart}
    alt="ok"
  />,
  <img
    src="../../public/icons/CSS.svg"
    onDragStart={handleDragStart}
    alt="ok"
  />,
];

const Gallery = () => {
  return <AliceCarousel mouseTracking items={items} />;
};
export default Gallery;
