/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown, message, Select, Space } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Header() {
  let profile = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );
  console.log(profile);

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
      label:
        profile?.maNguoiDung === "QuanTri" ? (
          <NavLink to={"/admin"}>Admin</NavLink>
        ) : null,
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
          to={`/profile/${profile.taiKhoan}`}
          className="no-underline  text-white  text-sm px-4 transition-all font-medium leading-tight"
        >
          {profile.taiKhoan.charAt(0).toUpperCase() + profile.taiKhoan.slice(1)}
        </NavLink>
      ) : (
        <NavLink
          to="/login"
          className="no-underline text-white text-sm px-4 transition-all font-medium leading-tight"
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
          to="users/signup"
          className="no-underline  text-white   text-sm px-4 transition-all font-medium leading-tight"
        >
          {t("Sign Up")}
        </NavLink>
      ),
    },
  ];

  const tem = [
    {
      label: (
        <NavLink to={`/profile/${profile?.taiKhoan}`}> Update User </NavLink>
      ),
      key: "100",
      icon: <UserOutlined />,
    },
    {
      label:
        profile?.maLoaiNguoiDung === "QuanTri" ? (
          <NavLink to={"/admin"}>Admin</NavLink>
        ) : (
          <NavLink to={"/"}>Home</NavLink>
        ),
      key: "200",
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items: tem,
  };
  return (
    <header className="bg-colorHeader h-18 bg-opacity-40 text-white fixed z-10 w-full bg-black">
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
              <Dropdown.Button
                menu={menuProps}
                placement="bottom"
                icon={<UserOutlined />}
              >
                {profile.taiKhoan.charAt(0).toUpperCase() +
                  profile.taiKhoan.slice(1)}
              </Dropdown.Button>

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
              <NavLink to="users/login" className="no-underline">
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
            defaultValue={t("lang")}
            style={{ width: 70 }}
            onChange={handleChange}
            className="lg:ml-2 ml-1"
          >
            <Select.Option value={t("lang")} name="opion">
              {t("lang")}
            </Select.Option>
            <Select.Option value="en" name="en">
              Eng
            </Select.Option>
            <Select.Option value="vi" name="vi">
              Vi
            </Select.Option>
            <Select.Option value="chi" name="chi">
              Chi
            </Select.Option>
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
