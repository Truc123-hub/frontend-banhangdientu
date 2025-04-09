import React, { useState } from 'react';  // Đảm bảo import useState từ React
import { useNavigate, Link } from 'react-router-dom';  // Đảm bảo import Link từ react-router-dom
import '../css/Login.css';  // Import tệp CSS nếu có
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap
import Footer from './footer';  // Import Footer
import '../css/style.css'; // Import style CSS

const Login = ({ setUsername }) => {
  const navigate = useNavigate();
  const [tendangnhap, setTendangnhap] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Trạng thái loading khi đăng nhập

  // Hàm xử lý đăng nhập
  const handleLogin = async (event) => {
    event.preventDefault();

    setErrorMessage('');  // Reset lỗi
    setIsLoading(true);  // Bắt đầu loading

    try {
      const response = await fetch('http://localhost/backendWebbandodientu/Api/dangnhap.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'TenDangNhap': tendangnhap,
          'MatKhau': password,
        }),
      });

      if (!response.ok) {
        throw new Error('Lỗi kết nối tới server.');
      }

      const data = await response.json();

      if (data.status === 'success') {
        sessionStorage.setItem('username', data.username);  // Lưu username vào sessionStorage
        setUsername(data.username); // Cập nhật username trong state của App.js
        navigate('/');  // Chuyển hướng về trang chủ sau khi đăng nhập thành công
      } else {
        setErrorMessage(data.message || 'Thông tin đăng nhập không hợp lệ.');  // Hiển thị thông báo lỗi
      }
    } catch (error) {
      setErrorMessage('Đã xảy ra lỗi, vui lòng thử lại.');
    } finally {
      setIsLoading(false);  // Kết thúc trạng thái loading
    }
  };

  return (
    <div className="login">
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
                  <Link to="/login">
                    <i className="fa-solid fa-user"></i>
                    Tài khoản
                  </Link>
                </li>
                <li className="cart">
                  <Link to="/giohang">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Giỏ hàng</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main-agileits">
        <div className="form-w3agile">
          <h3>Đăng nhập</h3>
          <form onSubmit={handleLogin}>
            <div className="key">
              <input
                type="text"
                value={tendangnhap}
                onChange={(e) => setTendangnhap(e.target.value)}
                placeholder="Tên đăng nhập"
                required
                className="form-control"
              />
            </div>
            <div className="key">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </form>

          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
