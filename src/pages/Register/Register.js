/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import clsx from "clsx";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { dangKiAction } from "redux/actions/QuanLyNguoiDungAction";

export default function Register(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoten: "",
      phone: "",
      email: "",
      nhaplaimatkhau: "",
    },

    onSubmit: async (values, { setSubmitting }) => {
      const data = {
        taiKhoan: values.taiKhoan,
        matKhau: values.matKhau,
        email: values.email,
        soDt: values.phone,
        hoTen: values.hoten,
        maNhom: "GP00",
      };
      try {
        await dispatch(dangKiAction(data));
        alert("Dang Ki Thanh Cong");
        navigate("/users/login");
      } catch (error) {
        alert("Dang Ki That bai");
      }
    },
    validate: (values) => {
      console.log(values);
      const errors = {};
      if (!values.taiKhoan) {
        errors.taiKhoan = "Required";
      } else if (!/^[A-z]|[0-9]$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.matKhau) {
        errors.matKhau = "Required";
      }
      if (values.matKhau !== values.nhaplaimatkhau) {
        errors.nhaplaimatkhau = "nhap sai mat khau";
      }
      if (!values.hoten) {
        errors.hoten = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.phone) {
        errors.phone = "Required";
      }

      return errors;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className=" mt-4 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 lg:mt-8 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
xl:text-bold"
        >
          Sign Up
        </h2>
        <div className="mt-10">
          <div>
            <div>
              <input
                name="taiKhoan"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="User Name"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <span>{formik.errors.taiKhoan}</span>
              )}
            </div>
            <div>
              <input
                name="matKhau"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="PassWord"
                onChange={formik.handleChange}
                value={formik.values.matKhau}
              />{" "}
              {formik.errors.matKhau && formik.touched.matKhau && (
                <span>{formik.errors.matKhau}</span>
              )}
            </div>
            <div>
              <input
                name="nhaplaimatkhau"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="PassWord Confirm"
                onChange={formik.handleChange}
                value={formik.values.nhaplaimatkhau}
              />
              {formik.errors.nhaplaimatkhau &&
                formik.touched.nhaplaimatkhau && (
                  <span>{formik.errors.nhaplaimatkhau}</span>
                )}
            </div>
            <div>
              <input
                name="hoten"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Full Name"
                onChange={formik.handleChange}
                value={formik.values.hoten}
              />
              {formik.errors.hoten && formik.touched.hoten && (
                <span>{formik.errors.hoten}</span>
              )}
            </div>
            <div>
              <input
                name="email"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="mike@gmail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
              />{" "}
              {formik.errors.email && formik.touched.email && (
                <span>{formik.errors.email}</span>
              )}
            </div>
            <div>
              <input
                name="phone"
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />{" "}
              {formik.errors.phone && formik.touched.phone && (
                <span>{formik.errors.phone}</span>
              )}
            </div>
            <div className="mt-10">
              <button
                type="submit"
                // disabled={formik.isSubmitting}
                className={clsx(
                  " text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outlineshadow-lg",
                  {
                    "bg-indigo-500 hover:bg-indigo-600 ":
                      formik.isSubmitting === false,
                    "bg-slate-600  hover:bg-red-500":
                      formik.isSubmitting === true,
                  }
                )}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
