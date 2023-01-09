import React from "react";

import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  let profile = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );

  return (
    <header className="bg-colorHeader h-16 bg-opacity-40 text-white fixed z-10 w-full bg-black">
      <div className="container mx-auto h-full  mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl text-white  no-underline">
          <img
            src="	https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt=""
            width={200}
            height={61}
          />
        </Link>
        <div>
          <NavLink
            to="/movielist"
            className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
          >
            Lịch Chiếu
          </NavLink>
          <NavLink
            className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            Cụm Rạp
          </NavLink>
          <NavLink
            className="no-underline   text-white  text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            Tin Tức
          </NavLink>
          <NavLink
            className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            Ứng Dụng
          </NavLink>
        </div>
        {profile ? (
          <span className="text-white text-xl">Xin Chap ,{profile.hoTen}</span>
        ) : (
          <nav className="flex">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 text-lg no-underline"
                  : "text-login text-lg no-underline font-medium"
              }
            >
              <div className="flex flex-item justify-end text-white ">
                {" "}
                <BiUserCircle className="text-2xl mx-1 " />
                Đăng Nhập
              </div>
            </NavLink>
            <span className="text-login ml-1"> |</span>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 text-lg no-underline"
                  : "text-login  text-lg no-underline font-medium"
              }
            >
              {" "}
              <div className="flex flex-item justify-end  text-white ">
                <BiUserCircle className="text-2xl mx-1" />
                Đăng Ký
              </div>
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
