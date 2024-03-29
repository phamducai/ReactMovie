import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { ThemNguoiDungAction } from "redux/actions/QuanLyNguoiDungAction";
import { NavLink, useNavigate } from "react-router-dom";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const data = {
      taiKhoan: values.UserName,
      email: values.email,
      soDt: "+" + values.prefix + values.phone,
      maNhom: "GP01",
      hoTen: values.FullName,
      matKhau: values.password,
      maLoaiNguoiDung: values.typeUser,
    };
    try {
      await dispatch(ThemNguoiDungAction(data));
      alert("Add User Suceessfully");
      navigate("/admin");
    } catch (error) {
      alert("User Name or Email exist,please try again");
    }
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="container">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "84",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        {/* user Name */}
        <Form.Item
          name="UserName"
          label="UserName"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your UserName!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* Full Name */}
        <Form.Item
          name="FullName"
          label="Full Name"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your Full Name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* email */}
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* password */}
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        {/* confirm password */}
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* phone Number */}
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        {/* loai nguoi dung */}
        <Form.Item
          name="typeUser"
          label="Type User"
          rules={[
            {
              required: true,
              message: "Please select type user!",
            },
          ]}
        >
          <Select placeholder="select type user">
            <Option value="QuanTri">Admin</Option>
            <Option value="KhachHang">Customer</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <NavLink to={"/"}>agreement</NavLink>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUser;
