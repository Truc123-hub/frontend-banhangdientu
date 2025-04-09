import React, { useState, useEffect } from 'react'; // Đảm bảo import React
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap
import '../css/base.css';
import '../css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchSection from './search';  // Import các section khác
import CarouselSection from './bannerhinhanh';
import BrandSection from './brand';
import ProductSection from './sanphamphukien';
import ProductSection1 from './linhkienmaytinh';
import Footer from './footer';

const TrangChu = ({ username }) => {
  const [userName, setUserName] = useState(username);  // Lưu trữ tên người dùng trong state

  useEffect(() => {
    // Kiểm tra nếu có username trong sessionStorage, nếu có thì cập nhật state
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUserName(storedUsername);  // Cập nhật giá trị username từ sessionStorage vào state
    }
  }, []);  // Chỉ chạy khi trang được tải lần đầu

  return (
    <div>
      <div id="content">
        <div className="top wow fadeInDown">
          <div className="top__inner">
            <div className="top__logo">
              <Link to="/">
                <img src="/image/logohh1.png" alt="Trang chủ SmartTV Store" title="Trang chủ SmartTV Store" />
              </Link>
            </div>
            <div className="top__content">
              <ul>
                <li className="menu">
                  <Link to="/">
                    <i className="fa-solid fa-house"></i>
                    Trang Chủ
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/danhmuc">
                    <i className="fas fa-list"></i>
                    Danh Mục
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/tuyendung">
                    <i className="fa-solid fa-newspaper"></i>
                    Tuyển dụng
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/baohanh">
                    <i className="fa-solid fa-wrench"></i>
                    Bảo hành
                  </Link>
                </li>

                {/* Phần hiển thị tên đăng nhập hoặc link đăng nhập */}
                <li>
                  <div className="search__member" style={{ marginBottom: '15px' }}>
                    {userName ? (
                      <span>
                        <i className="fa-solid fa-user"></i>
                        {userName}  {/* Hiển thị tên đăng nhập người dùng */}
                      </span>
                    ) : (
                      <Link to="/login">
                        <i className="fa-solid fa-user"></i>
                        Tài khoản
                      </Link>
                    )}
                    <div className="countSL"></div>
                  </div>
                </li>

                {/* Phần giỏ hàng */}
                <li>
                  <div className="cart">
                    <Link to="/giohang">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span>Giỏ hàng</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Các section khác */}
        <SearchSection />
        <CarouselSection />
        <BrandSection />
        <ProductSection />
        <ProductSection1 />
        <Footer />
      </div>
    </div>
  );
};

export default TrangChu;
