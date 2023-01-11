import React from "react";
import { Tabs, Button } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "./homeMenu.css";

function HomeMenu(props) {
  const { heThongRapChieu } = props;
  const navigate = useNavigate();
  const flagLogin = localStorage.getItem("token");
  return (
    <Tabs
      tabPosition="left"
      items={heThongRapChieu?.map((heThongRap, index) => {
        return {
          label: <img className="w-24" src={heThongRap.logo} alt="huhu" />,
          key: heThongRap.maHeThongRap,
          children: (
            <Tabs
              tabPosition="left"
              items={heThongRap.lstCumRap?.slice(0, 6).map((cumRap) => {
                return {
                  label: (
                    <div
                      key={cumRap.maCumRap + "10"}
                      className="lg:w-3/5 md:w-40"
                    >
                      <div className="text-left">
                        {cumRap?.tenCumRap.substr(0, 30)}
                      </div>
                      <div className="text-left">
                        <p>{cumRap?.diaChi.split(" ", 15)}</p>
                      </div>
                    </div>
                  ),
                  key: cumRap.maCumRap,
                  children: (
                    <div>
                      {cumRap?.danhSachPhim.slice(0, 4).map((item) => {
                        return (
                          <div key={item.maPhim}>
                            <div className="flex p-5 items-start">
                              <img
                                src={item.hinhAnh}
                                alt=""
                                className="w-24 h-32 mr-5"
                              />
                              <div>
                                <p>
                                  {" "}
                                  <span className="jss624">C18</span>
                                  {item.tenPhim}
                                </p>
                                <div className=" grid lg:grid-cols-1 justify-centerb gap-4">
                                  {" "}
                                  {item?.lstLichChieuTheoPhim
                                    .slice(0, 2)
                                    .map((itemhour) => {
                                      return (
                                        <Button
                                          className="bg-btn"
                                          type="default"
                                          size="default"
                                          key={itemhour.maLichChieu}
                                          onClick={() => {
                                            if (flagLogin) {
                                              navigate(
                                                `/checkout/${itemhour.maLichChieu}`
                                              );
                                            } else {
                                              navigate("/login");
                                              dispatchEvent({
                                                type: "DANGODATVE",
                                                flag: { itemhour },
                                              });
                                            }
                                          }}
                                        >
                                          {moment(
                                            itemhour?.ngayChieuGioChieu
                                          ).format("DD/MM/YYYY ~HH:MM")}
                                        </Button>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ),
                };
              })}
            />
          ),
        };
      })}
    />
  );
}
export default HomeMenu;
