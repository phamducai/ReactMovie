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
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
