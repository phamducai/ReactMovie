import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailMovie from "pages/Detail/Detail";
import Checkout from "pages/Checkout/Checkout";
import Login from "pages/Login/Login";
import { useDispatch } from "react-redux";
import { layThongTinNguoiDungAction } from "redux/actions/QuanLyNguoiDungAction";
import { useEffect } from "react";
import Profile from "pages/Profile/Profile";
import Register from "pages/Register/Register/Register";

import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import Dashboard from "pages/Admin/Dashboard/Dashboard";
import EditFilm from "pages/Admin/Films/Edit/Edit";
import Films from "pages/Admin/Films/Films";
import ShowTime from "pages/Admin/Showtime/ShowTime";
import AddUser from "pages/Admin/Films/AddNew/AddNew";

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
        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/" element={<HomeTemplate />} />
        <Route exact path="/detail/:id" element={<DetailMovie />} />
        <Route path="/checkout/:maLichChieu" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        <Route path="admin" element={<AdminTemplate />}>
          <Route path="" element={<AddUser />} />
          <Route path="films" element={<Films />} />
          <Route path="films/edit/:id" element={<EditFilm />} />
          <Route path="films/showtime/:id/:tenphim" element={<ShowTime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
