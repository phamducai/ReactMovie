import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dangKiAction } from "redux/actions/QuanLyNguoiDungAction";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { register, handleSubmit } = useForm();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Success Regiter User",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Error Regiter User",
    });
  };

  const onSubmit = async (value) => {
    const data = {
      hoTen: value.name,
      email: value.email,
      matKhau: value.password,
      soDt: value.phone,
      taiKhoan: value.taikhoan,
      maNhom: "GP00",
    };
    console.log(data);
    try {
      await dispatch(dangKiAction(data));
      success();
      navigate("/login");
    } catch (err) {
      error();
    }
  };
  return (
    <div>
      <div
        className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent"
        style={{
          backgroundImage: `url("https://rb.gy/p2hphi")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full p-5">
          {contextHolder}
          <div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-2/3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-4">
                <div className="mb-2 md:absolute top-0 left-0">
                  <NavLink to={""} className="lg:absolute top-0 left-0">
                    <img
                      src="https://movie-booking-project.vercel.app/img/logoTixLoading.png"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </NavLink>
                </div>
                <div className="hidden md:block text-center font-semibold text-3xl text-blue-800">
                  <h1>Đăng ký tài khoản</h1>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 gap-x-4 gap-y-1">
                {/* name */}
                <div className="mb-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Điền họ và tên vào đây ..."
                    required
                    {...register("name")}
                  />
                </div>
                {/* email */}
                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Example@gmail.com"
                    required
                    {...register("email")}
                  />
                </div>
                {/* Tên Người Dùng */}
                <div className="mb-1">
                  <label
                    htmlFor="taikhoan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Tên Tài Khoản
                  </label>
                  <input
                    type="text"
                    id="taikhoan"
                    name="taikhoan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Điền tên tài khoản vào đây ..."
                    required
                    {...register("taikhoan")}
                  />
                </div>

                {/* password */}
                <div className="mb-1">
                  <label
                    htmlFor="pasword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="***********"
                    required
                    {...register("password")}
                  />
                </div>
                {/* sdt */}

                <div className="mb-1">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Số Điện Thoại
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0974380625"
                    required
                    pattern="^[0-9\-\+]{9,15}$"
                    {...register("phone")}
                  />
                </div>
                <div></div>

                <div className="col-span-2 text-center">
                  <button
                    type="submit"
                    className="text-white focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-red-500 hover:bg-red-800 duration-300 w-1/2"
                  >
                    Đăng ký
                  </button>
                </div>
                <NavLink
                  to={"/login"}
                  className="col-span-2 text-center text-rose-600 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200"
                >
                  Đăng nhập ngay
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/img-redundant-alt */
// import clsx from "clsx";
// import { useFormik } from "formik";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { dangKiAction } from "redux/actions/QuanLyNguoiDungAction";

// export default function Register(props) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       taiKhoan: "",
//       matKhau: "",
//       hoten: "",
//       phone: "",
//       email: "",
//       nhaplaimatkhau: "",
//     },

//     onSubmit: async (values, { setSubmitting }) => {
//       const data = {
//         taiKhoan: values.taiKhoan,
//         matKhau: values.matKhau,
//         email: values.email,
//         soDt: values.phone,
//         hoTen: values.hoten,
//         maNhom: "GP00",
//       };
//       try {
//         await dispatch(dangKiAction(data));
//         alert("Dang Ki Thanh Cong");
//         navigate("/users/login");
//       } catch (error) {
//         alert("Dang Ki That bai");
//       }
//     },
//     validate: (values) => {
//       console.log(values);
//       const errors = {};
//       if (!values.taiKhoan) {
//         errors.taiKhoan = "Required";
//       } else if (!/^[A-z]|[0-9]$/i.test(values.email)) {
//         errors.email = "Invalid email address";
//       }
//       if (!values.matKhau) {
//         errors.matKhau = "Required";
//       }
//       if (values.matKhau !== values.nhaplaimatkhau) {
//         errors.nhaplaimatkhau = "nhap sai mat khau";
//       }
//       if (!values.hoten) {
//         errors.hoten = "Required";
//       }
//       if (!values.email) {
//         errors.email = "Required";
//       }
//       if (!values.phone) {
//         errors.phone = "Required";
//       }

//       return errors;
//     },
//   });
