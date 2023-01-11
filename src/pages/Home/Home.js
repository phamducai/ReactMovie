import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
//Kết nối redux
import { useSelector, useDispatch } from "react-redux";

import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapActions";
import MultipleRowSlick from "components/RSLick/MultipleRowSlick";
import Footer from "templates/HomeTemplate/Layout/Footer/Footer";

export default function Home(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());

    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 lg:py-20  mx-5 ">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="lg:mx-36 hidden md:block mx-2">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
