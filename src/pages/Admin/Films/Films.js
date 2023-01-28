import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachPhimActionAll,
  xoaPhimAction,
} from "redux/actions/QuanLyPhimActions";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { Input } from "antd";
import { getCineInfoListSystemAction } from "redux/actions/QuanLyRapActions";
const { Search } = Input;
function Films() {
  const arrFilmDefault = useSelector(
    (state) => state.QuanLyPhimReducer.allFilm
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimActionAll());
  }, []);
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      defaultSortOrder: "descend",
      width: "15%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",

      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={film.maPhim}
              className=" mr-2  text-2xl"
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={film.tenPhim}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xoá phim " + film.tenPhim)
                ) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
            <NavLink
              key={film.hinhAnh}
              className=" mr-2 text-2xl"
              to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
              onClick={() => {
                dispatch(getCineInfoListSystemAction());
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
            >
              <CalendarOutlined style={{ color: "green" }} />
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = arrFilmDefault;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onsearch = async (e) => {
    await dispatch(layDanhSachPhimActionAll(e.target.value));
  };
  return (
    <div>
      <h1 className="text-3xl mb-5">Quản Lý Phim</h1>

      <Link to="/admin/films/addfilm">
        <Button className="mb-5">Thêm Phim</Button>
      </Link>

      <Search
        placeholder="tim kiem phim"
        enterButton="Search"
        size="large"
        onChange={onsearch}
        name="search"
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}

export default Films;
