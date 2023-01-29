/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinNguoiDungAction } from "redux/actions/QuanLyNguoiDungAction";
import { Dropdown, Select, Space } from "antd";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function Header() {
  let profile = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );
  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    console.log(value);
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

  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  console.log(thongTinNguoiDung);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData([...data]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto my-5 px-5  ">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                  alt
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {thongTinNguoiDung?.hoTen}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Loại Người Dùng: {thongTinNguoiDung?.loaiNguoiDung.tenLoai}
              </h3>
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
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">Jane</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">Doe</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Female</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+11 998001001</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                      Beech Creek, PA, Pennsylvania
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Permanant Address
                    </div>
                    <div className="px-4 py-2">
                      Arlington Heights, IL, Illinois
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">Feb 06, 1998</div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>
            {/* End of about section */}
            <div className="my-4" />
            {/* Experience and education */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
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
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">
                        Masters Degree in Oxford
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Bachelors Degreen in LPU
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
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
