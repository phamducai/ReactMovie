import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,
} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { themPhimUploadHinhAction } from "redux/actions/QuanLyPhimActions";
import { GROUPID } from "util/settings/config";

const { TextArea } = Input;

export default function AddNew() {
  
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const dispatch = useDispatch();
  const onFormLayoutChange = ({ disabled }, e) => {
    setComponentDisabled(disabled);
  };
  const [ngayKhoiChieu, setNgayKhoiChieu] = useState(0);
  const onChange = (date, dateString) => {
    setNgayKhoiChieu(dateString);
  };

  const handleChangePic = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files);
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
    formData.append("hot", hot);
    formData.append("tenPhim", tenPhim);
    formData.append("trailer", trailer);
    formData.append("moTa", moTa);
    formData.append("sapChieu", sapChieu);
    formData.append("dangChieu", dangChieu);
    formData.append("danhGia", danhGia);
    formData.append("ngayKhoiChieu", ngayKhoiChieu);
    formData.append("maNhom", GROUPID);
    formData.append("File", fileImage, fileImage.name);
    dispatch(themPhimUploadHinhAction(formData));
  };
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>

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
        <Form.Item label="Tên Phim" name="tenPhim">
          <Input />
        </Form.Item>
        <Form.Item label="Trailer" name="trailer">
          <Input />
        </Form.Item>

        <Form.Item label="Mô Tả" name="moTa">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu" name="ngayKhoiChieu">
          <DatePicker onChange={onChange} format={"DD/MM/YYYY"} />
        </Form.Item>

        <Form.Item
          label="Đang Chiếu"
          valuePropName="checked"
          name="dangChieu"
          initialValue={false}
        >
          <Switch style={{ background: "gray" }} />
        </Form.Item>
        <Form.Item
          label="Sắp Chiếu"
          valuePropName="checked"
          name="sapChieu"
          initialValue={false}
        >
          <Switch style={{ background: "gray" }} />
        </Form.Item>
        <Form.Item
          label="Hot"
          valuePropName="checked"
          name="hot"
          initialValue={false}
        >
          <Switch style={{ background: "gray" }} />
        </Form.Item>
        <Form.Item label="Đánh giá" name="danhGia" initialValue={10}>
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
    </>
  );
}
