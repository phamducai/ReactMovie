import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
const App = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Form Size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên phim" name="tenPhim">
        <Input />
      </Form.Item>
      <Form.Item label="Trailer" name="trailer">
        <Input />
      </Form.Item>
      <Form.Item label="Mô tả" name="moTa">
        <Input />
      </Form.Item>
      <Form.Item
        label="Ngày khởi chiếu"
        name="ngayKhoiChieu"
        format={"DD/MM/YYYY"}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item label="Số sao">
        <InputNumber min={1} max={10} />
      </Form.Item>

      <Form.Item label="Hình ảnh">
        <input type="file" accept="image/png, image/jpeg,image/gif,image/png" />
        <br />
        <img style={{ width: 150, height: 150 }} alt="..." />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
