import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovie from "pages/Detail/Detail";
import Checkout from "pages/Checkout/Checkout";
import Login from "pages/Login/Login";
import { useDispatch } from "react-redux";
import { layThongTinNguoiDungAction } from "redux/actions/QuanLyNguoiDungAction";
import { useEffect } from "react";
import Profile from "pages/Profile/Profile";
import Register from "pages/Register/Register/Register";

import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import Films from "pages/Admin/Films/Films";
import AddNew from "pages/Admin/Films/AddNew/AddNew";
import Dashboard from "pages/Admin/Dashboard/Dashboard";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminTemplate />}>
          <Route path="/admin/addfilm" element={<Films />} />
          <Route path="/admin/addfilm" element={<Dashboard />} />
          <Route path="/admin/adduser" element={<AddNew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
