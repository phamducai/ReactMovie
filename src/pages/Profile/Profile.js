/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Dropdown, Select, Space, Tag } from "antd";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { EditOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";
import { updateProfileAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment/moment";

function Header() {
  let profile = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinTaiKhoan
  );

  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <NavLink
          to="/movielist"
          className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
        >
          {t("Showtimes")}
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
          href="£"
        >
          {t("Cluster of Theaters")}
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          className="no-underline   text-white  text-sm px-4 transition-all font-medium leading-tight"
          href="£"
        >
          {t("News")}
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink
          className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
          href="£"
        >
          {t("Application")}
        </NavLink>
      ),
    },
    {
      key: "5",
      label: profile ? (
        <NavLink
          onClick={() => {
            navigate("/profile");
          }}
          className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
        >
          {profile.taiKhoan.charAt(0).toUpperCase() + profile.taiKhoan.slice(1)}
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
        >
          {t("Sign In")}
        </NavLink>
      ),
    },
    {
      key: "6",
      label: profile ? (
        <NavLink
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
            navigate("/");
          }}
          className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
        >
          {t("Log out")}
        </NavLink>
      ) : (
        <NavLink
          to="/signup"
          className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
        >
          {t("Sign Up")}
        </NavLink>
      ),
    },
  ];

  return (
    <header className="bg-colorHeader h-18 bg-opacity-40 text-white  z-10 w-full bg-black">
      <div className="container  h-full  mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl text-white  no-underline">
          <img
            src="https://hcmut.edu.vn/img/logo.jpg?t=26899198"
            alt=""
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden md:block">
          <NavLink
            to="/movielist"
            className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
          >
            {t("Showtimes")}
          </NavLink>
          <NavLink
            className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            {t("Cluster of Theaters")}
          </NavLink>
          <NavLink
            className="no-underline   text-white  text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            {t("News")}
          </NavLink>
          <NavLink
            className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
            href="£"
          >
            {t("Application")}
          </NavLink>
        </div>
        <div className="hidden md:flex ">
          {profile ? (
            <div className="flex items-center ml-60">
              <NavLink
                onClick={() => {
                  navigate("/profile");
                }}
                className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
              >
                {profile.taiKhoan.charAt(0).toUpperCase() +
                  profile.taiKhoan.slice(1)}
              </NavLink>
              <NavLink
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                  navigate("/");
                }}
                className="no-underline  text-white text-sm px-4 transition-all font-medium leading-tight"
              >
                {t("Log out")}
              </NavLink>
            </div>
          ) : (
            <nav className="flex items-center">
              <NavLink to="/login" className="no-underline">
                <div className="flex flex-item justify-end text-white no-underline">
                  {t("Sign In")}
                </div>
              </NavLink>
              <NavLink to="/signup" className="no-underline lg:ml-6">
                <div className="flex flex-item justify-end  text-white no-underline ">
                  {t("Sign Up")}
                </div>
              </NavLink>
            </nav>
          )}
          <Select
            defaultValue="en"
            style={{ width: 70 }}
            onChange={handleChange}
            className="lg:ml-2 ml-1"
          >
            <Select.Option value="en">Eng</Select.Option>
            <Select.Option value="vi">Vi</Select.Option>
            <Select.Option value="chi">Chi</Select.Option>
          </Select>
        </div>
        <div
          className="flex
        "
        >
          <Dropdown
            menu={{
              items,
            }}
            className="p-4 md:hidden"
          >
            <Space>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </Space>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default function Profile() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setData([...data]);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [data]);

  const { thongTinTaiKhoan } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const [dataSubmit, setDataSubmit] = useState({
    dataSubmit: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
  });

  useEffect(() => {
    setDataSubmit(thongTinTaiKhoan);
    // Đã load email
  }, [thongTinTaiKhoan]);

  console.log(dataSubmit);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDataSubmit({ ...dataSubmit, [e.target.name]: e.target.value });
  };

  const onFinish = (e) => {
    e.preventDefault();
    console.log(dataSubmit);
    // dispatch(updateProfileAction(dataSubmit));
  };

  return (
    <div>
      <Header></Header>
      <div className=" w-10/12 mx-auto my-5 px-5 ">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://picsum.photos/200/300"
                  alt
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {thongTinTaiKhoan?.hoTen}
              </h1>
              <h1 className="text-gray-600 font-bold text-semibold leading-6">
                Loại Người Dùng: {thongTinTaiKhoan?.loaiNguoiDung?.tenLoai}
              </h1>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Trạng Thái</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Đang Hoạt Động
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Thời gian hiện tại</span>
                  <span className="ml-auto">{dayjs().format("hh:mm:ss")}</span>
                </li>
              </ul>
            </div>
            {/* End of profile card */}
            <div className="my-4" />

            {/* End of friends card */}
          </div>
          {/* Right Side */}
          <div className="w-full md:w-9/12 mx-2 h-64">
            {/* Profile tab */}
            {/* About Section */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">Thông tin tài khoản</span>
              </div>
              <form onSubmit={onFinish} className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <Input
                        value={dataSubmit.email}
                        onChange={handleChange}
                        name={"email"}
                      />
                    </div>
                    {/* <div
                      onClick={() => {
                        console.log("Đã Click");
                      }}
                      className="px-4 py-2"
                    >
                      <EditOutlined /> Chỉnh Sửa
                    </div> */}
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Tài Khoản</div>
                    <div className="px-4 py-2">
                      <Input
                        value={dataSubmit.taiKhoan}
                        onChange={handleChange}
                        name={"taiKhoan"}
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Số điện thoại</div>
                    <div className="px-4 py-2">
                      <Input
                        value={dataSubmit.soDT}
                        onChange={handleChange}
                        name={"soDT"}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Mật Khẩu</div>
                    <div className="px-4 py-2">
                      <Input.Password
                        name="matKhau"
                        value={dataSubmit.matKhau}
                        onChange={handleChange}
                        placeholder="input password"
                        visibilityToggle={{
                          visible: passwordVisible,
                          onVisibleChange: setPasswordVisible,
                        }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Họ Và Tên</div>
                    <div className="px-4 py-2">
                      <Input
                        value={dataSubmit.hoTen}
                        onChange={handleChange}
                        name={"hoTen"}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold"> </div>
                    <div className="px-4 py-2">
                      <Button htmlType="submit">Cập Nhật</Button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button> */}
            </div>
            {/* End of about section */}
            <div className="my-4" />
            {/* Experience and education */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">Lịch sử đặt vé</span>
              </div>
              <div
                className="grid grid-cols-2"
                style={{ overflowY: "scroll", height: "480px" }}
              >
                {thongTinTaiKhoan.thongTinDatVe?.map((phim) => {
                  return (
                    <div className="flex mb-5  ">
                      <img
                        src={phim.hinhAnh}
                        alt=""
                        style={{ width: "150px" }}
                      />
                      <div className="ml-5">
                        <h1 className="text-teal-600 text-2xl">
                          {phim.tenPhim} {phim.thoiLuongPhim} phút
                        </h1>
                        <p
                          className="text-gray-900"
                          style={{ fontSize: "15px" }}
                        >
                          Ngày Chiếu:
                          {moment(phim.ngayDat).format("DD/MM/YYYY")} - Giờ
                          Chiếu: {moment(phim.ngayDat).format("hh:mm:ss")}
                        </p>
                        <h3>
                          Danh sách ghế : <br />
                          {phim.danhSachGhe?.slice(0, 4).map((ghe) => {
                            return (
                              <Tag color="geekblue">
                                Rap: {ghe.tenHeThongRap} - Cụm Rap:{" "}
                                {ghe.maCumRap} - số Ghế: {ghe.tenGhe}
                              </Tag>
                            );
                          })}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* End of Experience and education grid */}
            </div>
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    </div>
  );
}
