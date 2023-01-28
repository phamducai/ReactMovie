import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Table, Input } from "antd";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  LayDanhSachKhachHang,
  TimKiemNguoiDungAction,
  xoaNguoidungAction,
} from "redux/actions/QuanLyNguoiDungAction";
const { Search } = Input;

function Dashboard() {
  const { danhsachkhachhang } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LayDanhSachKhachHang());
    dispatch({ type: "DELETE" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const email = danhsachkhachhang.email;
  console.log(email);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "hoTen",
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,

      fixed: "left",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",

      width: 100,
      fixed: "left",
    },
    {
      title: "UserName",
      dataIndex: "taiKhoan",

      width: 100,
    },
    {
      title: "PassWord",
      dataIndex: "matKhau",

      width: 100,
    },
    {
      title: "Phone Number",
      dataIndex: "soDT",

      width: 100,
    },
    {
      title: "Type",
      width: 100,
      dataIndex: "maLoaiNguoiDung",
      filters: [
        {
          text: "QuanTri",
          value: "QuanTri",
        },
        {
          text: "KhachHang",
          value: "KhachHang",
        },
      ],
      filterMode: "menu",
      filterMultiple: false,
      onFilter: (value, record) => {
        return record.maLoaiNguoiDung.includes(value);
      },
    },
    {
      title: "Action",

      fixed: "right",
      width: 100,
      render: (text, user) => {
        return (
          <>
            <NavLink
              key="10"
              className=" mr-2  text-2xl"
              to={`/admin/updateUser/${user.taiKhoan}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key="9"
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xoá phim " + user.taiKhoan)
                ) {
                  dispatch(xoaNguoidungAction(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
          </>
        );
      },
    },
  ];
  const data = Array.isArray(danhsachkhachhang)
    ? danhsachkhachhang
    : [danhsachkhachhang];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onsearch = async (e) => {
    await dispatch(LayDanhSachKhachHang(e.target.value));
  };
  return (
    <div>
      <h1 className="text-3xl mb-5">Quản Lý Người Dùng</h1>
      <Link to="/admin/addUser">
        <Button className="mb-5">Thêm Người Dùng</Button>
      </Link>
      <Search
        placeholder="tìm kiếm người dùng"
        enterButton="Search"
        size="large"
        onChange={onsearch}
        name="search"
      />
      <Table
        columns={columns}
        dataSource={data}
        rowKey={"email"}
        onChange={onChange}
      />
      ;
    </div>
  );
}

export default Dashboard;
