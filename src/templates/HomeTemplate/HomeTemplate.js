import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import Home from "pages/Home/Home";
import Header from "./Layout/Header/Header";
import { useEffect } from "react";

function HomeTemplate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <HomeCarousel />
      <Home />
    </div>
  );
}

export default HomeTemplate;
