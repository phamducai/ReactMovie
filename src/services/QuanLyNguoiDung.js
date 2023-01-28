import { baseService } from "./baseService";
export class QuanLyNguoiDungService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
  capNhatThongTinNguoiDung = (data) => {
    return this.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  };
  dangKi = (thongTinDangKi) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKi);
  };

  layDanhSachNguoiDungGp01 = (data = "", Group = "GP01") => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${Group}`,
      data
    );
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
