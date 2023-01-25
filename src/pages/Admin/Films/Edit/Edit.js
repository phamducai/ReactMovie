/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
  Upload,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "util/settings/config";

import { useNavigate, useParams } from "react-router-dom";

import {
  capNhatPhimUploadAction,
  layThongTinPhimAction,
} from "redux/actions/QuanLyPhimActions";
import moment from "moment";
const { TextArea } = Input;

// ----------------------------------------------------------------------------------------------
export default function EditFilm() {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);

  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, [id, dispatch]);

  const onFormLayoutChange = ({ disabled }, e) => {
    setComponentDisabled(disabled);
  };

  const [ngayKhoiChieu, setNgayKhoiChieu] = useState(0);
  const onChange = (date, dateString) => {
    setNgayKhoiChieu(dateString);
  };

  const handleChangePic = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImageBase64(event.target.result);
    };
    setFileImage(file);
  };

  const onFinish = (values) => {
    const { tenPhim, trailer, moTa, sapChieu, dangChieu, hot, danhGia } =
      values;
    let formData = new FormData();
    formData.append("maPhim", id);
    formData.append("dangChieu", dangChieu);
    formData.append("hot", hot);
    formData.append("tenPhim", tenPhim);
    formData.append("trailer", trailer);
    formData.append("moTa", moTa);
    formData.append("sapChieu", sapChieu);
    formData.append("danhGia", danhGia);
    formData.append("ngayKhoiChieu", ngayKhoiChieu);
    formData.append("maNhom", GROUPID);
    formData.append("File", fileImage, fileImage.name);
    dispatch(capNhatPhimUploadAction(formData));
  };
  const { tenPhim, trailer, moTa, sapChieu, dangChieu, hot, danhGia } =
    thongTinPhim;
  const lich = thongTinPhim.ngayKhoiChieu;
  const lichFilm = moment(lich).format("DD/MM/YYYY");
  console.log(thongTinPhim);
  return (
    <>
      {tenPhim && (
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
          disabled={componentDisabled}
          size={"default"}
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên Phim"
            name="tenPhim"
            values="haha"
            initialValue={tenPhim}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Trailer" name="trailer" initialValue={trailer}>
            <Input />
          </Form.Item>

          <Form.Item label="Mô Tả" name="moTa" initialValue={moTa}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label="Ngày khởi chiếu"
            name="ngayKhoiChieu"
            initialValue={dayjs(lichFilm, "DD/MM/YYYY")}
          >
            <DatePicker onChange={onChange} format={"DD/MM/YYYY"} />
          </Form.Item>

          <Form.Item
            label="Đang Chiếu"
            valuePropName="checked"
            name="dangChieu"
            initialValue={dangChieu}
          >
            <Switch style={{ background: "gray" }} />
          </Form.Item>
          <Form.Item label="Sắp Chiếu" valuePropName="checked" name="sapChieu">
            <Switch style={{ background: "gray" }} />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked" initialValue={hot}>
            <Switch style={{ background: "gray" }} />
          </Form.Item>

          <Form.Item label="Đánh giá" name="danhGia">
            <InputNumber min={1} max={10} />
          </Form.Item>

          <Form.Item label="Upload" name="hinhAnh">
            <div>
              <input
                type="file"
                accept="image/png, image/jpeg,image/jpg, image/gìf"
                onChange={handleChangePic}
              />
              {imageBase64 && (
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={imageBase64}
                  alt="Modal Pic"
                />
              )}
            </div>
          </Form.Item>
          <Form.Item label="Tác Vụ">
            <Button
              style={{ background: "#1677ff", color: "white" }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}
