import Slider from "react-slick";
import datas from "../languageCardList/dataLanguages";
import LanguageCard from "../languageCardList/LanguageCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <Slider {...settings}>
        {datas &&
          datas.map((data, index) => (
            <LanguageCard key={index} logo={data.logo} name={data.name} />
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
