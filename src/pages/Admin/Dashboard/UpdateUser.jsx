import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatThongTinNguoiDung,
  TimKiemNguoiDungAction,
} from "redux/actions/QuanLyNguoiDungAction";
import { useNavigate, useParams } from "react-router-dom";
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
function UpdateUser() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const dispatch = useDispatch();
  const { taikhoan } = useParams();

  const { thongTinKhach } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  console.log(thongTinKhach);
  useEffect(() => {
    forceUpdate({});
    dispatch(TimKiemNguoiDungAction(taikhoan));
  }, [taikhoan]);

  const onFinish = async (values) => {
    const data = {
      taiKhoan: values.UserName,
      email: values.email,
      soDt: values.phone,
      maNhom: "GP01",
      hoTen: values.FullName,
      matKhau: values.password,
      maLoaiNguoiDung: values.typeUser,
    };
    console.log(data);
    try {
      await dispatch(capNhatThongTinNguoiDung(data));
      alert("update Suceessfully");
      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert("User Name don't updata");
    }
  };

  return (
    thongTinKhach[0] && (
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
            initialValue={thongTinKhach[0]?.taiKhoan}
            // tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your UserName!",
                whitespace: true,
              },
            ]}
          >
            <Input disabled={true} />
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
            initialValue={thongTinKhach[0]?.hoTen}
          >
            <Input />
          </Form.Item>
          {/* email */}
          <Form.Item
            initialValue={thongTinKhach[0]?.email}
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
            initialValue={thongTinKhach[0]?.matKhau}
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
            initialValue={thongTinKhach[0]?.soDT}
          >
            <Input
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          {/* loai nguoi dung */}
          <Form.Item
            initialValue={thongTinKhach[0]?.maLoaiNguoiDung}
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
            <Checkbox>Corfirm Update User</Checkbox>
          </Form.Item>

          <Form.Item
            shouldUpdate
            className="w-1/10 mx-auto"
            {...tailFormItemLayout}
          >
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  (!form.isFieldTouched("FullName") &&
                    !form.isFieldTouched("typeUser") &&
                    !form.isFieldTouched("phone") &&
                    !form.isFieldTouched("password") &&
                    !form.isFieldTouched("email")) ||
                  !form.isFieldTouched("agreement") ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Update
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    )
  );
}

export default UpdateUser;
