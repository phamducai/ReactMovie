import React from "react";
import { Tabs, Button } from "antd";
import moment from "moment";

function HomeMenu(props) {
  const { heThongRapChieu } = props;

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
                    <div key={cumRap.maCumRap + "10"}>
                      {" "}
                      <div className="text-left">{cumRap?.tenCumRap}</div>
                      <div className="text-left"> {cumRap?.diaChi}</div>
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
                                  <span>C18</span>
                                  {item.tenPhim}
                                </p>
                                <div className=" grid grid-cols-2 gap-4 ">
                                  {" "}
                                  {item?.lstLichChieuTheoPhim
                                    .slice(0, 4)
                                    .map((itemhour) => {
                                      return (
                                        <Button
                                          className="bg-btn"
                                          type="default"
                                          size="default"
                                          key={itemhour.maLichChieu}
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
