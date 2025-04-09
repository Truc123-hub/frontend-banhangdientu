import React, { useState } from 'react';  // Import useState từ React
import { useNavigate, Link } from 'react-router-dom';  // Import Link từ react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap
import '../css/Login.css';  // Import tệp CSS nếu có
import Footer from './footer';
import TrangChu from './trangchu';  // Import TrangChu (header)

const Register = () => {
  const navigate = useNavigate();  // Khởi tạo navigate từ useNavigate
  const [email, setEmail] = useState('');  // State cho email
  const [password, setPassword] = useState('');  // State cho password
  const [confirmPassword, setConfirmPassword] = useState('');  // State cho confirm password

  const handleRegister = (event) => {
    event.preventDefault();  // Ngừng reload trang khi submit form

    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
    } else if (email === '' || password === '') {
      alert('Vui lòng điền đầy đủ thông tin!');
    } else {
      // Logic xử lý đăng ký, ví dụ gửi yêu cầu tới API
      alert('Đăng ký thành công!');
      navigate('/login');  // Chuyển hướng về trang đăng nhập sau khi đăng ký thành công
    }
  };

  return (
    <div className="login">
      {/* Top section */}
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
                  <Link to="/tintuc">
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
                {/* <li className="menu">
                  <Link to="/lienhe">
                    <i className="fa-solid fa-truck-fast"></i>
                    Liên hệ
                  </Link>
                </li> */}
                <li>
                <div className="search__member" style={{ marginBottom: '15px' }}>
                      <Link to="/login"> {/* Đổi đường dẫn đến trang Login */}
                        <i className="fa-solid fa-user"></i>
                        Tài khoản
                      </Link>
                      <div className="countSL"></div>
                    </div>
                </li>
                <li>
                          
                
                    {/* End Member */}
                    <div className="cart">
                      <Link to="/giohang">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>Giỏ hàng</span>
                        <span className="cart-number"></span>
                      </Link>
                    </div>
            
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main-agileits">
        <div className="form-w3agile">
          <h3>Đăng ký tài khoản</h3>
          <form onSubmit={handleRegister}>
            <div className="key">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="key">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                required
              />
            </div>
            <div className="key">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu"
                required
              />
            </div>
            <input type="submit" value="Đăng ký" />
          </form>
        </div>
                <div className="forg">
        <Link to="/register" className="forg-right">Đăng ký tài khoản mới</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
