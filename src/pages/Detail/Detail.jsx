import React, { useEffect } from "react";
import { Tabs, Rate, Button } from "antd";
import "../../assets/styles/circle.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinChiTietPhim } from "redux/actions/QuanLyRapActions";
import moment from "moment";
import Header from "templates/HomeTemplate/Layout/Header/Header";

function DetailMovie(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams();
  useEffect(
    () => {
      dispatch(layThongTinChiTietPhim(id));
    }, // eslint-disable-next-line
    []
  );
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);

  const flagLogin = localStorage.getItem("token");
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "rgb(10, 32, 41)" }}>
        <Header />
        <div className=" absolute top-20 left-0 w-full">
          {" "}
          {filmDetail?.hinhAnh && (
            <div>
              <div className="grid grid-cols-12">
                <div className="col-span-5 col-start-3">
                  <div className="grid grid-cols-3">
                    <img
                      className="col-span-1"
                      src={filmDetail?.hinhAnh}
                      style={{ width: "100%", height: 300 }}
                      alt="123"
                    />
                    <div
                      className="col-span-2 ml-5"
                      style={{ marginTop: "25%" }}
                    >
                      <p className="text-sm ">
                        Ngày chiếu:{" "}
                        {moment(filmDetail?.ngayKhoiChieu).format("DD.MM.YYYY")}{" "}
                      </p>
                      <h1 className="text-4xl leading-3  ">
                        {filmDetail?.tenPhim}
                      </h1>
                      <p className="text-sm ">{filmDetail.moTa}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 col-start-9">
                  <div className="flex flex-col">
                    {" "}
                    <div className={`c100 p${filmDetail?.danhGia * 10} big`}>
                      <span className="text-white">
                        {filmDetail?.danhGia * 10}
                      </span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                    <h1
                      style={{ marginLeft: "5%" }}
                      className="text-green-400 text-2xl"
                    >
                      <Rate
                        allowHalf
                        value={filmDetail?.danhGia / 2}
                        style={{ color: "#78ed78", fontSize: 30 }}
                      />
                    </h1>
                    <h1
                      style={{
                        marginLeft: "15%",
                        color: "yellow",
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Đánh giá
                    </h1>
                  </div>

                  <br />
                </div>
              </div>
              <div className="w-8/12 m-auto ">
                <Tabs
                  tabPosition={"left"}
                  items={filmDetail?.heThongRapChieu.map((Rap) => {
                    return {
                      label: (
                        <img
                          src={Rap?.logo}
                          alt="dmm"
                          className="rounded-full w-full "
                          style={{ width: 50 }}
                        />
                      ),
                      key: Rap.maHeThongRap,
                      children: (
                        <div>
                          {Rap.cumRapChieu.map((item) => {
                            return (
                              <div key={item.maCumRap}>
                                <p className="text-lg text-green-700">
                                  {item.tenCumRap} {item.diaChi}
                                </p>
                                <div className="grid grid-cols-4">
                                  {item.lichChieuPhim
                                    .slice(0, 4)
                                    .map((itemLich) => {
                                      return (
                                        <div key={itemLich.maRap}>
                                          <Button
                                            onClick={() => {
                                              if (flagLogin) {
                                                navigate(
                                                  `/checkout/${itemLich.maLichChieu}`
                                                );
                                              } else {
                                                navigate("/login");
                                              }
                                            }}
                                          >
                                            {moment(
                                              itemLich.ngayChieuGioChieu
                                            ).format("DD/MM/YYYY ~ HH:MM")}
                                          </Button>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ),
                    };
                  })}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default DetailMovie;
