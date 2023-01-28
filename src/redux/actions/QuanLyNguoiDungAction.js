import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
  DANG_NHAP_ACTION,
  DANH_SACH_KHACH_HANG,
} from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        //Chuyển hướng đăng nhập về trang trước đó
        console.log(result.data);
        localStorage.setItem("token", result.data.content.accessToken);
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};

export const dangKiAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKi(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};
export const updateUserAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        thongTinDangNhap
      );
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};

export const LayDanhSachKhachHang = (data = "") => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDungGp01(
        data
      );
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANH_SACH_KHACH_HANG,
          danhsachkhachhang: result.data.content,
        });
      }
    } catch (error) {
      throw error;
    }
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
