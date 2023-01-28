import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layThongTinNguoiDungAction,
  updateUserAction,
} from "redux/actions/QuanLyNguoiDungAction";
const Profile = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  let profile = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );

  const email = profile?.email;
  // To disable submit button at the beginning.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layThongTinNguoiDungAction);
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    const data = {
      taiKhoan: values.username,
      soDT: values.phone,
      matKhau: values.password,
      maNhom: "GP00",
      hoTen: values.fullName,
      maLoaiNguoiDung: "KhachHang",
      email: values.Email,
    };
    console.log(data);

    dispatch(updateUserAction(data));
  };
  return (
    email && (
      <Form
        form={form}
        name="horizontal_login"
        onFinish={onFinish}
        className="container grid grid-cols-2 gap-x-10 "
      >
        <Form.Item
          initialValue={email}
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
          label="Email"
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          initialValue={profile.taiKhoan}
          label="User Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          initialValue={profile.hoTen}
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="FullName"
          />
        </Form.Item>{" "}
        <Form.Item
          initialValue={profile.matKhau}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          initialValue={profile.soDT}
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Phone Number"
          />
        </Form.Item>
        <Form.Item shouldUpdate className="w-1/10 mx-auto">
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                (!form.isFieldTouched("phone") &&
                  !form.isFieldTouched("password") &&
                  !form.isFieldTouched("fullName") &&
                  !form.isFieldTouched("Email") &&
                  !form.isFieldTouched("username")) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    )
  );
};
export default Profile;
