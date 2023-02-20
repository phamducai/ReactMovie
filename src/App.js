import { BrowserRouter, Route, Routes } from "react-router-dom";

import Checkout from "pages/Checkout/Checkout";
import Login from "pages/Login/Login";
import { useDispatch } from "react-redux";
import { layThongTinNguoiDungAction } from "redux/actions/QuanLyNguoiDungAction";
import { useEffect } from "react";
import Profile from "pages/Profile/Profile";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import EditFilm from "pages/Admin/Films/Edit/Edit";
import Films from "pages/Admin/Films/Films";
import ShowTime from "pages/Admin/Showtime/ShowTime";
import Register from "pages/Register/Register";
import Home from "pages/Home/Home";
import AddFilm from "pages/Admin/Films/Edit/AddFilm";
import Dashboard from "pages/Admin/Dashboard/DashbashUser";
import AddUser from "pages/Admin/Dashboard/AddUser";
import UpdateUser from "pages/Admin/Dashboard/UpdateUser";
import DetailMovie from "pages/Detail/Detail";
import AppRoute from "app/AppRoute";

function App() {
  const dispatch = useDispatch();
  const flag = localStorage.getItem("token");
  useEffect(() => {
    // dispatch async action fetch profile
    if (flag) {
      dispatch(layThongTinNguoiDungAction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="" element={<Home />} />
        <Route path="detail/:id" element={<DetailMovie />} />
        <Route path="checkout/:maLichChieu" element={<Checkout />} />
        <Route path="login" element={<AppRoute component={Login} isAuth />} />
        <Route
          path="register"
          element={<AppRoute component={Register} isAuth />}
        />
        <Route path="profile/:taikhoan" element={<Profile />} />
        <Route path="admin" element={<AdminTemplate />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="updateUser/:taikhoan" element={<UpdateUser />} />
          <Route path="films" element={<Films />} />
          <Route path="films/addfilm" element={<AddFilm />} />
          <Route path="films/edit/:id" element={<EditFilm />} />
          <Route path="films/showtime/:id/:tenphim" element={<ShowTime />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
