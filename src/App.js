import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovie from "pages/Detail/Detail";
import Checkout from "pages/Checkout/Checkout";
import Login from "pages/Login/Login";
import { useDispatch } from "react-redux";
import { layThongTinNguoiDungAction } from "redux/actions/QuanLyNguoiDungAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch async action fetch profile
    dispatch(layThongTinNguoiDungAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeTemplate />} />
        <Route exact path="/detail/:id" element={<DetailMovie />} />
        <Route path="/checkout/:maLichChieu" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
