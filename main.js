// Ex01
function xetTuyenSinh() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var khuVuc = Number(document.getElementById("khuVuc").value);
    var doiTuong = Number(document.getElementById("doiTuong").value);
    var diemMon1 = Number(document.getElementById("diemMon1").value);
    var diemMon2 = Number(document.getElementById("diemMon2").value);
    var diemMon3 = Number(document.getElementById("diemMon3").value);

    // Gọi hàm tính điểm
    var diemTong = tinhDiem(khuVuc, doiTuong, diemMon1, diemMon2, diemMon3);

    // Gọi hàm xét kết quả
    var ketQua = ketQuaTuyenSinh(diemMon1, diemMon2, diemMon3, diemTong, diemChuan);

    document.getElementById("ketQuaTuyenSinh").value = ketQua;
}

document.getElementById("tuyenSinh").onclick = xetTuyenSinh;

// Hàm tính điểm
function tinhDiem(khuVuc, doiTuong, diemMon1, diemMon2, diemMon3) {
    var diemTong = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
    return diemTong;
}

// Hàm xét kết quả
function ketQuaTuyenSinh(diemMon1, diemMon2, diemMon3, diemTong, diemChuan) {
    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    } else if (diemTong >= diemChuan) {
        ketQua = "Bạn đã đậu. Tổng điểm: " + diemTong;
    } else {
        ketQua = "Bạn đã rớt. Tổng điểm: " + diemTong;
    }
    return ketQua
}

// Ex02
function tienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var kwDien = Number(document.getElementById("kwDien").value);
    
    // Gọi hàm tính tiền điện
    var tienDien = new Intl.NumberFormat('vn-VN'    ).format(tinhTienDien(kwDien));
    document.getElementById("tienDien").value = "Họ tên: " + hoTen + "; Tiền điện: " + tienDien;
}

document.getElementById("tinhTienDien").onclick = tienDien;

// Hàm tính tiền điện
function tinhTienDien(kwDien) {
    const _KW_0_50 = 500;
    const _KW_51_100 = 650;
    const _KW_101_200 = 850;
    const _KW_201_350 = 1100;
    const _KW_CON_LAI = 1300;
    var tienDien = 0;
    if (kwDien <= 50) {
        tienDien = kwDien * _KW_0_50;
    } else if (kwDien <=100) {
        tienDien = 50 * _KW_0_50 + (kwDien - 50) * _KW_51_100;
    } else if (kwDien <= 200) {
        tienDien = 50 * _KW_0_50 + 50 * _KW_51_100 + (kwDien - 100) * _KW_101_200;
    } else if (kwDien <= 350) {
        tienDien = 50 * _KW_0_50 + 50 * _KW_51_100 + 100 * _KW_101_200 + (kwDien - 200) * _KW_201_350;
    } else {
        tienDien = 50 * _KW_0_50 + 50 * _KW_51_100 + 100 * _KW_101_200 + 150 * _KW_201_350 + (kwDien - 350) * _KW_CON_LAI;
    }
    return tienDien;
}

// Ex03
function tinhTienThue() {
    var hoTen = document.getElementById("hoTen-03").value;
    var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = Number(document.getElementById("soNguoiPhuThuoc").value);

    // Gọi hàm tính tổng thu nhập chịu thuế
    var tongChiuThue = tinhTongChiuThue(tongThuNhap, soNguoiPhuThuoc);

    // Gọi hàm tính thuế suất
    var thueSuat = tinhThueSuat(tongChiuThue);

    var tienThue = new Intl.NumberFormat('en-US').format(tongChiuThue * thueSuat);
    document.getElementById("tienThue").value = "Họ tên: " + hoTen + "; Tiền thuế: " + tienThue + "VND";
}

document.getElementById("tinhTienThue").onclick = tinhTienThue;
// Hàm tính thu nhập chịu thuế
function tinhTongChiuThue(tongThuNhap, soNguoiPhuThuoc) {
    var tongChiuThue = tongThuNhap - 4e+6 - soNguoiPhuThuoc * 1.6e+6;
    return tongChiuThue;
}

// Hàm tính thuế suất
function tinhThueSuat(tongChiuThue) {
    var thueSuat = 0;
    if (tongChiuThue <= 60e+6) {
        thueSuat = 0.05;
    } else if (tongChiuThue <= 120e+6) {
        thueSuat = 0.1;
    } else if (tongChiuThue <= 210e+6) {
        thueSuat = 0.15;
    } else if (tongChiuThue <= 384e+6) {
        thueSuat = 0.2;
    } else if (tongChiuThue <= 624e+6) {
        thueSuat = 0.25;
    } else if (tongChiuThue <= 960e+6) {
        thueSuat = 0.3;
    } else {
        thueSuat = 0.35;
    }
    return thueSuat;
}

// Ex 04
function tinhTienCap() {
    var loaiKhachHang = Number(document.getElementById("loaiKhachHang").value);
    var maKhachHang = document.getElementById("maKhachHang").value;
    var kenhCaoCap = Number(document.getElementById("kenhCaoCap").value);

    if (loaiKhachHang == 0) {
        alert("Vui lòng chọn loại khách hàng");
    } else{
        // Gọi hàm tính phí cố định theo loại khách hàng
        var tienCap = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(tinhPhiCoDinh(loaiKhachHang) + tinhPhiCaoCap(loaiKhachHang, kenhCaoCap));
    
        document.getElementById("tienCap").value = "Mã khách hàng: " + maKhachHang + "; Tiền cáp: " + tienCap;
    }
}

document.getElementById("tinhTienCap").onclick = tinhTienCap;

// Hàm hiện input số kết nối
function inputEnableDisable() {
    var loaiKhachHang = Number(document.getElementById("loaiKhachHang").value);
    if (loaiKhachHang == 2) {
        document.getElementById("soKetNoi").classList.remove("d-none");
        document.getElementById("soKetNoi").classList.add("mt-2");
    } else {
        document.getElementById("soKetNoi").classList.remove("mt-2");
        document.getElementById("soKetNoi").classList.add("d-none");
    }
}

// Hàm tính phí cố định theo loại khách hàng
function tinhPhiCoDinh(loaiKhachHang) {
    switch(loaiKhachHang) {
        case 1:
             // phiCoDinh = phí xử lý hóa đơn + phí dịch vụ cơ bản
            var phiCoDinh = 4.5 + 20.5;
            break;
        case 2: 
            // phiCoDinh = phí xử lý hóa đơn + phí dịch vụ cơ bản + phí kết nối phát sinh > 10 kết nối
            var phiCoDinh = 15 + 75 + ketNoiPhatSinh();
            break;
    }
    return phiCoDinh;
}

// Hàm tính phí kênh cao cấp theo loại khách hàng
function tinhPhiCaoCap(loaiKhachHang, kenhCaoCap) {
    if (loaiKhachHang == 1) {
        var phiCaoCap = kenhCaoCap * 7.5;
    } else {
        var phiCaoCap = kenhCaoCap * 50;
    }
    return phiCaoCap;
}

// Hàm tính tiền kết nối phát sinh
function ketNoiPhatSinh() {
    var soKetNoi = Number(document.getElementById("soKetNoi").value);
    if (soKetNoi > 10) {
        // tienKetNoi = (số kết nối - 10) * $5
        var tienKetNoi = (soKetNoi - 10) * 5;
    } else {
        var tienKetNoi = 0;
    }
    return tienKetNoi;
}
