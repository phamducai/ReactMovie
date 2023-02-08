import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
import "./HomeCarousel.css";
const contentStyle = {
  height: "650px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "top",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction());
  }, [dispatch]);
  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };
  return (
    <Carousel
      effect="fade"
      style={{ width: "100%", padding: 0, margin: 0 }}
      dotPosition
    >
      {renderImg()}
    </Carousel>
  );
}
export default HomeCarousel;
