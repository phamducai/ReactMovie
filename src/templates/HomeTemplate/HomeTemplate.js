import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import Home from "pages/Home/Home";
import Header from "./Layout/Header/Header";

function HomeTemplate() {
  return (
    <div>
      {" "}
      <Header />
      <HomeCarousel />
      <Home />
    </div>
  );
}

export default HomeTemplate;
