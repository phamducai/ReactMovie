import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (next) => {
    const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
    console.log(result);
    localStorage.setItem("token", result.data.content.accessToken);
    next({ type: "LOGIN_SUCCESS", payload: result.data });
  };
};

export const layThongTinNguoiDungAction = async (next) => {
  try {
    const result = await quanLyNguoiDungService.layThongTinNguoiDung();
    next({
      type: DANG_NHAP_ACTION,
      thongTinNguoiDung: result.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
