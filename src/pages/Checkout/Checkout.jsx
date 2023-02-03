import { CheckOutlined } from "@ant-design/icons";
import { Button, Tabs } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import "./Checkout.css";
import clsx from "clsx";
import _ from "lodash";

import {
  datGheAction,
  datVeAction,
  layChiTietPhongVeAction,
} from "redux/actions/QuanLyDatVeActions";

import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { useTranslation } from "react-i18next";

function Checkout(props) {
  const { t } = useTranslation();
  const { maLichChieu } = useParams();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(layChiTietPhongVeAction(maLichChieu));
    },
    // eslint-disable-next-line
    []
  );
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );

  return (
    <div className=" min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black "
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className="text-center trapezoid mb-3">
              <h3 className="mt-3 text-black">Màn hình</h3>
            </div>
            <div className="grid grid-cols-16 gap-4">
              {danhSachGhe?.map((item) => {
                return (
                  <button
                    style={{ textAlign: "center" }}
                    key={item.maGhe}
                    className={clsx(
                      "ghe text-center",
                      {
                        gheVip: item.loaiGhe === "Vip",
                      },
                      {
                        gheDaDuocDat: danhSachGheDangDat.find(
                          (ele) => ele.maGhe === item.maGhe
                        ),
                      },
                      { gheDaDat: item.daDat === true }
                    )}
                    onClick={() => {
                      dispatch(datGheAction(item, maLichChieu));
                    }}
                  >
                    {item?.tenGhe}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <table className=" divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td>
                    <button className="ghe text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />{" "}
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDangDat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheVip text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDaDat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDaDuocDat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheKhachDat text-center">
                      <CheckOutlined
                        style={{ marginBottom: 7.5, fontWeight: "bold" }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 mr-4">
          <h3 className="text-green-400 text-center text-4xl">
            {danhSachGheDangDat
              .reduce((tongTien, ghe) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </h3>
          <hr />
          <h3 className="text-xl mt-2">{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}{" "}
          </p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg w-44 overflow-x-scroll ">
                Ghế
              </span>{" "}
              {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                return (
                  <span key={index} className="text-green-500 text-xl mr-2">
                    {gheDD.stt}
                  </span>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>email</i>
            {userLogin?.email} <br />
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i> {userLogin?.soDT}
            <br />
          </div>
          <hr />
          <div
            className="mb-0 h-full flex flex-col items-center"
            style={{ marginBottom: 0 }}
          >
            <div
              className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer"
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = maLichChieu;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                dispatch(datVeAction(thongTinDatVe));
              }}
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function KetQuaDatVe(props) {
  const thongTinNguoiDung = useSelector(
    (state) => state.QuanLyNguoiDungReducer?.thongTinNguoiDung
  );
  const arr = [...thongTinNguoiDung.thongTinDatVe];
  const map = arr;
  console.log(map);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Lịch Sử Đặt Vé
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {map.map((ticket) => {
            return (
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={ticket.maVe}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={ticket.hinhAnh}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {ticket.tenPhim}
                    </h2>
                    <p className="text-gray-500">
                      {moment(ticket.ngayDat).format("hh:mm A-DD/MM/YYYY")}
                    </p>
                    <p>
                      <span className="font-bold">Địa điểm:</span>
                      {ticket.danhSachGhe[0].tenHeThongRap}
                    </p>
                    <p>
                      <span className="font-bold">Tên rạp:</span>{" "}
                      {ticket.danhSachGhe[0].tenCumRap} -{" "}
                      <span className="font-bold">Ghế:</span>{" "}
                      {ticket.danhSachGhe.slice(0, 10).map((ghe, index) => {
                        return (
                          <span className="text-green-500 text-xl" key={index}>
                            {ghe.tenGhe}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function CheckoutTab(props) {
  const { t } = useTranslation();
  const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
  const userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch({
        type: "CHANGE_TAB_ACTIVE",
        number: "1",
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          <button
            onClick={() => {
              navigate(`/profile/${userLogin.taiKhoan}`);
            }}
          >
            {" "}
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-2xl ml-5 rounded-full bg-red-200"
            >
              {userLogin.taiKhoan.substr(0, 1)}
            </div>
            Hello ! {userLogin.taiKhoan}
          </button>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
              window.location.reload();
            }}
            className="text-blue-800"
          >
            {t("Log out")}
          </Button>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <div className="p-5">
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        activeKey={tabActive}
        animated
        onChange={(key) => {
          dispatch({
            type: "CHANGE_TAB_ACTIVE",
            number: key.toString(),
          });
        }}
        items={[
          {
            label: `01 CHỌN GHẾ & THANH TOÁN`,
            key: "1",
            children: (
              <div>
                <Checkout {...props} />
              </div>
            ),
          },
          {
            label: `02 KẾT QUẢ ĐẶT VÉ`,
            key: "2",
            children: (
              <div>
                <KetQuaDatVe {...props} />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
