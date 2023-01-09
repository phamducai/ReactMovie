import { CheckOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  datGheAction,
  layChiTietPhongVeAction,
} from "redux/actions/QuanLyDatVeActions";
import "./Checkout.css";
import { SiGmail } from "react-icons/si";
import clsx from "clsx";

function Checkout(props) {
  const maLichChieu = useParams();
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(layChiTietPhongVeAction(maLichChieu));
    }, // eslint-disable-next-line
    []
  );
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );
  console.log(chiTietPhongVe);
  console.log(danhSachGheDangDat);
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
                      { gheVip: item.loaiGhe === "Vip" },
                      {
                        gheDaDuocDat:
                          danhSachGheDangDat.find(
                            (ele) => ele.maGhe === item.maGhe
                          ) && item.loaiGhe === "Thuong",
                        gheDaDat: item.daDat === true,
                      }
                    )}
                    onClick={() => {
                      dispatch(datGheAction(item, maLichChieu));
                      console.log(item, maLichChieu);
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
          <h3 className="text-green-400 text-center text-4xl">50đ</h3>
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
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">tongTien</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <span className="mr-2">
              <SiGmail />
            </span>
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
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function KetQuaDatVe(props) {
  return <h1>hello</h1>;
}

export default function CheckoutTab(props) {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="p-5">
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
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
          {
            label: `Tab 3`,
            key: "3",
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </div>
  );
}
