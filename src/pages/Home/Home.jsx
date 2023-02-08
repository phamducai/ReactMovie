import { Element } from "react-scroll";
import React, { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapActions";
import Loading from "../../components/Loading";

const Header = lazy(() => import("./Componet/Header/Header"));
const Footer = lazy(() => import("./Componet/Footer/Footer"));
const HomeCarousel = lazy(() => import("./Componet/HomeCarousel/HomeCarousel"));
const MultipleRowSlick = lazy(() =>
  import("./Componet/RSLick/MultipleRowSlick")
);
const HomeMenu = lazy(() => import("./Componet/HomeMenu/HomeMenu"));

export default function Home(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());

    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  return (
    <Suspense
      fallback={
        <div className="w-1/12 mx-auto scroll-mt-60 mt-60">
          <Loading />
        </div>
      }
    >
      <Header />

      <Element name="carousel">
        <HomeCarousel />
      </Element>
      <Element className="text-gray-600 body-font" name="multipleslick">
        <div className="container mx-auto lg:px-5 lg:py-20 ">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </Element>
      <Element className="container md:block hidden" name="homemenu">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </Suspense>
  );
}
