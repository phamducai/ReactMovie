import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailMovie from "pages/Detail/Detail";
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

import UserTemplate from "templates/UserTemplate/UserTemplate";
import Register from "pages/Register/Register";
import Test from "Test";
import Contact from "pages/Contact/Contact";
import News from "pages/News/News";
import Home from "pages/Home/Home";
import AddFilm from "pages/Admin/Films/Edit/AddFilm";

import Dashboard from "pages/Admin/Dashboard/DashbashUser";
import AddUser from "pages/Admin/Dashboard/AddUser";
import UpdateUser from "pages/Admin/Dashboard/UpdateUser";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch async action fetch profile
    dispatch(layThongTinNguoiDungAction);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<Navigate to="" />} /> */}
        <Route path="" element={<HomeTemplate />}>
          <Route index path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="detail/:id" element={<DetailMovie />} />
        </Route>

        <Route path="test" element={<Test />} />

        <Route path="checkout/:maLichChieu" element={<Checkout />} />

        <Route path="users" element={<UserTemplate />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
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
