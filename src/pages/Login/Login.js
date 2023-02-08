import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { LoginAction } from "redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { dangNhapAction } from "redux/actions/QuanLyNguoiDungAction";

function Login() {
  const navigate = useNavigate();
  let flag = useSelector((state) => state.CarouselReducer.flag);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (value) => {
    console.log(value);
    const data = {
      taiKhoan: value.taiKhoan,
      matKhau: value.password,
    };
    try {
      await dispatch(dangNhapAction(data));
      success();
      if (flag) {
        navigate(`/checkout/${flag.itemLich.maLichChieu}`);
        window.location.reload();
      } else {
        navigate("/");
        window.location.reload();
      }

      navigate("/");
    } catch (err) {
      error();
    }
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Success Login",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Error Login",
    });
  };
  return (
    <div
      className="relative flex h-screen w-screen flex-col md:items-center md:justify-center md:bg-transparent"
      style={{
        backgroundImage: `url("http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-lg shadow-lg bg-white px-10 py-5 w-4/5 sm:w-1/2 md:w-2/5">
        {contextHolder}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-4">
            <NavLink to={"/"} className="lg:absolute top-0 left-0">
              <h2 className="text-center mb-2">
                <img
                  src="https://movie-booking-project.vercel.app/img/logoTixLoading.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </h2>
            </NavLink>
            <div className="hidden lg:block font-semibold text-3xl text-blue-800 text-center">
              Đăng nhập
            </div>
          </div>
          <div>
            <div className="mb-2">
              <label
                htmlFor="taiKhoan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Tài Khoản
              </label>
              <input
                {...register("taiKhoan")}
                type="text"
                id="taiKhoan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor=""
                className="block mb-2 font-medium text-sm text-gray-900 dark:text-gray-300"
              >
                Mật Khẩu
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-6">
              <NavLink
                to={""}
                className="text-rose-700 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200 active"
              >
                Quên mật khẩu?
              </NavLink>
              <button
                type="submit"
                className="text-white focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full bg-red-500 hover:bg-red-800 duration-300 border-inherit"
              >
                Đăng nhập
              </button>
            </div>
            <div className="text-center">
              <p>
                Chưa có tài khoản{" "}
                <NavLink
                  to={"/register"}
                  className="text-rose-700 hover:text-rose-500 hover:underline underline-offset-4 tracking-wider duration-200"
                >
                  Đăng ký ngay
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/img-redundant-alt */
// import { useFormik } from "formik";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { dangNhapAction } from "redux/actions/QuanLyNguoiDungAction";

// export default function Login(props) {
//
//   console.log(flag);

//   console.log(props);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       taiKhoan: "",
//       matKhau: "",
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.taiKhoan) {
//         errors.taiKhoan = "Required";
//       } else if (!/[A-z]|[0-9]$/i.test(values.taiKhoan)) {
//         errors.taiKhoan = "Invalid useName";
//       }
//       if (!values.matKhau) {
//         errors.matKhau = "Required";
//       }
//       return errors;
//     },
//     onSubmit: async (values) => {
//       try {
//         await dispatch(dangNhapAction(values));
//         if (flag) {
//           navigate(`/checkout/${flag.itemLich.maLichChieu}`);
//           window.location.reload();
//         } else {
//           navigate("/");
//           window.location.reload();
//         }
//       } catch (error) {
//         alert("Sai Mat Khau Hoac Ten Dang Nhap");
//       }
//     },
//   });
