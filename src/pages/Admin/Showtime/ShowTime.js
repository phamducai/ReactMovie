/* eslint-disable react-hooks/exhaustive-deps */
import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import { useEffect } from "react";
import { useState } from "react";

import { quanLyRapService } from "services/QuanLyRapService";
import { useParams } from "react-router-dom";
import moment from "moment";
import { quanLyDatVeService } from "services/QuanLyDatVeService";

const ShowTime = () => {
  const { id, tenphim } = useParams();
  console.log(id, tenphim);
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await quanLyRapService.layThongTinHeThongRap();
        setState({
          ...state,
          heThongRapChieu: result.data.content,
        });
      } catch (error) {}
    };
    fetchData();
  }, []);

  const [ngayKhoiChieu, setNgayKhoiChieu] = useState(0);
  const onChange = (date, dateString) => {
    setNgayKhoiChieu(dateString);
  };

  const handleChangeHeThongRap = async (value) => {
    try {
      let result = await quanLyRapService.layThongTinCumRap(value);
      //Gán giá trị cụm rạp vào state.cumRap
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
  const onFinish = async (value) => {
    const data = {
      maPhim: +id,
      ngayChieuGioChieu: ngayKhoiChieu,
      maRap: value.cumrap,
      giaVe: +value.giave,
    };
    console.log(data);
    try {
      const result = await quanLyDatVeService.taoLichChieu(data);

      alert(result.data.content);
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Hệ thống rạp" name="hethongrap">
          <Select
            required
            options={state.heThongRapChieu?.map((htr, index) => ({
              label: htr.tenHeThongRap,
              value: htr.maHeThongRap,
            }))}
            onChange={handleChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          ></Select>
        </Form.Item>
        <Form.Item label="Cụm rạp" name="cumrap" rules={[{ required: true }]}>
          <Select
            required
            options={state.cumRapChieu?.map((rap, index) => ({
              label: rap.tenCumRap,
              value: rap.maCumRap,
            }))}
          ></Select>
        </Form.Item>

        <Form.Item label="Ngày chiếu" name="ngaychieu">
          <DatePicker
            required
            showTime
            onChange={onChange}
            onOk={onChange}
            format="DD/MM/YYYY hh:mm:ss"
          />
        </Form.Item>
        <Form.Item label="Giá vé" name="giave">
          <InputNumber min={75000} required />
        </Form.Item>
        <Form.Item label="Button">
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ShowTime;
