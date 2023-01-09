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
        <div className="container px-5 py-24 mx-auto ">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>
      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
